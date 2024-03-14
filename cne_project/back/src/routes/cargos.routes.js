import { Router } from "express";
import {
    showCargos,
    showCarg,
    insertCargos,
    updateCago,
    deleteCargo
} from '../controllers/cargo.controllers.js';

const router = Router();

// consultas sql, rutas
router.get('/cargos', showCargos);
router.get('/cargos/:id', showCarg);
router.post('/cargos', insertCargos);
router.put('/cargos/:id', updateCago);
router.delete('/cargos/:id', deleteCargo);


export default router;