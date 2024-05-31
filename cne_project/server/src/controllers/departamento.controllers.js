import { io } from "../app.js";
import { obtenerDepart } from "../config/consultas.config.js";
import { pool} from "../db.js";

// mostrar todos los departamentos
export const obtenerDeparts = async (req, res) => {
    try{
        const [result] = await pool.query(
            "SELECT * FROM departamento ORDER BY departamento ASC");
        //io.emit('ActualizatTable', result);
        res.json(result);
    } catch(error){
        return res.status(500).json({mensaje: error.message});
    }
}
// mostrar un departamento
export const obtenerDepa = async (req, res) => {
    try{
        const [result] = await pool.query(
            "SELECT * FROM departamento WHERE id_departamento = ?",
            [req.params.id]
        );
        console.log(result);
        if (result === 0){
            return res.status(404).json({mensaje: `El departamento no existe`})
        }
        res.json(result);
    } catch(error){
        return res.status(500).json({mensaje: error.message});
    }
}
// Crear departamentos
export const crearDepart = async (req, res) => {
    try{
        const {departamento} = req.body;
        const [result] = await pool.query(
            "INSERT INTO departamento(departamento) VALUES (?)",
            [departamento]
        );
        obtenerDepart()
        res.json({
            id_departamento: result.insertId,
            departamento
        });
    } catch(error){
        return res.status(500).json({mensaje: error.message});
    }
}
// Actualizar departamento
export const updateDepart = async (req, res) => {
    try{
        const {departamento} = req.body;
        const [result] = await pool.query(
            "UPDATE departamento SET ? WHERE id_departamento = ?",
            [
                req.body,
                req.params.id
            ]);
        obtenerDepart()
        res.json(result)
    } catch(error){
        return res.status(500).json({mensaje: error.message});
    }
}
// eliminar departamentos
export const deleteDepart = async (req, res) => {
    try{
        const [result] = await pool.query(
            "DELETE FROM departamento WHERE id_departamento = ?",
            [req.params.id]
        );
        if (result.affectedRows === 0){
            return res.status(404).json({mensaje: "El departamento no existe"});
        }
        obtenerDepart();
        return res.sendStatus(204);    
    } catch(error){
        return res.status(500).json({mensaje: error.message});
    }
}