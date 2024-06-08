import { pool } from '../db.js';
import bcrypt from 'bcrypt';
import { io } from '../app.js';
import { generateToken } from '../modules/user_module.js';
import { BuscarUser } from '../config/consultas.config.js';
import { DefaultUser } from '../modules/default.use.js';

// mostrar ususarios 
export const ShowUser = async (req, res) => {
    try {
        const sql = 'SELECT * FROM user ORDER BY usuario ASC'
        const [result] = await pool.query(sql);
        io.emit('ActualizatTable', result);
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
        res.json(result)
    } catch (error) {
        return res.status(500).json({mensaje: error.message})
    }
} 
// registrar usuario  
export const CreateLogin = async (req, res) => {
    try {
        // recibe datos del cliente
        const {usuario, pass, quest, resp} = req.body;
        try {
            // valida que exista o no un usuario ya registrado
            const [result] = await BuscarUser(usuario);
            // lanza error si existe un usuario
            throw new Error("Ya existe un usuario con ese nombre");
        } catch (error) {
            // valida si existe un usuario con el mismo nombre
            if (error.message === "usuario incorrecto") {
                // hashea la contraseña recibida
                const password = bcrypt.hashSync(pass, 8);
                // consulta sql
                const sql = 'INSERT INTO user (usuario, password, quest, resp) VALUES (?, ?, ?, ?)';
                // ejecuta la consulta sql
                const [ result ] = await pool.query(sql, [usuario, password, quest, resp]);
                // Devuelve éxito
                const sql_2 = `SELECT * FROM user ORDER BY usuario ASC`;
                const [nuevasAsistencias] = await pool.query(sql_2);
                // emite el evento con los datos actualizados
                io.emit('ActualizatTable', nuevasAsistencias);
                return res.status(200).json({ mensaje: "Usuario creado exitosamente" });
            } else {
                // Si el error es otro, se devuelve el error
                throw error;
            }
        }
    } catch (error) {
        return res.status(500).json({mensaje: error.message});
    }
}
// actualizar datos del usuario
export const UpdateUser = async (req, res) => {
    try {
        // recibir los datos del cliente
        const {usuario, pass, quest, resp} = req.body;
        // valida que no haya un usuario repetido
        const sql_check = 'SELECT * FROM user WHERE usuario = ? AND id != ?';
        const [users] = await pool.query(sql_check, [usuario, req.params.id]);
        // si el usuario existe con un nombre de usuario diferente, devuelve un error
        if (users.length > 0) {
            return res.status(400).json({ mensaje: "Usuario ya existente" });
        }
        // hashear la contraseña nueva
        const password = await bcrypt.hash(pass, 8);
        // consulta sql
        const sql = 'UPDATE user SET usuario = ?, password = ?, quest = ?, resp = ? WHERE id = ?';
        // ejecutar consulta sql
        const [result] = await pool.query(sql, [usuario, password, quest, resp, req.params.id]);
        const sql_2 = `SELECT * FROM user ORDER BY usuario ASC`;
        const [nuevasAsistencias] = await pool.query(sql_2);
        // emite el evento con los datos actualizados
        io.emit('ActualizatTable', nuevasAsistencias);
        // devuelve exito
        return res.status(200).json({ mensaje: "Usuario modificado exitosamente" });
    } catch (error) {
        return res.status(500).json({mensaje: error.message})
    }
}
// eliminar usuario
export const DeleteUser = async (req, res) => {
    try{
        // recibe el id a eliminar
        const { id } = req.params;
        // verifica si el usuario esta logeado o no
        if (req.user.id == id) {
            return res.status(400).json({ mensaje: "No puedes eliminar tu propia cuenta mientras estás logueado" });
        }
        console.log(typeof req.params)
        console.log(typeof req.user.id)
        // consulta sql
        const sql = 'DELETE FROM user WHERE id = ?'
        // ejecuta consulta
        const [result] = await pool.query(sql, [id]);
        // valida que exista un usuario que eliminar
        if (result.affectedRows === 0){
            return res.status(404).json({mensaje: "El usuario no existe"});
        }
        const sql_2 = `SELECT * FROM user ORDER BY usuario ASC`;
        const [nuevasAsistencias] = await pool.query(sql_2);
        // emite el evento con los datos actualizados
        io.emit('ActualizatTable', nuevasAsistencias);
        return res.status(200).json({ mensaje: "Usuario eliminado" });
    } catch(error){
        console.error(error);
        return res.status(500).json({mensaje: error.message});
    }
}
//--------------------------------------------------
// autenticar usuario / login
export const AuthenticLogin = async (req, res) => {
    try {
        // recibe datos del servidor
        const {usuario, password} = req.body;
        // Verifica las credenciales contra el usuario predeterminado
        if (usuario === DefaultUser.usuario && password === DefaultUser.password) {
            const token = generateToken(DefaultUser.id);
            res.cookie('access_token', token, {
                httpOnly: true,
            });
            return res.status(200).json({ mensaje: 'Inicio de sesión exitoso para el usuario predeterminado.' });
        }

        let result;
        try {
            result = await BuscarUser(usuario);
        } catch (error) {
            if (error.message === "usuario incorrecto") {
                return res.status(401).json({mensaje: "usuario o contraseña incorrecto"});
            } else {
                throw error;
            }
        }
        // compara la contraseña con el hash almacenado en la base de datos
        const match = await bcrypt.compare(password, result[0].password);
        if (!match) {
            return res.status(401).json({mensaje: "usuario o contraseña incorrecto"})
        }
        // Después de verificar la contraseña
        const userId = result[0].id; // Obtén el ID del usuario desde result
        const token = generateToken(userId);
        // Configura el token en una cookie
        res.cookie('access_token', token, {
            httpOnly: true,
        });
        // muestra el resultado
        return res.status(200).json({ mensaje: "Inicio de sesión exitoso" });
    } catch (error) {
        return res.status(500).json({mensaje: error.message});
    }
}
// autenticar login para cambiar password
export const UserValidator = async (req, res) => {
    try {
        // recibir datos del cliente
        const {usuario} = req.body;
        const [result] = await BuscarUser(usuario);
        return res.status(200).json({result})
    } catch (error) {
        return res.status(500).json(error.message === "usuario incorrecto" ? 400 : 500).json({mensaje: error.message});
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