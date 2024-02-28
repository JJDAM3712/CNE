import "../src/output.css";
import "../src/css/sidebar.css";
import { Light, Dark } from "./css/Themes";
import { MyRoutes } from "./routers/routes";
import { Sidebar } from "./components/sidebar";
import { Migas } from "./components/Breadcrumb"; // Asegúrate de que la ruta de importación sea correcta
import styled from "styled-components";
import React from "react";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { useLocation } from "react-router-dom"; // Importa useLocation
export const ThemeContext = React.createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? Light : Dark;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation(); // Usa useLocation para obtener la ruta actual

  return (
    <>
      <ThemeContext.Provider value={{ setTheme, theme }}>
        <ThemeProvider theme={themeStyle}>
          <Container>
            <header className="Header">
            <Migas activePath={location.pathname} />{" "}
            {/* Pasa la ruta activa como prop a Migas */}
            </header>
            <main
              className={sidebarOpen ? "sidebarState active" : "sidebarState"}
            >
              <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
              <MyRoutes />
            </main>
          </Container>
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
    HEIGHT: 100vh;
    grid-template-columns: 90px auto;
    background: ${({ theme }) => theme.bgtotal};
    transition:all 0.3s ;
    &.active {
      grid-template-columns: 300px auto;
    }
    color:${({ theme }) => theme.text};
`;

export default App;
