import styled from "styled-components";
import { TablaAsistencias } from "../components/Tablas";
import { ReportAsis } from "../components/Reportes";

export function Asistencias() {
  return (
    <Container>
      <h1>Asistencias</h1>
      <ReportAsis />
      <TablaAsistencias/>
    </Container>
  );
}
const Container = styled.div`
  margin: 1rem;
`;
