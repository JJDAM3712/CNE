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
import socketIOClient from 'socket.io-client';
import Pagination from "./Pagination";
import { ServidorURL } from "../config/config";

//-------------------------------------------------
// tabla personal
export function TablaPersonal({ innerRef, datos }) {
  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage = 10;
  // Calcula los elementos que se mostrarán en la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = datos.slice(indexOfFirstItem, indexOfLastItem);

  // Función para cambiar la página actual
  const changePage = (event) => {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  };
  return (
    <Container>
      <div className="ContenedorTabla">
        <h1>Personal Registrado:</h1>
        <Table ref={innerRef}>
          <Table.Head className="border-b-2 uppercase">
            <Table.HeadCell>Nombre</Table.HeadCell>
            <Table.HeadCell>Apellido</Table.HeadCell>
            <Table.HeadCell>Cedula</Table.HeadCell>
            <Table.HeadCell>Teléfono</Table.HeadCell>
            <Table.HeadCell>Cargo</Table.HeadCell>
            <Table.HeadCell>Departamento</Table.HeadCell>
            <Table.HeadCell></Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y uppercase">
            {currentItems.map((personal) => (
              <Table.Row className="bg-white" key={personal.id_personal}>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 ">
                  {personal.nombre}
                </Table.Cell>
                <Table.Cell>{personal.apellido}</Table.Cell>
                <Table.Cell>{personal.cedula}</Table.Cell>
                <Table.Cell>{personal.telefono}</Table.Cell>
                <Table.Cell>{personal.cargo}</Table.Cell>
                <Table.Cell>{personal.departamento}</Table.Cell>
                <Table.Cell>
                  <Button.Group>
                    <EditarPersona id={personal.id_personal}/>
                    <EliminarPersona id={personal.id_personal}/>
                  </Button.Group>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={datos.length}
          paginate={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </Container>
  );
}
//-------------------------------------------------
// tabla asistencias
export function TablaAsistencias({innerRef, datos}) {
  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage = 10; 
  // Calcula los elementos que se mostrarán en la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = datos.slice(indexOfFirstItem, indexOfLastItem);

  // Función para cambiar la página actual
  const changePage = (event) => {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  };
  return (
    <Container>
      <div className="ContenedorTabla">
        <h1>Asistencias:</h1>
        <Table ref={innerRef}>
          <Table.Head className="border-b-2 uppercase">
            <Table.HeadCell>Nombre</Table.HeadCell>
            <Table.HeadCell>Apellido</Table.HeadCell>
            <Table.HeadCell>Cedula</Table.HeadCell>
            <Table.HeadCell>Fecha</Table.HeadCell>
            <Table.HeadCell>Hora Entrada</Table.HeadCell>
            <Table.HeadCell>Hora Salida</Table.HeadCell>
            <Table.HeadCell></Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y uppercase">
            {/* mostrar los datos */}
            {currentItems.map((asistencias) => 
              <Table.Row className="bg-white" key={asistencias.id_asistencia}>
                <Table.Cell className="whitespace-nowrap">
                  {asistencias.nombre}
                </Table.Cell>
                <Table.Cell>{asistencias.apellido}</Table.Cell>
                <Table.Cell>{asistencias.cedula}</Table.Cell>
                <Table.Cell>{asistencias.fecha}</Table.Cell>
                <Table.Cell>{asistencias.entrada}</Table.Cell>
                <Table.Cell>{asistencias.salida}</Table.Cell>
                <Table.Cell>
                  <EliminaAsist id={asistencias.id_asistencia}/>
                </Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={datos.length}
          paginate={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </Container>
  );
}
//-------------------------------------------------
// tabla personal
export const TablaVisitas = ({ innerRef, datos }) => {
  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage = 10;
  // Calcula los elementos que se mostrarán en la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = datos.slice(indexOfFirstItem, indexOfLastItem);

  // Función para cambiar la página actual
  const changePage = (event) => {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  };
  return (
    <Container>
      <div className="ContenedorTabla ">
        <h1>Visitas:</h1>
        <Table ref={innerRef}>
          <Table.Head className="border-b-2">
            <Table.HeadCell>Nombre</Table.HeadCell>
            <Table.HeadCell>Cedula</Table.HeadCell>
            <Table.HeadCell>Departamento</Table.HeadCell>
            <Table.HeadCell>Motivo</Table.HeadCell>
            <Table.HeadCell>Fecha</Table.HeadCell>
            <Table.HeadCell>Hora Entrada</Table.HeadCell>
            <Table.HeadCell>Hora Salida</Table.HeadCell>
            <Table.HeadCell></Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y uppercase">
            {currentItems.map((visitas) => (
              <Table.Row className="bg-white" key={visitas.id_visita}>
                <Table.Cell className="whitespace-nowrap">
                  {visitas.nombre}
                </Table.Cell>
                <Table.Cell>{visitas.cedula}</Table.Cell>
                <Table.Cell>{visitas.departamento}</Table.Cell>
                <Table.Cell>{visitas.motivo}</Table.Cell>
                <Table.Cell>{visitas.fecha}</Table.Cell>
                <Table.Cell>{visitas.hora_entrada}</Table.Cell>
                <Table.Cell>{visitas.hora_salida}</Table.Cell>
                <Table.Cell>
                  <EliminaVisita id={visitas.id_visita}/>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={datos.length}
          paginate={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </Container>
  );
}
//-------------------------------------------------
// tabla de departamento
export function TablaDepartamento() {
  const [datos, setDatos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage =10; 

  useEffect(() => {
    ShowDepart();
    const socket = socketIOClient(`${ServidorURL}`);

    socket.on('ActualizatTable', (nuevasAsistencias) => {
      setDatos(nuevasAsistencias);
    });

    return () => {
      socket.disconnect();
    };
  }, []);
  const ShowDepart = async () => {
    const res = await axios.get(`${ServidorURL}/task`);
    setDatos(res.data);
  };
   // Calcula los elementos que se mostrarán en la página actual
   const indexOfLastItem = currentPage * itemsPerPage;
   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
   const currentItems = datos.slice(indexOfFirstItem, indexOfLastItem);
 
   // Función para cambiar la página actual
   const changePage = (event) => {
     const pageNumber = Number(event.target.textContent);
     setCurrentPage(pageNumber);
   };
  return (
    <Container>
      <div className="ContenedorTabla ">
        <h1>Departamentos:</h1>
        <Table className="uppercase">
          <Table.Head className="border-b-2 uppercase">
            <Table.HeadCell>Departamento</Table.HeadCell>
            <Table.HeadCell></Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {/* mostrar datos de bd en tabla */}
            {currentItems.map((departamentos) => (
              <Table.Row
                className="bg-white"
                key={departamentos.id_departamento}
              >
                <Table.Cell className="whitespace-nowrap">
                  {departamentos.departamento}
                </Table.Cell>
                <Table.Cell>
                  <Button.Group>
                    <EditarDep
                      className="left-4"
                      id={departamentos.id_departamento}
                    />
                    <EliminarDep
                      className="left-4"
                      id={departamentos.id_departamento}
                    />
                  </Button.Group>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={datos.length}
          paginate={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </Container>
  );
}
//-------------------------------------------------
// tabla de departamento
export function TablaCargos() {
  const [datos, setDatos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage = 10; 

  useEffect(() => {
    ShowDepart();
    const socket = socketIOClient(ServidorURL);
    socket.on('ActualizatTable', (nuevasAsistencias) => {
      setDatos(nuevasAsistencias);
    });
    return () => {
      socket.disconnect();
    };
  }, []);
  const ShowDepart = async () => {
    const res = await axios.get(`${ServidorURL}/cargos`);
    setDatos(res.data);
  };

  // Calcula los elementos que se mostrarán en la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = datos.slice(indexOfFirstItem, indexOfLastItem);

  // Función para cambiar la página actual
  const changePage = (event) => {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  };
  return (
    <Container>
      <div className="ContenedorTabla ">
        <h1>Cargos:</h1>
        <Table className="uppercase">
          <Table.Head className="border-b-2">
            <Table.HeadCell>Cargo</Table.HeadCell>
            <Table.HeadCell>Cantidad de Puestos</Table.HeadCell>
            <Table.HeadCell></Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {currentItems.map((cargos) => (
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
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={datos.length}
          paginate={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </Container>
  );
}
//-------------------------------------------------
// tabla de inventario
export function TablaInv({ innerRef, datos }) {
  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage = 10; 
  // Calcula los elementos que se mostrarán en la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = datos.slice(indexOfFirstItem, indexOfLastItem);

  // Función para cambiar la página actual
  const changePage = (event) => {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  };
  return (
    <Container>
      <div className="ContenedorTabla">
        <h1>Inventario:</h1>
        <Table className="uppercase" ref={innerRef}>
          <Table.Head className="border-b-2">
            <Table.HeadCell>Nombre</Table.HeadCell>
            <Table.HeadCell>Marca</Table.HeadCell>
            <Table.HeadCell>Código</Table.HeadCell>
            <Table.HeadCell>Modelo</Table.HeadCell>
            <Table.HeadCell>Departamento</Table.HeadCell>
            <Table.HeadCell>Estado</Table.HeadCell>
            <Table.HeadCell>Cantidad</Table.HeadCell>
            <Table.HeadCell>Categoria</Table.HeadCell>
            <Table.HeadCell></Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {currentItems.map((inventary) => (
              // eslint-disable-next-line react/jsx-key
              <Table.Row className="bg-white">
                <Table.Cell className="whitespace-nowrap">
                  {inventary.nombre}
                </Table.Cell>
                <Table.Cell>{inventary.marca}</Table.Cell>
                <Table.Cell>{inventary.codigo}</Table.Cell>
                <Table.Cell>{inventary.modelo}</Table.Cell>
                <Table.Cell>{inventary.departamento}</Table.Cell>
                <Table.Cell>{inventary.estatus}</Table.Cell>
                <Table.Cell>{inventary.cantidad}</Table.Cell>
                <Table.Cell>{inventary.categoria}</Table.Cell>
                <Table.Cell>
                  <Button.Group>
                    <EditInv id={inventary.id_inventario} />
                    <EliminarInv id={inventary.id_inventario} />
                  </Button.Group>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={datos.length}
          paginate={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </Container>
  );
}
//-------------------------------------------------
// tabla de usuarios
export function TablaUsuario() {
  const [datos, setDatos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage = 10; 

  useEffect(() => {
    ShowDepart();
    const socket = socketIOClient(ServidorURL);

    socket.on('ActualizatTable', (nuevasAsistencias) => {
      setDatos(nuevasAsistencias);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const ShowDepart = async () => {
    const res = await axios.get(`${ServidorURL}/signup`);
    setDatos(res.data);
  };
  // Calcula los elementos que se mostrarán en la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = datos.slice(indexOfFirstItem, indexOfLastItem);

  // Función para cambiar la página actual
  const changePage = (event) => {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  };
  return (
    <Container>
      <div className="ContenedorTabla ">
        <h1>Usuarios:</h1>
        <Table>
          <Table.Head className="border-b-2">
            <Table.HeadCell>Nombre de Usuario</Table.HeadCell>
            <Table.HeadCell></Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {currentItems.map((users) => (
              <Table.Row className="bg-white" key={users.id}>
                <Table.Cell className="whitespace-nowrap">
                  {users.usuario}
                </Table.Cell>
                <Table.Cell>
                  <Button.Group>
                    <EditarUsr id={users.id} />
                    <EliminarUsr className="left-4" id={users.id} />
                  </Button.Group>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={datos.length}
          paginate={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </Container>
  );
}
//-------------------------------------------------
// tabla de categorias
export function TablaCategoria() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage = 10; 

  useEffect(() => {
    ShowCategoria();
    const socket = socketIOClient(ServidorURL);

    socket.on('ActualizatTable', (nuevasAsistencias) => {
      setData(nuevasAsistencias);
    });

    return () => {
      socket.disconnect();
    };
  }, []);
  
  const ShowCategoria = async () => {
    const res = await axios.get(`${ServidorURL}/categoria`);
    setData(res.data);
  };
  // Calcula los elementos que se mostrarán en la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Función para cambiar la página actual
  const changePage = (event) => {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  };
  return (
    <Container>
      <div className="ContenedorTabla ">
        <h1>Categorias:</h1>
        <Table className="uppercase">
          <Table.Head className="border-b-2">
            <Table.HeadCell>Nombre de Categoria</Table.HeadCell>
            <Table.HeadCell></Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {currentItems.map((categorias) => (
              // eslint-disable-next-line react/jsx-key
              <Table.Row className="bg-white">
                <Table.Cell className="whitespace-nowrap">
                  {categorias.categoria}
                </Table.Cell>
                <Table.Cell>
                  <Button.Group>
                    <EditarCatg id={categorias.id_categoria} />
                    <EliminarCatg
                      className="left-4"
                      id={categorias.id_categoria}
                    />
                  </Button.Group>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={data.length}
          paginate={setCurrentPage}
          currentPage={currentPage}
        />
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
