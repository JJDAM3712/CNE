import "../src/output.css";
import "../src/css/sidebar.css";
import { Light, Dark } from "./css/Themes";
import { MyRoutes } from "./routers/routes";
import { Sidebar } from "./components/sidebar";
import styled from "styled-components";
import React from "react";
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
          <Container>
            <main className={sidebarOpen ? "sidebarState active" : "sidebarState"}>
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

export default App;
