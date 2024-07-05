// importando modulos
import express from "express";
import morgan from "morgan";
import cors from 'cors';
import { Server } from "socket.io";
import { createServer } from "http";
import cookieParser from 'cookie-parser';

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
    respaldo, 
    token,
    conter
} from './routes/all.routes.js'

// Inicializaciones
const app = express();
const httpServer = createServer(app);

// middlewares
export const io = new Server(httpServer, {
    cors: {
        origin: 'http://localhost:3000',
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
        console.log(`Cliente desconectado a ${socket.id}`);
    })
});
app.use(cors({
    origin: 'http://localhost:3000', //permitir solicitudes desde tel cliente
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true //enviar cookies o headers de autenticación
}));
app.use(cookieParser());

// procesar los datos del cliente
app.use(express.json());


// validacion de token
app.use(token);
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
app.use(conter);

// configuraciones 
app.use(morgan('dev'));
app.set('port', process.env.PORT || 4000);

export {app, httpServer}