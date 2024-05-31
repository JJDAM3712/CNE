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