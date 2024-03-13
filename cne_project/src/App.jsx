import "../src/output.css";
import { Light, Dark } from "./css/Themes"; //RUTA a los Temas de color
import { MyRoutes } from "./routers/routes"; //Componente de Rutas
import { Sidebar } from "./components/sidebar"; //Sidebar
import { Migas } from "./components/Breadcrumb"; // Asegúrate de que la ruta de importación sea correcta
import styled from "styled-components"; //Componente para Estilos directo al JSX
import React from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
export const ThemeContext = React.createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? Light : Dark;
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <>
      <ThemeContext.Provider value={{ setTheme, theme }}>
        <ThemeProvider theme={themeStyle}>
          <BrowserRouter>
            <Container>
              <header className="Header">
                <Migas activePath={location.pathname} />{" "}
                {/* Pasa la ruta activa como prop a Migas */}
              </header>
              {/* CONTENEDOR PRINCIPAL DEL BODY */}
              <main
                className={sidebarOpen ? "sidebarState active" : "sidebarState"}
              >
                {/* SIDEBAR */}
                <Sidebar
                  sidebarOpen={sidebarOpen}
                  setSidebarOpen={setSidebarOpen}
                />
                {/* SIDEBAR */}
                <MyRoutes />
              </main>
            </Container>
          </BrowserRouter>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}
const Container = styled.div`

.Header {
  background: ${({ theme }) => theme.bgHeader};
  height: 3rem;
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  justify-content: flex-start;
  color:${({ theme }) => theme.text};
}
.sidebarState {
  display: grid;
  grid-template-columns: 90px auto;
  background: ${({ theme }) => theme.bgtotal};
  transition:all 0.3s ;
  &.active {
    grid-template-columns: 300px auto;
  }
  color:${({ theme }) => theme.text};
`;
// #endregion
export default App;
