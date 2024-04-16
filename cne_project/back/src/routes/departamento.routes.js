import { Router } from "express";
import {
    obtenerDepa,
    obtenerDeparts,
    crearDepart,
    updateDepart,
    deleteDepart
} from "../controllers/departamento.controllers.js";

const router = Router();

//consultas sql del crud
//rutas de tareas
router.get('/task', obtenerDeparts);
router.get('/task/:id', obtenerDepa);
router.post('/task', crearDepart);
router.put('/task/:id', updateDepart);
router.delete('/task/:id', deleteDepart);


export default router;