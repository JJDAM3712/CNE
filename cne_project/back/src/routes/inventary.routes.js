import { Router } from "express";
import {
    showInventarys,
    showInventary,
    createInventary,
    updateInventary,
    deleteInventary
} from '../controllers/inventary.controllers.js';

const router = Router();

// consultas sql, rutas
router.get('/inventary', showInventarys);
router.get('/inventary/:id', showInventary);
router.post('/inventary', createInventary);
router.put('/inventary/:id', updateInventary);
router.delete('/inventary/:id', deleteInventary);


export default router;