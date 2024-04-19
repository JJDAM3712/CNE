import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Personal } from "../pages/Personal";
import { Asistencias } from "../pages/Asistencias";
import { Departamentos } from "../pages/Departamentos";
import { Inventario } from "../pages/Inventario";
import { Usuario } from "../pages/Usuario";
import { Cargos } from "../pages/Cargos";
import { Visitas } from "../pages/Visitas";
import { Categoria } from "../pages/Categoria";

// eslint-disable-next-line react-refresh/only-export-components
export const routes = [
  { name: "Home", path: "/", component: Home },
  { name: "Personal", path: "/personal", component: Personal },
  { name: "Asistencias", path: "/asistencias", component: Asistencias },
  { name: "Visitas", path: "/visitas", component: Visitas },
  { name: "Inventario", path: "/inventario", component: Inventario },
  { name: "Departamentos", path: "/departamentos", component: Departamentos },
  { name: "Cargos", path: "/cargos", component: Cargos },
  { name: "Usuario", path: "/usuario", component: Usuario },
  { name: "Categoria", path: "/categoria", component: Categoria },
];

export function MyRoutes() {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={<route.component />} />
      ))}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
