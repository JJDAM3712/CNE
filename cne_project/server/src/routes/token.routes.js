import { Router } from "express";
import { verifyToken } from "../modules/user_module.js";

const router = Router();

router.get('/token_validator', verifyToken, (req, res) =>{
    res.status(202).json({mensaje: "Token correcto"}); 
});

export default router;