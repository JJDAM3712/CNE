import styled from "styled-components";
import { ModalCatg } from "../components/Modal";
import { Button } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { TablaCategoria } from "../components/Tablas";

export function Categoria() {
  return (
    <Container>
      <h1>Categoria</h1>
      <div className="flex flex-wrap gap-2 mb-1">
        <ModalCatg />
        <Button color="success">
          Generar Reporte
          <HiOutlineArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
      <TablaCategoria />
    </Container>
  );
}

const Container = styled.div`
  margin: 1.1rem;
`;
