import { Routes, Route } from "react-router-dom";
import  {Home} from "../pages/Home";
import { Personal } from "../pages/Personal";
import { Asistencias } from "../pages/Asistencias";
import { Departamentos } from "../pages/Departamentos";
import { Inventario } from "../pages/Inventario";
import { Usuario } from "../pages/Usuario";
import { Cargos } from "../pages/Cargos";
import { Visitas } from "../pages/Visitas";

export function Myroutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/personal" element={<Personal />} />
        </Routes>
    );
}