import styled from "styled-components";
import { Button } from "flowbite-react";
import { useContext } from "react";
import { ThemeContext } from "../App";
import { ModalRegis } from "../components/Modal";
import { TablaPersonal } from "../components/Tablas";
import { HiOutlineArrowRight } from "react-icons/hi";


export function Personal() {
  const { setTheme, theme } = useContext(ThemeContext);
  const CambiarTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <Container themeUse={theme}>
      <h1>Personal</h1>
      <div className="flex flex-wrap gap-2 mb-1">
        <ModalRegis />
        <Button color="success">
          Generar Reporte
          <HiOutlineArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
      <TablaPersonal />
    </Container>
  );
}
const Container = styled.div`
    margin: 1rem;
    .ContenedorTabla{
      overflow-x-auto;
      border-radius: 10px;
      background: ${(props) => props.theme.bg2};
      border: 1px solid  ${(props) => props.theme.gray600};
      padding: 0.3rem;
    }
`;
