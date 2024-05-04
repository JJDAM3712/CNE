import { Router } from 'express';
import { 
    DeleteAsistence, 
    RegisEntrada, 
    RegistrarSalida, 
    ShowAsistencce } from '../controllers/asistencias.controller.js';

const router = Router();

// rutas de las asistencias
router.get('/asistencia', ShowAsistencce)
router.post('/asistencia/entrada', RegisEntrada);
router.post('/asistencia/salida', RegistrarSalida);
router.delete('/asistencia/:id', DeleteAsistence)



export default router;