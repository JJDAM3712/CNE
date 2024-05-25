import { pool } from '../db.js';
import { io } from '../app.js';

// mostrar todas las asistencias en el dia
export const ShowAsistencce = async (req, res) => {
    try {
        const sql = `SELECT *
                FROM asistencia JOIN personal ON
                personal.id_personal = asistencia.id_personal`
        const [result] = await pool.query(sql)
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
        console.error(error)
        return res.status(500).json({mensaje: error.message})
    } 
}

// Registrar entrada asistencia
export const RegisEntrada = async (req, res) => {
    try {
        // recibe la cedula del cliente
        const cedula = req.body.cedula;
        // fecha de la entrada
        const fechaHora = new Date();
        const fecha = fechaHora.toISOString().split('T')[0];
        // opcitiene la hora actual
        const entrada = fechaHora.toTimeString().split(' ')[0];
        // consultas sql que valida la entrada y registrar entrada
        const sql_0 = `SELECT * FROM personal WHERE cedula = ?`;
        const sql_1 = `SELECT * FROM asistencia WHERE id_personal = ? AND fecha = ?`;
        const sql_2 = `INSERT INTO asistencia (id_personal, fecha, entrada) 
                        VALUES (?, ?, ?)`;
        const sql_3 = `SELECT *
                        FROM asistencia JOIN personal ON
                        personal.id_personal = asistencia.id_personal`
        // valida que la cedula exista
        const [result_0] = await pool.query(sql_0, [cedula]);
        if (result_0.length === 0) {
            return res.status(405).json('La cédula ingresada no corresponde a ningún empleado');
        }
        // obtiene el id del personal
        const id_personal = result_0[0].id_personal
        // ejecuta el query
        const [result] = await pool.query(sql_1, [id_personal, fecha]);
        // valida si se registro una entrada "hoy"
        if (result.length > 0) {
            return res.status(406).json('Ya registraste tu entrada hoy');
        } else {
            try {
                // si no hay registros de entrada la registra
                const [result] = await pool.query(sql_2, [id_personal, fecha, entrada])
                // obtén los datos actualizados de la base de datos
                const [nuevasAsistencias] = await pool.query(sql_3);
                // emite el evento con los datos actualizados
                io.emit('ActualizatTable', nuevasAsistencias)
                res.status(200).json({mensaje: "entrada registrada!"})
            } catch (error) {
                return res.status(500).json({mensaje: error.message})
            }
        }
    } catch (error) {
        return res.status(500).json({mensaje: error.message});
    }
}

// Registrar salida asistencia
export const RegistrarSalida = async (req, res) => {
    try {
        // recibe cedula del cliente
        const cedula = req.body.cedula;
        // fecha de salida
        const fechaHora = new Date();
        const fecha = fechaHora.toISOString().split('T')[0];
        // obtiene la hora actual
        const salida = fechaHora.toTimeString().split(' ')[0];
        // consultas sql
        const sql_0 = `SELECT * FROM personal WHERE cedula = ?`;
        const sql_1 = `SELECT * FROM asistencia WHERE id_personal = ? AND fecha = ?`;
        const sql_2 = `UPDATE asistencia SET salida = ? WHERE id_personal = ? AND fecha = ?`;
        const sql_3 = `SELECT *
                        FROM asistencia JOIN personal ON
                        personal.id_personal = asistencia.id_personal`
        // valida que la cedula exista
        const [result_0] = await pool.query(sql_0, [cedula]);
        if (result_0.length === 0) {
            return res.status(405).json('La cédula ingresada no corresponde a ningún empleado');
        }
        // obtiene el id del personal
        const id_personal = result_0[0].id_personal
        // ejecuta query para validar la entrada "hoy"
        const [result] = await pool.query(sql_1, [id_personal, fecha]);
        // valida el resultado del query
        if (result.length === 0) {
            return res.status(402).json('No has registrado tu entrada hoy');
        } else if (result[0].salida) {
            // valida si ya se registró una salida "hoy"
            return res.status(403).json('Ya registraste tu salida hoy');
        } else {
            try {
                const [result] = await pool.query(sql_2, [salida, id_personal, fecha]);
                // obtén los datos actualizados de la base de datos
                const [nuevasAsistencias] = await pool.query(sql_3);
                // emite el evento con los datos actualizados
                io.emit('ActualizatTable', nuevasAsistencias)
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
export const DeleteAsistence = async (req, res) => {
    try {
        // consulta sql
        const sql = `DELETE FROM asistencia WHERE id_asistencia = ?`;
        const sql_3 = `SELECT *
                        FROM asistencia JOIN personal ON
                        personal.id_personal = asistencia.id_personal`
        const [result] = await pool.query(sql, [req.params.id])
        if (result.affectedRows === 0){
            return res.status(404).json({mensaje: "No existe el registro"})
        }
        const [nuevasAsistencias] = await pool.query(sql_3);
        // emite el evento con los datos actualizados
        io.emit('ActualizatTable', nuevasAsistencias)
        return res.status(202).json("Registro eliminado con exito!");
    } catch (error) {
        return res.status(500).json({mensaje: error.message})
    }
}
