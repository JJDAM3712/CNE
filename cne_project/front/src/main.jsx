import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* <Route path="/login" element={<Login />} />
        <Route path="/*" element={<App />} /> */}

        {/* ESTO ES PARA COLOCAR EL LOGIN COMO INDEX. OJO SE DEBEN ACTUALIZAR TODAS LAS RUTAS DE APP */}
        <Route path="/" element={<Login />} />
        <Route path="/app/*" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
