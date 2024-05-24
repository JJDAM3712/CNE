import {Router} from 'express';
import {pool} from '../db.js';

const router = Router();

router.get('/ping', async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM cargos');
    console.log(rows[0]);
    res.json(rows[0]);
});

export default router;