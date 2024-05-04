import styled from "styled-components";
import { Button } from "flowbite-react";
import { ModalCargo } from "../components/Modal";
import { HiOutlineArrowRight } from "react-icons/hi";
import { TablaCargos } from "../components/Tablas";

export function Cargos() {
  return (
    <Container>
      <h1>Cargos</h1>
      <div className="flex flex-wrap gap-2 mb-1">
        <ModalCargo />
      </div>
      <TablaCargos />
    </Container>
  );
}
const Container = styled.div`
  margin: 1.1rem;
`;
