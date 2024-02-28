import styled from "styled-components";
import { Table, Button } from "flowbite-react";
import {
  EditarPersona,
  EliminarPersona,
  EliminaAsist,
  EliminaVisita,
} from "./Modal";

export function TablaPersonal() {
  return (
    <Container>
      <div className="ContenedorTabla">
        <h1>Personal Registrado:</h1>
        <Table>
          <Table.Head className="border-b-2">
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
                  <EditarPersona />
                  <EliminarPersona />
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
                  <EditarPersona />
                  <EliminarPersona />
                </Button.Group>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </Container>
  );
}
export function TablaAsistencias() {
  return (
    <Container>
      <div className="ContenedorTabla">
        <h1>Asistencias:</h1>
        <Table>
          <Table.Head className="border-b-2">
            <Table.HeadCell>Nombre</Table.HeadCell>
            <Table.HeadCell>Apellido</Table.HeadCell>
            <Table.HeadCell>Cedula</Table.HeadCell>
            <Table.HeadCell>Fecha</Table.HeadCell>
            <Table.HeadCell>Hora Entrada</Table.HeadCell>
            <Table.HeadCell>Hora Salida</Table.HeadCell>
            <Table.HeadCell>Opciones</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white">
              <Table.Cell className="whitespace-nowrap">
                Marco Antonio
              </Table.Cell>
              <Table.Cell>Solis</Table.Cell>
              <Table.Cell>12345678</Table.Cell>
              <Table.Cell>2024-01-01</Table.Cell>
              <Table.Cell>12:32:32</Table.Cell>
              <Table.Cell>12:33:33</Table.Cell>
              <Table.Cell>
                <EliminaAsist />
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </Container>
  );
}
export function TablaVisitas() {
  return (
    <Container>
      <div className="ContenedorTabla ">
        <h1>Visitas:</h1>
        <Table>
          <Table.Head className="border-b-2">
            <Table.HeadCell>Nombre</Table.HeadCell>
            <Table.HeadCell>Cedula</Table.HeadCell>
            <Table.HeadCell>Departamento</Table.HeadCell>
            <Table.HeadCell>Fecha</Table.HeadCell>
            <Table.HeadCell>Hora Entrada</Table.HeadCell>
            <Table.HeadCell>Hora Salida</Table.HeadCell>
            <Table.HeadCell>Opciones</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white">
              <Table.Cell className="whitespace-nowrap">
                Marco Antonio
              </Table.Cell>
              <Table.Cell>12345678</Table.Cell>
              <Table.Cell>Musica</Table.Cell>
              <Table.Cell>2024-01-01</Table.Cell>
              <Table.Cell>12:32:32</Table.Cell>
              <Table.Cell>12:33:33</Table.Cell>
              <Table.Cell>
                <EliminaVisita />
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </Container>
  );
}
const Container = styled.div`
    .ContenedorTabla{
    margin-top: 1rem;
    border-radius: 10px;
    background: ${(props) => props.theme.bg2};
    border: 1px solid  ${(props) => props.theme.gray600};
    padding: 0.3rem;
  }`;
