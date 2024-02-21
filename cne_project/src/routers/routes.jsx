import { Routes, Route } from "react-router-dom";
import {Home} from "../pages/Home";
import {Personal} from "../pages/Personal";
import {Asistencias} from "../pages/Asistencias";
import {Departamentos} from "../pages/Departamentos";
import Inventario from "../pages/Inventario";
import {Usuario} from "../pages/Usuario";
import {Cargos} from "../pages/Cargos";
import {Visitas} from "../pages/Visitas";

export function MyRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/personal" element={<Personal />} />
            <Route path="/asistencias" element={<Asistencias />} />
            <Route path="/visitas" element={<Visitas />} />
            <Route path="/inventario" element={<Inventario />} />
            <Route path="/departamentos" element={<Departamentos />} />
            <Route path="/cargos" element={<Cargos />} />
            <Route path="/usuario" element={<Usuario />} />
            <Route path="*" element={<Home />} />
        </Routes>
    );
}
