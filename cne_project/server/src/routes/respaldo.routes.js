import { Router } from 'express';
import { SavedResp } from '../controllers/respaldo.controller.js';
import { pool } from '../db.js';
import fs from 'fs';
import path from 'path';
import multer from 'multer';

const router = Router();

// Configurar multer para almacenar archivos en la memoria
const upload = multer({ storage: multer.memoryStorage() });

router.get('/back', SavedResp);
router.post('/back',  upload.single('file'), async (req, res) => {
  try {
    const backupFileName = req.file.originalname;
    const backupDir = path.join(process.cwd(), '../backup');
    const backupFilePath = path.join(backupDir, backupFileName);

    if (!fs.existsSync(backupFilePath)) {
      return res.status(404).json({ mensaje: 'El archivo de respaldo no existe' });
    }
    // Obtén la versión de MySQL
    const [rows] = await pool.query('SELECT VERSION()');
    const mysqlVersion = rows[0]['VERSION()'];

    // Selecciona la collation basada en la versión de MySQL
    let collation;
    if (mysqlVersion.startsWith('8.')) {
      collation = 'utf8mb4_0900_ai_ci';
    } else {
      collation = 'utf8mb4_general_ci';
    }

    const backupContent = fs.readFileSync(backupFilePath, 'utf-8');
    const sqlStatements = backupContent.split(';\n').map(statement => statement.trim()).filter(statement => statement.length > 0);

    const tablesInBackup = new Set();
    
    for (const statement of sqlStatements) {
      // Reemplaza la collation en la sentencia SQL
      const modifiedStatement = statement.replace(/utf8mb4_0900_ai_ci/g, collation);

      const createTableMatch = modifiedStatement.match(/CREATE TABLE `([^`]+)`/);
      if (createTableMatch) {
        const tableName = createTableMatch[1];
        tablesInBackup.add(tableName);
      }
    }
    const validTables = [...tablesInBackup];

    const [existingTables] = await pool.query('SHOW TABLES');
    const tablesInDB = existingTables.map(table => Object.values(table)[0]);
    console.log('Tablas en la base de datos actual:', tablesInDB);

    

    console.log('Tablas válidas en el respaldo:', validTables);

    await pool.query('SET FOREIGN_KEY_CHECKS = 0');

    for (const statement of sqlStatements) {
      // Reemplaza la collation en la sentencia SQL
      const modifiedStatement = statement.replace(/utf8mb4_0900_ai_ci/g, collation);

      const createTableMatch = statement.match(/CREATE TABLE `([^`]+)`/);
      const insertMatch = statement.match(/INSERT INTO `([^`]+)`/);

      if (createTableMatch) {
        const tableName = createTableMatch[1];
        console.log(`Encontrado nombre de la tabla: ${tableName}`);
        if (validTables.includes(tableName)) {
          // Eliminar la tabla si ya existe
          await pool.query(`DROP TABLE IF EXISTS ${tableName}`);
          // Crear la tabla
          await pool.query(modifiedStatement);
          console.log(`Tabla ${tableName} creada correctamente.`);
        } else {
          console.warn(`La tabla ${tableName} no está en la lista de tablas válidas`);
        }
      } else if (insertMatch) {
        const tableName = insertMatch[1];
        if (validTables.includes(tableName)) {
          try {
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
        console.warn('No se pudo encontrar una sentencia válida en:', modifiedStatement);
      }
    }
    await pool.query('SET FOREIGN_KEY_CHECKS = 1');
    console.log('Restauración de la base de datos completada correctamente.');
    return res.status(200).json({ mensaje: 'Restauración completada con éxito' });
  } catch (error) {
    console.error('Error al restaurar la base de datos:', error);
    return res.status(500).json({ mensaje: error.message });
  }
});


export default router;