import styled from "styled-components";
import { TablaAsistencias } from "../components/Tablas";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useDownloadExcel } from "react-export-table-to-excel";
import { Datepicker, Button } from "flowbite-react";
import { RegisAsist } from "../components/Modal";
import { HiOutlineArrowRight } from "react-icons/hi";

export function Asistencias() {
  const [datos, setDatos] = useState([]);
  const [fechaMin, setFechaMin] = useState(null);
  const [fechaMax, setFechaMax] = useState(null);

  useEffect(() => {
    ShowDepart();
  }, [fechaMin, fechaMax]);
  const ShowDepart = async () => {
    const res = await axios.get("http://localhost:4000/asistencia");
    setDatos(res.data);
  };
  // Filtra los datos de asistencia por fecha
  const datosFiltrados = datos.filter(asistencia => {
    const fechaAsistencia = new Date(asistencia.fecha);
    if (fechaMin && fechaAsistencia < new Date(fechaMin)) {
      return false;
    }
    if (fechaMax && fechaAsistencia > new Date(fechaMax)) {
      return false;
    }
    return true;
  });

  // exporta los datos a un archivo excel
  const TablaAsistencia = useRef(null);

  const { onDownload } = useDownloadExcel({
    currentTableRef: TablaAsistencia.current,
    filename: 'Asistencias',
    sheet: 'Hoja 1'
  });

  return (
    <Container>
      <h1>Asistencias</h1>
      <Container>
        <div className="ContRep">
          <form>
            <div className="flex gap-1 justify-between">
              <Datepicker language="es-ES" label="Fecha Min" className="w-2\/4" onChange={setFechaMin}/>
              <Datepicker language="es-ES" label="Fecha Max" className="w-2\/4" onChange={setFechaMax}/>
              <Button color="success" type="submit" onClick={onDownload}>
                Generar Reporte
                <HiOutlineArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <RegisAsist />
            </div>
          </form>
        </div>
      </Container>
      <TablaAsistencias datos={datosFiltrados} innerRef={TablaAsistencia}/>
    </Container>
  );
}

const Container = styled.div`
  margin: 1.1rem;
  .ContRep {
    width: 70%;
    border-radius: 10px;
    background: ${(props) => props.theme.bg2};
    border-top: 3px solid ${(props) => props.theme.red500};
    padding: 0.3rem;
  }
  @media (max-width: 1199px) {
    .ContRep {
      width: 100%;
    }
  }
`;
