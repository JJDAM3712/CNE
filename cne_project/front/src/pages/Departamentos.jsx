import styled from "styled-components";
import { Button } from "flowbite-react";
import { ModalDep } from "../components/Modal";
import { HiOutlineArrowRight } from "react-icons/hi";
import { TablaDepartamento } from "../components/Tablas";

export function Departamentos() {
  return (
    <Container>
      <h1>Departamentos</h1>
      <div className="flex flex-wrap gap-2 mb-1">
        <ModalDep />
        <Button color="success">
          Generar Reporte
          <HiOutlineArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
      <TablaDepartamento />
    </Container>
  );
}
const Container = styled.div`
  margin: 1.1rem;
`;
