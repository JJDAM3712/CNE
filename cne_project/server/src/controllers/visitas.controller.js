import { pool } from "../db.js";
import { io } from "../app.js"
import { obtenerVisitas } from "../config/consultas.config.js";

// ver todas las visitas
export const GetVisitas = async (req, res) => {
    try {
        // consulta sql
        const sql = `SELECT * FROM visita 
                    JOIN departamento ON
                    departamento.id_departamento = visita.id_departamento
                    ORDER BY fecha DESC, hora_entrada DESC`;
        // ejecuta la consulta sql
        const [result] = await pool.query(sql, [req.params.id]);
        // formatea la fecha para mostrarla
        const formateDate = result.map(result => {
            // convierte la fecha a formato ISO
            const fechaISO = new Date(result.fecha).toISOString();
            // selecciona solo la fecha
            const fecha = fechaISO.split('T')[0];
            return {
                ...result,
                fecha
            }
        })
        io.emit('ActualizatTable', formateDate);
        res.json(formateDate)
    } catch (error) {
        return res.status(500).json({mensaje: error.message});
    }
}
// Registrar una entrada de visita
export const RegisVisitaEnter = async (req, res) => {
    try {
        // recibe los datos del cliente
        const {nombre, cedula, id_departamento, motivo} = req.body;
        // fecha de la entrada
        const fechaHora = new Date();
        const fecha = fechaHora.toISOString().split('T')[0];
        // opcitiene la hora actual
        const hora_entrada = fechaHora.toTimeString().split(' ')[0];
        // consultas sql que valida la entrada y registrar entrada
        const sql_1 = `SELECT * FROM visita WHERE cedula = ? AND fecha = ?`;
        const sql_2 = `INSERT INTO visita (nombre, cedula, id_departamento,
                        motivo, fecha, hora_entrada) VALUES (?, ?, ?, ?, ?, ?)`;
        // valida que se haya registrado una visita "hoy"
        const [result] = await pool.query(sql_1, [cedula, fecha]);
        // validación
        if (result.length > 0) {
            return res.status(406).json('Ya registraste una entrada hoy');
        } else {
            try {
                // si no hay registros de entrada la registra
                const [result] = await pool.query(sql_2, 
                    [
                        nombre, 
                        cedula, 
                        id_departamento,
                        motivo, 
                        fecha, 
                        hora_entrada
                    ]);
                obtenerVisitas();
                res.status(200).json({mensaje: "visita registrada!"})
            } catch (error) {
                return res.status(500).json({mensaje: error.message})
            }
        }
    } catch (error) {
        return res.status(500).json({mensaje: error.message});
    }
}
// Registrar una salida de visita
export const RegisVisitaExit = async (req, res) => {
    try {
        // recibe cedula del cliente
        const cedula = req.body.cedula;
        // fecha de salida
        const fechaHora = new Date();
        const fecha = fechaHora.toISOString().split('T')[0];
        // obtiene la hora actual
        const hora_salida = fechaHora.toTimeString().split(' ')[0];
        // consultas sql
        const sql_0 = `SELECT * FROM visita WHERE cedula = ?`;
        const sql_1 = `SELECT * FROM visita WHERE cedula = ? AND fecha = ?`;
        const sql_2 = `UPDATE visita SET hora_salida = ? WHERE cedula = ? AND fecha = ?`;
        // valida que la cedula exista
        const [result_0] = await pool.query(sql_0, [cedula]);
        if (result_0.length === 0) {
            return res.status(405).json('La cédula ingresada no se ha registrado hoy');
        }
        // ejecuta query para validar la entrada "hoy"
        const [result] = await pool.query(sql_1, [cedula, fecha]);
        // valida el resultado del query
        if (result[0].hora_salida) {
            // valida si ya se registró una salida "hoy"
            return res.status(403).json('Ya registraste tu salida hoy');
        } else {
            try {
                const [result] = await pool.query(sql_2, [hora_salida, cedula, fecha]);
                obtenerVisitas();
                res.status(200).json('Salida registrada!');
            } catch (error) {
                return res.status(500).json({mensaje: error.message})
            }
        }
    } catch (error) {
        return res.status(500).json({mensaje: error.message})
    }
}
// borrar asistencias
export const DeleteVisitas = async (req, res) => {
    try {
        // consulta sql
        const sql = `DELETE FROM visita WHERE id_visita = ?`;
        const [result] = await pool.query(sql, [req.params.id])
        if (result.affectedRows === 0){
            return res.status(404).json({mensaje: "No existe el registro"})
        }
        obtenerVisitas();
        return res.status(202).json("Registro eliminado con exito!");
    } catch (error) {
        return res.status(500).json({mensaje: error.message})
    }
}