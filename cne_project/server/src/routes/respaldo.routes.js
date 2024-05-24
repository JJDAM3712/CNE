import { Router } from 'express';
import { SavedResp } from '../controllers/respaldo.controller.js';

const router = Router();

router.get('/back', SavedResp);


export default router;