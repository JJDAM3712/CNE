import '../src/css/App.css';
import '../src/output.css';
import '../src/css/sidebar.css'
import { Routes, Route } from "react-router-dom";
import Asistencias from "./pages/Asistencias";
import Visitas from "./pages/Visitas";
import Departamentos from "./pages/Departamentos";
import Usuario from "./pages/Usuario";
import Personal from "./pages/Personal";
import Cargos from "./pages/Cargos";
import Home from "./pages/Home";
import Inventario from "./pages/Inventario";
import Side from "./components/Sidebar2";


function App() {
  return (
    <div className='App'>
      <div className='header'>
        <h1>este es el Header</h1>
      </div>
      <div className='sidebar'>
        <Side />
      </div>
      <div className='body'>
        <Routes>
          <Route path="personal" element={<Personal />} />
          <Route path="asistencias" element={<Asistencias />} />
          <Route path="visitas" element={<Visitas />} />
          <Route path="Inventario" element={<Inventario />} />
          <Route path="departamentos" element={<Departamentos />} />
          <Route path="cargos" element={<Cargos />} />
          <Route path="usuario" element={<Usuario />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
