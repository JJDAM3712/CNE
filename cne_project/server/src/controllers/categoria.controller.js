import { pool } from '../db.js';
import { io } from '../app.js';
import { obtenerCategory } from '../config/consultas.config.js';


// mostrar todas las categorias
export const showCategorias = async (req, res) => {
    try{
        const [result] = await pool.query(
            "SELECT * FROM categoria ORDER BY categoria ASC");
        //io.emit('ActualizatTable', result);
        res.json(result);
    } catch(error){
        return res.status(500).json({mensaje: error.message});
    }
}
// mostrar una categoria
export const showCategoria = async (req, res) => {
    try{
        const [result] = await pool.query(
            "SELECT * FROM categoria WHERE id_categoria = ?",
            [req.params.id]
        );
        console.log(result);
        if (result === 0){
            return res.status(404).json({mensaje: `La categoria  no existe`})
        }
        res.json(result);
    } catch(error){
        return res.status(500).json({mensaje: error.message});
    }
}
// Crear categorias
export const crearCategoria = async (req, res) => {
    try{
        const {categoria} = req.body;
        const [result] = await pool.query(
            "INSERT INTO categoria(categoria) VALUES (?)",
            [categoria]
        );
        obtenerCategory();
        res.status(200).json({mensaje: "Categoria registrado"});
    } catch(error){
        return res.status(500).json({mensaje: error.message});
    }
}
// Actualizar categorias
export const updateCategoria = async (req, res) => {
    try{
        const {categoria} = req.body;
        const [result] = await pool.query(
            "UPDATE categoria SET ? WHERE id_categoria = ?",
            [
                req.body,
                req.params.id
            ]);
        obtenerCategory();
        res.status(200).json({mensaje: "Categoria registrado"});
    } catch(error){
        return res.status(500).json({mensaje: error.message});
    }
}
// eliminar categoria
export const deleteCategoria = async (req, res) => {
    try{
        const [result] = await pool.query(
            "DELETE FROM categoria WHERE id_categoria = ?",
            [req.params.id]
        );
        if (result.affectedRows === 0){
            return res.status(404).json({mensaje: "la categoria no existe"});
        }
        obtenerCategory();
        return res.sendStatus(204);    
    } catch(error){
        return res.status(500).json({mensaje: error.message});
    }
}