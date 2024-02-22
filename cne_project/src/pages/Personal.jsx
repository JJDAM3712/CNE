import styled from "styled-components";
import { Table, Button } from "flowbite-react";
import { useContext } from "react";
import { ThemeContext } from "../App";
import { ModalRegis } from "../components/Modal";
import { HiOutlineArrowRight } from "react-icons/hi";
import { FaEraser, FaEdit } from "react-icons/fa";

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
      <div className="ContenedorTabla">
        <h1>Personal Registrado:</h1>
        <Table>
          <Table.Head>
            <Table.HeadCell>Nombre</Table.HeadCell>
            <Table.HeadCell>Apellido</Table.HeadCell>
            <Table.HeadCell>Cedula</Table.HeadCell>
            <Table.HeadCell>Teléfono</Table.HeadCell>
            <Table.HeadCell>Cargo</Table.HeadCell>
            <Table.HeadCell>Departamento</Table.HeadCell>
            <Table.HeadCell>Opciones</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 ">
                Marco Antonio
              </Table.Cell>
              <Table.Cell>Solis</Table.Cell>
              <Table.Cell>12345678</Table.Cell>
              <Table.Cell>0412-3456789</Table.Cell>
              <Table.Cell>Cantante</Table.Cell>
              <Table.Cell>Musica</Table.Cell>
              <Table.Cell>
                <Button.Group>
                  <Button color="purple" size="sm">
                    <FaEdit />
                  </Button>
                  <Button color="failure" size="sm">
                    <FaEraser />
                  </Button>
                </Button.Group>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white ">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 ">
                Pepe Grillo
              </Table.Cell>
              <Table.Cell>Ozuna</Table.Cell>
              <Table.Cell>12345678</Table.Cell>
              <Table.Cell>0412-3456789</Table.Cell>
              <Table.Cell>Conciencia</Table.Cell>
              <Table.Cell>Mental</Table.Cell>
              <Table.Cell>
                <Button.Group>
                  <Button color="purple" size="sm">
                    <FaEdit />
                  </Button>
                  <Button color="failure" size="sm">
                    <FaEraser />
                  </Button>
                </Button.Group>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </Container>
  );
}
const Container = styled.div`
    margin: 1rem;
    .ContModal{
      display: flex;
      flex-wrap: wrap;
      gap: 
    }
    .ContenedorTabla{
      overflow-x-auto;
      border-radius: 10px;
      background: ${(props) => props.theme.bg2};
      border: 1px solid  ${(props) => props.theme.gray600};
      padding: 0.3rem;
    }
`;