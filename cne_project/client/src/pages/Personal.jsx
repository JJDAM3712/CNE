import styled from "styled-components";
import { Button } from "flowbite-react";
import { useContext, useRef, useState, useEffect } from "react";
import { ThemeContext } from "../App";
import { ModalRegis } from "../components/Modal";
import { TablaPersonal } from "../components/Tablas";
import { HiOutlineArrowRight } from "react-icons/hi";
import { useDownloadExcel } from 'react-export-table-to-excel';
import axios from "axios";

export function Personal() {
  const { setTheme, theme } = useContext(ThemeContext);
  const CambiarTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };
  // optener datos del personal
  // Mover la lógica de obtener los datos a este componente
  const [datos, setDatos] = useState([]);
  useEffect(() => {
    ShowDepart();
  }, []);

  const ShowDepart = async () => {
    const res = await axios.get(`http://localhost:4000/personal`);
    setDatos(res.data);
  };
  const TablaPers = useRef(null);

  const { onDownload } = useDownloadExcel({
    currentTableRef: TablaPers.current,
    filename: 'Personal',
    sheet: 'Hoja 1'
  });

  return (
    <Container themeUse={theme}>
      <h1>Personal</h1>
      <div className="flex flex-wrap gap-2 mb-1">
        <ModalRegis />
        {/* --- exportar excel */}
          <Button color="success" onClick={onDownload}>
            Generar Reporte
            <HiOutlineArrowRight className="ml-2 h-5 w-5" />
          </Button>
        {/* --- tabla personal */}
      </div>
      <TablaPersonal innerRef={TablaPers} datos={datos} setDatos={setDatos}/>
    </Container>
  );
}
const Container = styled.div`
    margin: 1.1rem;
    .ContenedorTabla{
      overflow-x-auto;
      border-radius: 10px;
      background: ${(props) => props.theme.bg2};
      border: 1px solid  ${(props) => props.theme.gray600};
      padding: 0.3rem;
    }
`;
