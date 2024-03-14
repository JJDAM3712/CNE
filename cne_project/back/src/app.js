// importando modulos
import express from "express";
import morgan from "morgan";
import cors from 'cors';

// importando rutas
import indexRoutes from './routes/index.routes.js';
import {
    departamento,
    cargos,
    personal,
    categoria,
    inventary
} from './routes/all.routes.js'

// Inicializaciones
const app = express();

// middlewares
// validar que solo se conecte al puerto 3000
app.use(cors({
    origin: 'http://localhost:3000'
}));

// procesar los datos del cliente
app.use(express.json());

// recibir querys
app.use(indexRoutes);
app.use(departamento);
app.use(cargos);
app.use(personal);
app.use(categoria);
app.use(inventary);

// configuraciones 
app.use(morgan('dev'));
app.set('port', process.env.PORT || 4000);

// Variables globales

// rutas

// archivos estaticos

export default app;