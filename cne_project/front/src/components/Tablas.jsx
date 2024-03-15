import styled from "styled-components";
import { Table, Button } from "flowbite-react";
import {
  EditarPersona,
  EliminarPersona,
  EliminaAsist,
  EliminaVisita,
  EliminarDep,
  EliminarCargo,
  EliminarInv,
  EliminarUsr,
  EditInv,
  EditarUsr,
} from "./Modal"; //Importamos las Modales para su uso en los Botones de Opciones

// LOS DATOS UTILIZADOS EN LAS FILAS ACUALES SON PARA EJEMPLO

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
                  <EliminarInv />
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
export function TablaDepartamento() {
  return (
    <Container>
      <div className="ContenedorTabla ">
        <h1>Departamentos:</h1>
        <Table>
          <Table.Head className="border-b-2">
            <Table.HeadCell>Departamento</Table.HeadCell>
            <Table.HeadCell>Opciones</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white">
              <Table.Cell className="whitespace-nowrap">
                FINANZAS Y SOCIEDADES AFINES
              </Table.Cell>
              <Table.Cell>
                <EliminarDep className="left-4" />
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </Container>
  );
}
export function TablaCargos() {
  return (
    <Container>
      <div className="ContenedorTabla ">
        <h1>Cargos:</h1>
        <Table>
          <Table.Head className="border-b-2">
            <Table.HeadCell>Cargo</Table.HeadCell>
            <Table.HeadCell>Cantidad de Puestos</Table.HeadCell>
            <Table.HeadCell>Opciones</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white">
              <Table.Cell className="whitespace-nowrap">Sub-Gerente</Table.Cell>
              <Table.Cell className="whitespace-nowrap">3</Table.Cell>
              <Table.Cell>
                <EliminarCargo className="left-4" />
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </Container>
  );
}
export function TablaInv() {
  return (
    <Container>
      <div className="ContenedorTabla">
        <h1>Inventario:</h1>
        <Table>
          <Table.Head className="border-b-2">
            <Table.HeadCell>Nombre</Table.HeadCell>
            <Table.HeadCell>Marca</Table.HeadCell>
            <Table.HeadCell>Código</Table.HeadCell>
            <Table.HeadCell>Departamento</Table.HeadCell>
            <Table.HeadCell>Estado</Table.HeadCell>
            <Table.HeadCell>Cantidad</Table.HeadCell>
            <Table.HeadCell>Opciones</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white">
              <Table.Cell className="whitespace-nowrap">Lapiz</Table.Cell>
              <Table.Cell>Mongol</Table.Cell>
              <Table.Cell>00-01a</Table.Cell>
              <Table.Cell>FINANZAS Y SOCIEDADES AFINES</Table.Cell>
              <Table.Cell>NUEVOS</Table.Cell>
              <Table.Cell>12</Table.Cell>
              <Table.Cell>
                <Button.Group>
                  <EditInv />
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
export function TablaUsuario() {
  return (
    <Container>
      <div className="ContenedorTabla ">
        <h1>Usuarios:</h1>
        <Table>
          <Table.Head className="border-b-2">
            <Table.HeadCell>Nombre de Usuario</Table.HeadCell>
            <Table.HeadCell>Correo Electronico</Table.HeadCell>
            <Table.HeadCell>Opciones</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white">
              <Table.Cell className="whitespace-nowrap">Sub-Gerente</Table.Cell>
              <Table.Cell className="whitespace-nowrap">
                ejemplo@ejemplo.com
              </Table.Cell>
              <Table.Cell>
                <Button.Group>
                  <EliminarUsr className="left-4" />
                  <EditarUsr />
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
  .ContenedorTabla {
    margin-top: 1rem;
    border-radius: 10px;
    background: ${(props) => props.theme.bg2};
    border: 1px solid ${(props) => props.theme.gray600};
    padding: 0.3rem;
  }
`;
