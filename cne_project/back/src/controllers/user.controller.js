import { pool } from '../db.js';
import bcrypt from 'bcrypt';

// mostrar ususarios 
export const ShowUser = async (req, res) => {
    try {
        const sql = 'SELECT * FROM user ORDER BY usuario ASC'
        const [result] = await pool.query(sql)
        res.json(result)
    } catch (error) {
        res.status(500).json({mensaje: error.message})
    }
}
// mostrar un usuario
export const ShowOneUser = async (req, res) => {
    try {
        const sql = "SELECT * FROM user WHERE id = ?";
        const [result] = await pool.query(sql, [req.params.id])
        if(result.length === 0){
            res.status(403).json({mensaje: "No existe este usuario"})
        }
        res.json({result})
    } catch (error) {
        return res.status(500).json({mensaje: error.message})
    }
}
// registrar usuario
export const CreateLogin = async (req, res) => {
    try {
        // recibe datos del cliente
        const {usuario, pass, quest, resp} = req.body;
        // hashea la contraseña recibida
        const password = await bcrypt.hash(pass, 8);
        // consulta sql. Valida si existe un usuario (sencible a minusculas y mayusculas)
        const query_us = 'SELECT usuario FROM user WHERE BINARY usuario = ?'
        const [result] = await pool.query(query_us, [usuario]);
        // valida si existe un usuario con el mismo nombre
        if (result.length === 0){
            try {
                const sql = 'INSERT INTO user (usuario, password, quest, resp) VALUES (?, ?, ?, ?)';
                // ejecuta la consulta sql
                const [ result ] = await pool.query(sql, [usuario, email, password, quest, resp]);
                res.json({
                    id: result.insertId,
                    usuario,
                    password,
                    quest,
                    resp
                }); 
            } catch (error) {
                return res.status(500).json({mensaje: error.message});
            }
        }
        return res.status(300).json({mensaje: "Ya existe un usuario con ese nombre"})
    } catch (error) {
        return res.status(500).json({mensaje: error.message});
    }
}
// actualizar datos del usuario
export const UpdateUser = async (req, res) => {
    try {
        // recibir los datos del cliente
        const {usuario, pass, quest, resp} = req.body;
        // hashear la contraseña nueva
        const password = await bcrypt.hash(pass, 8);
        // consulta sql
        const sql = 'UPDATE user SET usuario = ?, password = ?, quest = ?, resp = ? WHERE id = ?';
        // ejecutar consulta sql
        const [result] = await pool.query(sql, [usuario, email, password, quest, resp, req.params.id]);
        res.json(result);
    } catch (error) {
        return res.status(500).json({mensaje: error.message})
    }
}
// eliminar usuario
export const DeleteUser = async (req, res) => {
    try{
        // consulta sql
        const sql = 'DELETE FROM user WHERE id = ?'
        // ejecuta consulta
        const [result] = await pool.query(sql, [req.params.id]);
        // valida que exista un usuario que eliminar
        if (result.affectedRows === 0){
            return res.status(404).json({mensaje: "El usuario no existe"});
        }
        res.json({mensaje: "usuario eliminado"})
        return res.sendStatus(204);
    } catch(error){
        return res.status(500).json({mensaje: error.message});
    }
}
//--------------------------------------------------
// autenticar usuario / login
export const AuthenticLogin = async (req, res) => {
    try {
        // recibe datos del servidor
        const {usuario, password} = req.body;
        // consulta sql
        const sql = 'SELECT * FROM user WHERE BINARY usuario = ?';
        // ejecuta la consulta
        const [result] = await pool.query(sql, [usuario]);
        // valida que exista un resultado
        if (result.length === 0 ){
            return res.status(300).json({mensaje: "usuario o contraseña incorrecto"})
        }
        // compara la contraseña con el hash almacenado en la base de datos
        const match = await bcrypt.compare(password, result[0].password);
        if (!match) {
            return res.status(300).json({mensaje: "usuario o contraseña incorrecto"})
        }
        // muestra el resultado
        res.json({mensaje: "usuario y password correctos!"})
    } catch (error) {
        return res.status(500).json({mensaje: error.message});
    }
}
// autenticar login para cambiar password
export const UserValidator = async (req, res) => {
    try {
        // recibir datos del cliente
        const {usuario} = req.body;
        const [result] = await pool.query('SELECT * FROM user WHERE BINARY usuario = ?', [usuario])
        if(result.length === 0) {
            return res.status(400).json({mensaje: "usuario incorrecto"})
        }
        return res.status(200).json({result})
    } catch (error) {
        return res.status(500).json({mensaje: error.message});
    }
}
// cambiar password
export const PassRecovery = async (req, res) => {
    try {
        const {pass, resp} = req.body;
        // consulta sql para validar respuesta de pregunta secreta
        const sql = 'SELECT * FROM user WHERE resp = ?';
        // ejecucion de consulta
        const [result] = await pool.query(sql, [resp]);
        // valida que la respuesta sea correcta
        if (result.length === 0){
            return res.status(400).json({mensaje: "La respuesta a la pregunta es incorrecta!"})
        }else{
            const password = await bcrypt.hash(pass, 8);
            // consulta sql
            const sql = 'UPDATE user SET password = ? WHERE id = ?';
            // ejecutar consulta sql
            const [result] = await pool.query(sql, [password, req.params.id]);
            res.json(result);
        }
    } catch (error) {
        return res.status(500).json({mensaje: error.message});
    }
}