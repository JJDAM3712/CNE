// importar todas las rutas
import deparRoutes from './departamento.routes.js';
import cargosRoutes from './cargos.routes.js';
import personalRoutes from './personal.routes.js';
import categoriaRoutes from './categoria.routes.js';
import inventaryRoutes from './inventary.routes.js';
import loginRoutes from './users.routes.js';
import asistenciaRoutes from './asistencia.routes.js';
import visitasRouter from './visita.routes.js';
import respaldoRouter from './respaldo.routes.js';
import tokenValidator from './token.routes.js';
import conteoRoutes from './counter.routes.js';

// exportar todas las rutas
export const departamento = deparRoutes;
export const cargos = cargosRoutes;
export const personal = personalRoutes;
export const categoria = categoriaRoutes;
export const inventary = inventaryRoutes;
export const login = loginRoutes;
export const entrada = asistenciaRoutes;
export const visita = visitasRouter;
export const respaldo = respaldoRouter;
export const token = tokenValidator;
export const conter = conteoRoutes;