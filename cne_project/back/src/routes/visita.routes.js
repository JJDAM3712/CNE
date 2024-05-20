import { Router } from "express";
import { GetVisitas, RegisVisitaEnter } from "../controllers/visitas.controller.js";

const router = Router();

// rutas de visita
router.get('/visita', GetVisitas);
router.post('/visita/entrada', RegisVisitaEnter);



export default router;