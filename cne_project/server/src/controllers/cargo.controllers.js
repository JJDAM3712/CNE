import { pool} from "../db.js";
import { obtenerCargos } from "../config/consultas.config.js";
import { io } from "../app.js";

// mostrar todos los cargos
export const showCargos= async (req, res) => {
    try{
        const [result] = await pool.query(
            "SELECT * FROM cargos ORDER BY cargo ASC");
        //io.emit('ActualizatTable', result);
        res.json(result);
    } catch(error){
        return res.status(500).json({mensaje: error.message});
    }
}
// mostrar un cargo
export const showCarg = async (req, res) => {
    try{
        const [result] = await pool.query(
            "SELECT * FROM cargos WHERE id_cargo = ?",
            [req.params.id]
        );
        console.log(result);
        if (result === 0){
            return res.status(404).json({mensaje: `El cargo no existe`})
        }
        res.json(result);
    } catch(error){
        return res.status(500).json({mensaje: error.message});
    }
}
// Crear cargos
export const insertCargos = async (req, res) => {
    try{
        const {cargo, cantidad} = req.body;
        const [result] = await pool.query(
            "INSERT INTO cargos(cargo, cantidad) VALUES (?, ?)",
            [cargo, cantidad]
        );
        obtenerCargos()
        res.json({
            id_cargo: result.insertId,
            cargo,
            cantidad
        });
    } catch(error){
        return res.status(500).json({mensaje: error.message});
    }
}
// Actualizar cargos
export const updateCago = async (req, res) => {
    try{
        const {cargo, cantidad} = req.body;
        const [result] = await pool.query(
            "UPDATE cargos SET ? WHERE id_cargo = ?",
            [
                req.body,
                req.params.id
            ]);
        obtenerCargos()
        res.json(result)
    } catch(error){
        return res.status(500).json({mensaje: error.message});
    }
}
// eliminar cargos
export const deleteCargo = async (req, res) => {
    try{
        const [result] = await pool.query(
            "DELETE FROM cargos WHERE id_cargo = ?",
            [req.params.id]
        );
        if (result.affectedRows === 0){
            return res.status(404).json({mensaje: "El cargo no existe"});
        }
        obtenerCargos()
        return res.sendStatus(204);    
    } catch(error){
        return res.status(500).json({mensaje: error.message});
    }
}
