import styled from "styled-components";
import { Button } from "flowbite-react";
import { RegisInv } from "../components/Modal";
import { HiOutlineArrowRight } from "react-icons/hi";
import { TablaInv } from "../components/Tablas";
import axios from "axios";
import { useRef, useState, useEffect } from "react";
import { useDownloadExcel } from 'react-export-table-to-excel';
import socketIOClient from 'socket.io-client';

export function Inventario() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const socket = socketIOClient('http://localhost:4000');

    socket.on('ActualizatTable', (nuevasAsistencias) => {
      setDatos(nuevasAsistencias);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    ShowDepart();
  }, []);

  const ShowDepart = async () => {
    const res = await axios.get("http://localhost:4000/inventary");
    setDatos(res.data);
  };
  const TablaInvent = useRef(null);

  const { onDownload } = useDownloadExcel({
    currentTableRef: TablaInvent.current,
    filename: 'Inventario',
    sheet: 'Hoja 1'
  });

  return (
    <Container>
      <h1>Inventario</h1>
      <div className="flex flex-wrap gap-2 mb-1">
        <RegisInv />
        {/* --- exportar excel */}
        <Button color="success" onClick={onDownload}>
          Generar Reporte
          <HiOutlineArrowRight className="ml-2 h-5 w-5" />
        </Button>
        {/* --- tabla personal */}
      </div>
      <TablaInv  innerRef={TablaInvent} datos={datos} setDatos={setDatos}/>
    </Container>
  );
}
const Container = styled.div`
  margin: 1.1rem;
`;
