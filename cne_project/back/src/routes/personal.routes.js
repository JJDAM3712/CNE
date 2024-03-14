import { Router } from "express";
import {
    showPersonals,
    showPersonal,
    createPersonal,
    updatePersonal,
    deletePersonal
} from "../controllers/personal.controllers.js"

const router = Router();

// consultas sql, rutas
router.get('/personal', showPersonals);
router.get('/personal/:id', showPersonal);
router.post('/personal', createPersonal);
router.put('/personal/:id', updatePersonal);
router.delete('/personal/:id', deletePersonal);

export default router;
