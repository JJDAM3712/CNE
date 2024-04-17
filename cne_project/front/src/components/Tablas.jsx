import styled from "styled-components";
import { Table, Button } from "flowbite-react";
import { useEffect, useState } from "react";
import axios from "axios";
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
  EditarDep,
  EliminarCatg,
  EditarCatg,
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

// tabla de departamento
export function TablaDepartamento() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    ShowDepart();
  }, []);

  const ShowDepart = async () => {
    const res = await axios.get("http://localhost:4000/task");
    setDatos(res.data);
  };

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
            {/* mostrar datos de bd en tabla */}
            {datos.map((departamentos) => (
              <Table.Row
                className="bg-white"
                key={departamentos.id_departamento}
              >
                <Table.Cell className="whitespace-nowrap">
                  {departamentos.departamento}
                </Table.Cell>
                <Table.Cell>
                  <Button.Group>
                    <EliminarDep
                      className="left-4"
                      id={departamentos.id_departamento}
                    />
                    <EditarDep
                      className="left-4"
                      id={departamentos.id_departamento}
                    />
                  </Button.Group>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </Container>
  );
}
export function TablaCargos() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    ShowDepart();
  }, []);

  const ShowDepart = async () => {
    const res = await axios.get("http://localhost:4000/cargos");
    setDatos(res.data);
  };
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
            {datos.map((cargos) => (
              <Table.Row className="bg-white" key={cargos.id_cargo}>
                <Table.Cell className="whitespace-nowrap">
                  {cargos.cargo}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap">
                  {cargos.cantidad}
                </Table.Cell>
                <Table.Cell>
                  <EliminarCargo className="left-4" id={cargos.id_cargo} />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </Container>
  );
}
export function TablaInv() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    ShowDepart();
  }, []);

  const ShowDepart = async () => {
    const res = await axios.get("http://localhost:4000/inventary");
    setDatos(res.data);
  };
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
            <Table.HeadCell>Cantegoria</Table.HeadCell>
            <Table.HeadCell>Opciones</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {datos.map((inventary) => (
              <Table.Row className="bg-white">
                <Table.Cell className="whitespace-nowrap">
                  {inventary.nombre}
                </Table.Cell>
                <Table.Cell>{inventary.marca}</Table.Cell>
                <Table.Cell>{inventary.codigo}</Table.Cell>
                <Table.Cell>{inventary.departamento}</Table.Cell>
                <Table.Cell>{inventary.estatus}</Table.Cell>
                <Table.Cell>{inventary.cantidad}</Table.Cell>
                <Table.Cell>{inventary.categoria}</Table.Cell>
                <Table.Cell>
                  <Button.Group>
                    <EditInv id={inventary.id_inventario} />
                    <EliminarPersona id={inventary.id_inventario} />
                  </Button.Group>
                </Table.Cell>
              </Table.Row>
            ))}
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
                ejemplo@ejemplo.co
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
export function TablaCategoria() {
  return (
    <Container>
      <div className="ContenedorTabla ">
        <h1>Categorias:</h1>
        <Table>
          <Table.Head className="border-b-2">
            <Table.HeadCell>Nombre de Categoria</Table.HeadCell>
            <Table.HeadCell>Opciones</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white">
              <Table.Cell className="whitespace-nowrap">PruebaGoria</Table.Cell>
              <Table.Cell>
                <Button.Group>
                  <EliminarCatg className="left-4" />
                  <EditarCatg />
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
