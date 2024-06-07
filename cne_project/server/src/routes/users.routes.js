import { Router } from "express";
import { CreateLogin, 
    AuthenticLogin, 
    ShowOneUser, 
    ShowUser, 
    UpdateUser, 
    DeleteUser, 
    PassRecovery,
    UserValidator } from "../controllers/user.controller.js";
import { verifyToken } from "../modules/user_module.js";
import { DefaultUser } from '../modules/default.use.js'

const router = Router();

// rutas de usuarios
router.get('/signup', ShowUser);
router.get('/signup/:id', ShowOneUser);
router.post('/signup', CreateLogin);
router.put('/signup/:id', UpdateUser);
router.delete('/signup/:id', verifyToken, DeleteUser)

// rutas de login (logearse y recuperar password)
router.post('/login', AuthenticLogin);
router.post('/loginRecor', UserValidator);
router.put('/loginRecor/:id', PassRecovery);

// usuario predeterminado
router.get('/default', (req, res) => {
    res.json(DefaultUser);
})
export default router;