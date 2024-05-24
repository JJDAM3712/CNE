import styled from "styled-components";
import { RegisSalidaVisita, RegisVisita } from "../components/Modal";
import { Datepicker, Button } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { TablaVisitas } from "../components/Tablas";
import axios from "axios";
import { useRef, useState, useEffect } from "react";
import { useDownloadExcel } from 'react-export-table-to-excel';

export function Visitas() {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
      ShowDepart();
    }, []);
  
    const ShowDepart = async () => {
      const res = await axios.get("http://localhost:4000/visita");
      setDatos(res.data);
    };
    const TablaVisita = useRef(null);

    const { onDownload } = useDownloadExcel({
      currentTableRef: TablaVisita.current,
      filename: 'Visitas',
      sheet: 'Hoja 1'
    });

    return (
        <Container>
            <h1>Visitas</h1>
            <div className="ContRep">
                <form>
                    <div className="flex gap-1 justify-between">
                        <Datepicker language="es-ES" label="Fecha Min" className="w-2\/4" />
                        <Datepicker language="es-ES" label="Fecha Max" className="w-2\/4" />
                        <Button color="success" type="submit" onClick={onDownload}>
                            Generar Reporte
                            <HiOutlineArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <RegisVisita />
                        <RegisSalidaVisita />
                    </div>
                </form>
            </div>
            <TablaVisitas datos={datos} innerRef={TablaVisita} />
        </Container>
    )    
}
const Container = styled.div`
    margin: 1.1rem;
    .ContRep {
        width: 100%;
        max-width: 1000px;
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