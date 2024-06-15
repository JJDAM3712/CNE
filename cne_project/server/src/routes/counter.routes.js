import { Router } from 'express';
import { 
    contAsistencias, 
    contCargo, 
    contCategoria, 
    contDepart, 
    contInventario, 
    contPersonal, 
    contVisitas } from '../controllers/conter.controller.js';

const router = Router();

// rutas de conteo
router.get('/contPerso', contPersonal);
router.get('/contAsistencia', contAsistencias);
router.get('/contVisita', contVisitas);
router.get('/contInventary', contInventario);
router.get('/contDepart', contDepart);
router.get('/contCargo', contCargo);
router.get('/contCategorias', contCategoria);

export default router;