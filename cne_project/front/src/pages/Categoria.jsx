import styled from "styled-components";
import { ModalCatg } from "../components/Modal";
import { TablaCategoria } from "../components/Tablas";

export function Categoria() {
  return (
    <Container>
      <h1>Categoria</h1>
      <div className="flex flex-wrap gap-2 mb-1">
        <ModalCatg />
      </div>
      <TablaCategoria />
    </Container>
  );
}

const Container = styled.div`
  margin: 1.1rem;
`;
