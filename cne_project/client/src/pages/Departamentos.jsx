import styled from "styled-components";
import { ModalDep } from "../components/Modal";
import { TablaDepartamento } from "../components/Tablas";

export function Departamentos() {
  return (
    <Container>
      <h1>Departamentos</h1>
      <div className="flex flex-wrap gap-2 mb-1 uppercase">
        <ModalDep />
      </div>
      <TablaDepartamento />
    </Container>
  );
}
const Container = styled.div`
  margin: 1.1rem;
`;
