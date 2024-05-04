import styled from "styled-components";
import { ReportVisita } from "../components/Reportes";
import { TablaVisitas } from "../components/Tablas";
import { useDownloadExcel } from 'react-export-table-to-excel';
import { useRef, useState, useEffect } from "react";

export function Visitas() {



    return (
        <Container>
            <h1>Visitas</h1>
            <ReportVisita />
            <TablaVisitas />
        </Container>
    )    
}
const Container = styled.div`
    margin: 1.1rem;    
`;