import { Router } from "express";
import { 
    showCategoria,
    showCategorias,
    crearCategoria,
    updateCategoria,
    deleteCategoria 
} from '../controllers/categoria.controller.js';

const router = Router();

// consultas sql, rutas
router.get('/categoria', showCategorias);
router.get('/categoria/:id', showCategoria);
router.post('/categoria', crearCategoria);
router.put('/categoria/:id', updateCategoria);
router.delete('/categoria/:id', deleteCategoria);

export default router;