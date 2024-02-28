import styled from "styled-components";
import { Datepicker, Button } from "flowbite-react";
import { useContext } from "react";
import { RegisAsist, RegisVisita } from "./Modal";
import { ThemeContext } from "../App";
import { HiOutlineArrowRight } from "react-icons/hi";


export function ReportAsis() {
  const { setTheme, theme } = useContext(ThemeContext);
  const CambiarTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };
  return (
    <Container>
      <div className="ContRep">
        <form>
          <div className="flex gap-1 justify-between">
            <Datepicker language="es-ES" label="Fecha Min" className="w-2\/4" />
            <Datepicker language="es-ES" label="Fecha Max" className="w-2\/4" />
            <Button color="success" type="submit">
              Generar Reporte
              <HiOutlineArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <RegisAsist />
          </div>
        </form>
      </div>
    </Container>
  );
}

export function ReportVisita() {
  const { setTheme, theme } = useContext(ThemeContext);
  const CambiarTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };
  return (
    <Container>
      <div className="ContRep">
        <form>
          <div className="flex gap-1 justify-between">
            <Datepicker language="es-ES" label="Fecha Min" className="w-2\/4" />
            <Datepicker language="es-ES" label="Fecha Max" className="w-2\/4" />
            <Button color="success" type="submit">
              Generar Reporte
              <HiOutlineArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <RegisVisita />
          </div>
        </form>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .ContRep {
    width: 70%;
    border-radius: 10px;
    background: ${(props) => props.theme.bg2};
    border-top: 3px solid ${(props) => props.theme.red500};
    padding: 0.3rem;
  }
  @media (max-width: 1199px) {
    .ContRep {
      width: 100%;
    }
  }
`;
