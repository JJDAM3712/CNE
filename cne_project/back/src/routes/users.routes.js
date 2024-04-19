import { Router } from "express";
import { CreateLogin, 
    AuthenticLogin, 
    ShowOneUser, 
    ShowUser, 
    UpdateUser, 
    DeleteUser, 
    PassRecovery,
    UserValidator } from "../controllers/user.controller.js";

const router = Router();

// rutas de usuarios
router.get('/signup', ShowUser);
router.get('/signup/:id', ShowOneUser);
router.post('/signup', CreateLogin);
router.put('/signup/:id', UpdateUser);
router.delete('/signup/:id', DeleteUser)

// rutas de login (logearse y recuperar password)
router.post('/login', AuthenticLogin);
router.post('/loginRecor', UserValidator);
router.put('/loginRecor/:id', PassRecovery);

export default router;