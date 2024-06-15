import { pool } from "../db.js";
import { io } from "../app.js"
import { obtenerPersonal } from "../config/consultas.config.js";

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
        io.emit('ActualizatTable', result);
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
        // recibe los datos del servidor
        const {nombre, apellido, cedula, telefono, id_cargo, id_departamento} = req.body;
        // cconsulta sql que valida cedulas repetidas
        const sql = 'SELECT * FROM personal WHERE cedula = ?';
        const [result] = await pool.query(sql, [cedula])

        // validacion de cedula repetida
        if(result.length === 0){
            try {
                // registra personal en caso de no haber cedula igual
                const [result] = await pool.query(
                    `INSERT INTO personal
                    (nombre, apellido, cedula, telefono, id_cargo, id_departamento) 
                    VALUES (?, ?, ?, ?, ?, ?)`,
                    [nombre, apellido, cedula, telefono, id_cargo, id_departamento]
                );
                obtenerPersonal();
                // Devuelve éxito
                return res.status(200).json({ mensaje: "Personal creado exitosamente" });
            } catch (error) {
                return res.status(500).json({mensaje: error.message});
            }
        }
        return res.status(300).json({mensaje: "Ya existe un usuario con esta cedula nombre"})
        
    } catch(error){
        return res.status(500).json({mensaje: error.message});
    }
}
// Actualizar departamento
export const updatePersonal = async (req, res) => {
    try{
        const {nombre, apellido, cedula, telefono, id_cargo, id_departamento} = req.body;

        // consulta sql
        const sql = `UPDATE personal SET nombre = ?, apellido = ?, cedula = ?, 
                        telefono = ?, id_cargo = ?, id_departamento = ? 
                        WHERE id_personal = ?`;
        // ejecutar consulta sql
        const [result] = await pool.query(sql, [
            nombre, apellido, cedula, telefono, id_cargo,id_departamento, req.params.id
        ]);
        obtenerPersonal();
        // devuelve exito
        return res.status(200).json({ mensaje: "Personal modificado exitosamente" });
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
        obtenerPersonal();
        return res.status(204);    
    } catch(error){
        return res.status(500).json({mensaje: error.message});
    }
}