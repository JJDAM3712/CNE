import styled from "styled-components";
import { Datepicker, Button } from "flowbite-react";
import { useContext } from "react";
import { RegisAsist } from "./Modal";
import { ThemeContext } from "../App";
import { HiOutlineArrowRight } from "react-icons/hi";
export function ReportAsis() {
  const { setTheme, theme } = useContext(ThemeContext);
  const CambiarTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };
  return (
    <Container>
      <div className="ContRepAsis">
        <form>
          <div className="flex gap-1 justify-between">
            <Datepicker label="Fecha Min" className="w-2\/4" />
            <Datepicker label="Fecha Max" className="w-2\/4" />
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
const Container = styled.div`
  .ContRepAsis {
    width: 70%;
    border-radius: 10px;
    background: ${(props) => props.theme.bg2};
    border-top: 3px solid ${(props) => props.theme.red500};
    padding: 0.3rem;
  }
`;
