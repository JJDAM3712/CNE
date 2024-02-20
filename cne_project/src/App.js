import '../src/output.css';
import '../src/css/sidebar.css'
import { Light, Dark } from "./css/Themes";
import { MyRoutes } from "./routers/routes"
import { Sidebar } from "./components/sidebar";
import styled from 'styled-components';
import React from 'react';
import { useState } from "react";
import { ThemeProvider } from "styled-components";
export const ThemeContext = React.createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? Light : Dark;
  return (
    <div className='App'>
      <ThemeContext.Provider value={{ setTheme, theme }}>
        <ThemeProvider theme={themeStyle}>
          <Container>
            <Sidebar />
            <MyRoutes />
          </Container>
        </ThemeProvider>
      </ThemeContext.Provider>
    </div>
  );
}
const Container = styled.div`
background-color:${({ theme }) => theme.body}
`;

export default App;
