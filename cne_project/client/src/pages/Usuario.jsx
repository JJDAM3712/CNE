import styled from "styled-components";
import { ModalUsr } from "../components/Modal";
import { TablaUsuario } from "../components/Tablas";

export function Usuario() {
  return (
    <Container>
      <h1>Usuarios</h1>
      <div className="flex flex-wrap gap-2 mb-1">
        <ModalUsr />
      </div>
      <TablaUsuario />
    </Container>
  );
}
const Container = styled.div`
  margin: 1.1rem;
`;
