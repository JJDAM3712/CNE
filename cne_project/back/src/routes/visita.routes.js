import { Router } from "express";
import { GetVisitas, RegisVisitaEnter, RegisVisitaExit, DeleteVisitas } from "../controllers/visitas.controller.js";

const router = Router();

// rutas de visita
router.get('/visita', GetVisitas);
router.post('/visita/entrada', RegisVisitaEnter);
router.put('/visita/salida', RegisVisitaExit);
router.delete('/visita/:id', DeleteVisitas);


export default router;