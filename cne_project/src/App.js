import './App.css';
import { Routes, Route } from "react-router-dom";
import  Layout from "./pages/Layout";
import  About from "./pages/About";
import  Home from "./pages/Home";

function App() {
  return (
    <div>
      <h1>Rutas</h1>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='about' element={<About />} />
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Home />} />

        </Route>
      </Routes>
    </div>
    
  );
}

export default App;
