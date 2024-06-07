import { Router } from "express";
import { verifyToken } from "../modules/user_module.js";

const router = Router();


router.get('/token_validator', verifyToken);

export default router;