import styled from "styled-components";
import { Button } from "flowbite-react";
import { RegisInv } from "../components/Modal";
import { HiOutlineArrowRight } from "react-icons/hi";
import { TablaInv } from "../components/Tablas";

export function Inventario() {
  return (
    <Container>
      <h1>Inventario</h1>
      <div className="flex flex-wrap gap-2 mb-1">
        <RegisInv />
        <Button color="success">
          Generar Reporte
          <HiOutlineArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
      <TablaInv />
    </Container>
  );
}
const Container = styled.div`
  margin: 1.1rem;
`;
