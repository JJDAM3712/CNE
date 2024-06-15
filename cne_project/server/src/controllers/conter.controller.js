import { pool } from '../db.js'

// conteo personal
export const contPersonal = async (req, res) => {
    try {
        const sql = 'SELECT COUNT (*) FROM personal';
        const [result] = await pool.query(sql);
        res.json(result);
    } catch (error) {
        return res.status(500).json({mensaje:  error.message})
    }
}
// conteo asistencias
export const contAsistencias = async (req, res) => {
    try {
        const sql = 'SELECT COUNT (*) FROM asistencia';
        const [result] = await pool.query(sql);
        res.json(result);
    } catch (error) {
        return res.status(500).json({mensaje:  error.message})
    }
}
// conteo visitas
export const contVisitas = async (req, res) => {
    try {
        const sql = 'SELECT COUNT (*) FROM visita';
        const [result] = await pool.query(sql);
        res.json(result);
    } catch (error) {
        return res.status(500).json({mensaje:  error.message})
    }
}
// conteo inventario
export const contInventario = async (req, res) => {
    try {
        const sql = 'SELECT COUNT (*) FROM inventario';
        const [result] = await pool.query(sql);
        res.json(result);
    } catch (error) {
        return res.status(500).json({mensaje:  error.message})
    }
}
// conteo departamento
export const contDepart = async (req, res) => {
    try {
        const sql = 'SELECT COUNT (*) FROM departamento';
        const [result] = await pool.query(sql);
        res.json(result);
    } catch (error) {
        return res.status(500).json({mensaje:  error.message})
    }
}
// conteo cargos
export const contCargo = async (req, res) => {
    try {
        const sql = 'SELECT COUNT (*) FROM cargos';
        const [result] = await pool.query(sql);
        res.json(result);
    } catch (error) {
        return res.status(500).json({mensaje:  error.message})
    }
}
// conteo categoria
export const contCategoria = async (req, res) => {
    try {
        const sql = 'SELECT COUNT (*) FROM categoria';
        const [result] = await pool.query(sql);
        res.json(result);
    } catch (error) {
        return res.status(500).json({mensaje:  error.message})
    }
}