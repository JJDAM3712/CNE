// importando modulos
import express from "express";
import morgan from "morgan";
import cors from 'cors';
import { Server } from "socket.io";
import { createServer } from "http";

// importando rutas
import indexRoutes from './routes/index.routes.js';
import {
    departamento,
    cargos,
    personal,
    categoria,
    inventary,
    login,
    entrada,
    visita,
    respaldo
} from './routes/all.routes.js'

// Inicializaciones
const app = express();
const httpServer = createServer(app);

// middlewares
export const io = new Server(httpServer, {
    cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true
    }
});
io.on('connection', (socket) => {
    console.log(`Cliente conectado a ${socket.id}`);

    socket.on('ActualizatTable', (data) => {
        io.emit('TablaActualizada', data)
    });

    socket.on('disconnect', () => {
        console.log(`Cliente conectado a ${socket.id}`);
    })
});
app.use(cors({
    origin: 'http://localhost:5173', // Ajusta esto para permitir solicitudes desde tu cliente React
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true // Si necesitas enviar cookies o headers de autenticación
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
app.use(login);
app.use(entrada);
app.use(visita);
app.use(respaldo);

// configuraciones 
app.use(morgan('dev'));
app.set('port', process.env.PORT || 4000);

export {app, httpServer}