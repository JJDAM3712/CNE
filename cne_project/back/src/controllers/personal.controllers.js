import { pool } from "../db.js";

// mostrar todo el personal
export const showPersonals= async (req, res) => {
    try{
        const [result] = await pool.query(
            `SELECT * 
            FROM personal 
            join cargos on cargos.id_cargo = personal.id_cargo 
            join departamento on departamento.id_departamento = personal.id_departamento`,
            [req.params.id]
        );
        res.json(result);
    } catch(error){
        return res.status(500).json({mensaje: error.message});
    }
}
// mostrar un personal
export const showPersonal = async (req, res) => {
    try{
        const [result] = await pool.query(
            `SELECT * 
            FROM personal 
            join cargos on cargos.id_cargo = personal.id_cargo 
            join departamento on departamento.id_departamento = personal.id_departamento
            where id_personal = ?`,
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
// Crear departamentos
export const createPersonal = async (req, res) => {
    try{
        const {nombre, apellido, cedula, telefono, id_cargo, id_departamento} = req.body;
        const [result] = await pool.query(
            `INSERT INTO personal
            (nombre, apellido, cedula, telefono, id_cargo, id_departamento) 
            VALUES (?, ?, ?, ?, ?, ?)`,
            [nombre, apellido, cedula, telefono, id_cargo, id_departamento]
        );
        console.log(result);
        res.json({
            id_personal: result.insertId,
            nombre,
            apellido,
            cedula, 
            telefono, 
            id_cargo, 
            id_departamento
        });
    } catch(error){
        return res.status(500).json({mensaje: error.message});
    }
}
// Actualizar departamento
export const updatePersonal = async (req, res) => {
    try{
        const {nombre, apellido, cedula, direccion, telefono, id_cargo, id_departamento} = req.body;
        const [result] = await pool.query(
            "UPDATE personal SET ? WHERE id_personal = ?",
            [
                req.body,
                req.params.id
            ]);
        res.json(result)
    } catch(error){
        return res.status(500).json({mensaje: error.message});
    }
}
// eliminar departamentos
export const deletePersonal = async (req, res) => {
    try{
        const [result] = await pool.query(
            "DELETE FROM personal WHERE id_personal = ?",
            [req.params.id]
        );
        if (result.affectedRows === 0){
            return res.status(404).json({mensaje: "La persona no existe"});
        }
        return res.sendStatus(204);    
    } catch(error){
        return res.status(500).json({mensaje: error.message});
    }
}