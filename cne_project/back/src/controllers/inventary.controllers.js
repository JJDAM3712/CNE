import { pool } from "../db.js";

// mostrar todo el inventario
export const showInventarys= async (req, res) => {
    try{
        const [result] = await pool.query(
            `SELECT * 
            FROM inventario 
            join categoria on categoria.id_categoria = inventario.id_categoria 
            join departamento on departamento.id_departamento = inventario.id_departamento`,
            [req.params.id]
        );
        res.json(result);
    } catch(error){
        return res.status(500).json({mensaje: error.message});
    }
}
// mostrar un producto
export const showInventary = async (req, res) => {
    try{
        const [result] = await pool.query(
            `SELECT * 
            FROM inventario 
            join categoria on categoria.id_categoria = inventario.id_categoria 
            join departamento on departamento.id_departamento = inventario.id_departamento
            where id_inventario = ?`,
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
// Crear inventario
export const createInventary = async (req, res) => {
    try{
        const {nombre, marca, codigo, modelo, estatus, cantidad, id_departamento, id_categoria} = req.body;
        const [result] = await pool.query(
            `INSERT INTO inventario
            (nombre, marca, codigo, modelo, estatus, cantidad, id_departamento, id_categoria) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            [nombre, marca, codigo, modelo, estatus, cantidad, id_departamento, id_categoria]
        );
        console.log(result);
        res.json({
            id_inventario: result.insertId,
            nombre, 
            marca, 
            codigo,
            modelo, 
            estatus,
            cantidad,
            id_departamento, 
            id_categoria
        });
    } catch(error){
        return res.status(500).json({mensaje: error.message});
    }
}
// Actualizar inventario
export const updateInventary = async (req, res) => {
    try{
        const {nombre, marca, codigo, modelo, estatus, cantidad, id_categoria, id_departamento} = req.body;
        const [result] = await pool.query(
            "UPDATE inventario SET ? WHERE id_inventario = ?",
            [
                req.body,
                req.params.id
            ]);
        res.json(result)
    } catch(error){
        return res.status(500).json({mensaje: error.message});
    }
}
// eliminar inventario
export const deleteInventary = async (req, res) => {
    try{
        const [result] = await pool.query(
            "DELETE FROM inventario WHERE id_inventario = ?",
            [req.params.id]
        );
        if (result.affectedRows === 0){
            return res.status(404).json({mensaje: "El producto no existe"});
        }
        return res.sendStatus(204);    
    } catch(error){
        return res.status(500).json({mensaje: error.message});
    }
}