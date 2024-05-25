import { pool } from '../db.js';
import fs from 'fs';
import path from 'path';
import multer from 'multer';

// Configurar multer para almacenar archivos en la memoria
const upload = multer({ storage: multer.memoryStorage() });

// crear respaldo de la bd
export const SavedResp = async (req, res) => {
  try {
    // Lista de tablas a respaldar
    const tablesToBackup = ['asistencia', 'visita', 'personal', 'cargos', 'categoria', 'inventario', 'user', 'departamento'];
    // Obtener la fecha y hora actual
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().replace(/:/g, '-').replace(/\./g, '-'); // Formato: YYYY-MM-DDTHH-mm-ss-SSSZ

    // Obtener la ruta del directorio de respaldo
    const backupDir = path.join(process.cwd(), '../backup'); // Ruta al directorio backup en el nivel superior

    // Crear el directorio de respaldo si no existe
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir);
    }
    // Generar el nombre del archivo de respaldo con la fecha y hora actual
    const backupFileName = `backup_${formattedDate}.sql`;
    const backupFilePath = path.join(backupDir, backupFileName); // Ruta absoluta al archivo de respaldo

    // Generar consultas SQL para cada tabla y escribirlas en el archivo de respaldo
    const backupStream = fs.createWriteStream(backupFilePath);

    for (const tableName of tablesToBackup) {
      const [tableInfo] = await pool.query(`SHOW CREATE TABLE \`${tableName}\``);
      const createTableSQL = tableInfo[0]['Create Table'];
      backupStream.write(`${createTableSQL};\n`);

      const [tableData] = await pool.query(`SELECT * FROM \`${tableName}\``);
      for (const row of tableData) {
        const insertValues = Object.values(row).map(value => typeof value === 'string' ? `'${value}'` : value).join(',');
        backupStream.write(`INSERT INTO \`${tableName}\` VALUES (${insertValues});\n`);
      }
    }

    backupStream.end();

    console.log('Respaldo de la base de datos creado correctamente.');
    return res.status(200).json('Respaldo realizado con exito')
  } catch (error) {
    console.error('Error al realizar el respaldo de la base de datos:', error);
    return res.status(500).json({mensaje: error.message})
  }
}

// Definir la función RestoreResp
export const RestoreResp =  async (req, res) => {
  try {
    // El archivo estará disponible en req.file
    const { buffer: backupFileBuffer } = req.file;
    // Convertir el buffer a string
    const backupFileName = backupFileBuffer.toString('utf-8');

    const backupDir = path.join(process.cwd(), '../backup'); // Ruta al directorio de respaldo

    const backupFilePath = path.join(backupDir, backupFileName); // Ruta absoluta al archivo de respaldo

    // Verificar si el archivo de respaldo existe
    if (!fs.existsSync(backupFilePath)) {
      return res.status(404).json({ mensaje: 'El archivo de respaldo no existe' });
    }

    // Leer el contenido del archivo de respaldo
    const backupContent = fs.readFileSync(backupFilePath, 'utf-8');

    // Separar el contenido en instrucciones SQL individuales
    const sqlStatements = backupContent.split(';\n').map(statement => statement.trim()).filter(statement => statement.length > 0);

    // Obtener el nombre de las tablas del archivo de respaldo
    const tablesInBackup = new Set();
    for (const statement of sqlStatements) {
      if (statement.startsWith('CREATE TABLE')) {
        const tableNameMatch = statement.match(/CREATE TABLE `([^`]+)`/);
        if (tableNameMatch) {
          const tableName = tableNameMatch[1];
          tablesInBackup.add(tableName);
        }
      }
    }
    // Obtener las tablas existentes en la base de datos
    const [existingTables] = await pool.query('SHOW TABLES');
    const tablesInDB = existingTables.map(table => Object.values(table)[0]);

    // Imprimir las tablas encontradas en la base de datos para depuración
    console.log('Tablas en la base de datos actual:', tablesInDB);

    // Filtrar las tablas del archivo de respaldo que existen en la base de datos
    const validTables = [...tablesInBackup].filter(table => tablesInDB.includes(table));

    // Imprimir las tablas válidas encontradas en el respaldo
    console.log('Tablas válidas en el respaldo:', validTables);

    // Deshabilitar restricciones de clave externa temporalmente
    await pool.query('SET FOREIGN_KEY_CHECKS = 0');

    // Ejecutar solo las instrucciones SQL para las tablas válidas
    for (const statement of sqlStatements) {
      const createTableMatch = statement.match(/CREATE TABLE `([^`]+)`/);
      const insertMatch = statement.match(/INSERT INTO `([^`]+)`/);

      if (createTableMatch) {
        const tableName = createTableMatch[1];
        console.log(`Encontrado nombre de la tabla: ${tableName}`);
        if (validTables.includes(tableName)) {
          const [tableExists] = await pool.query(`SHOW TABLES LIKE '${tableName}'`);
          if (tableExists.length === 0) {
            await pool.query(statement);
            console.log(`Tabla ${tableName} creada correctamente.`);
          } else {
            console.log(`La tabla ${tableName} ya existe. No se creará nuevamente.`);
          }
        } else {
          console.warn(`La tabla ${tableName} no está en la lista de tablas válidas`);
        }
      } else if (insertMatch) {
        const tableName = insertMatch[1];
        if (validTables.includes(tableName)) {
          try {
            // Ejecutar la sentencia INSERT
            await pool.query(statement);
            console.log(`Datos insertados correctamente en la tabla: ${tableName}`);
          } catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
              console.warn(`Entrada duplicada encontrada en la tabla ${tableName}. Se ignora esta entrada.`);
            } else {
              console.error(`Error al insertar datos en la tabla ${tableName}:`, error);
              return res.status(500).json({ mensaje: error.message });
            }
          }
        } else {
          console.warn(`La tabla ${tableName} no está en la lista de tablas válidas`);
        }
      } else {
        console.warn('No se pudo encontrar una sentencia válida en:', statement);
      }
    }
    // Habilitar restricciones de clave externa nuevamente
    await pool.query('SET FOREIGN_KEY_CHECKS = 1');

    console.log('Restauración de la base de datos completada correctamente.');
    return res.status(200).json({ mensaje: 'Restauración completada con éxito' });
  } catch (error) {
    console.error('Error al restaurar la base de datos:', error);
    return res.status(500).json({ mensaje: error.message });
  }
};