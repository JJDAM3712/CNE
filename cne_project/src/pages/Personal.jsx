import styled from "styled-components";
import { Table } from 'flowbite-react';

export function Personal() {
  return (
    <Container>
      <h1>Personal</h1>
      <div className="overflow-x-auto;">
      <Table>
        <Table.Head>
          <Table.HeadCell>Nombre</Table.HeadCell>
          <Table.HeadCell>Apellido</Table.HeadCell>
          <Table.HeadCell>Cedula</Table.HeadCell>
          <Table.HeadCell>Teléfono</Table.HeadCell>
          <Table.HeadCell>Cargo</Table.HeadCell>
          <Table.HeadCell>Departamento</Table.HeadCell>
          <Table.HeadCell>Opciones</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Marco Antonio
            </Table.Cell>
            <Table.Cell>Solis</Table.Cell>
            <Table.Cell>12345678</Table.Cell>
            <Table.Cell>0412-3456789</Table.Cell>
            <Table.Cell>Cantante</Table.Cell>
            <Table.Cell>Musica</Table.Cell>
            <Table.Cell>
              <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Editar
              </a>
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
`;
