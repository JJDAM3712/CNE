import styled from "styled-components";
import { Button } from "flowbite-react";
import { ModalUsr } from "../components/Modal";
import { HiOutlineArrowRight } from "react-icons/hi";
import { TablaUsuario } from "../components/Tablas";

export function Usuario() {
  return (
    <Container>
      <h1>Usuarios</h1>
      <div className="flex flex-wrap gap-2 mb-1">
        <ModalUsr />
        <Button color="success">
          Generar Reporte
          <HiOutlineArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
      <TablaUsuario />
    </Container>
  );
}
const Container = styled.div`
  margin: 1.1rem;
`;
