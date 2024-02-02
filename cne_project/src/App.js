import './App.css';
import './input.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Asistencias from "./pages/Asistencias";
import Visitas from "./pages/Visitas";
import Departamentos from "./pages/Departamentos";
import Usuario from "./pages/Usuario";
import Personal from "./pages/Personal";
import Cargos from "./pages/Cargos";
import Home from "./pages/Home";

function App() {
  return (
    <aside>
      <h1>Menu</h1>
        <Routes>
          <Route path='/' element={<Sidebar />}>
            <Route path="personal" element={<Personal />} />
            <Route path="asistencias" element={<Asistencias />} />
            <Route path="visitas" element={<Visitas />} />
            <Route path="departamentos" element={<Departamentos />} />
            <Route path="cargos" element={<Cargos />} />
            <Route path="usuario" element={<Usuario />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
    </aside>

  );
}

export default App;
