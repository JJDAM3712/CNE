import styled from "styled-components";
import "../css/App.css";

import {
  PiUsersFourFill,
  PiBankBold,
  PiCalendarFill,
  PiUsersFill,
} from "react-icons/pi";
import {
  MdSupervisedUserCircle,
  MdInventory,
  MdCategory,
} from "react-icons/md";
import { RiOrganizationChart } from "react-icons/ri";
import { useEffect, useState } from "react";
import { ServidorURL } from "../config/config";
import axios from "axios";


export function Home() {
  const [data, setData] = useState(new Array(7).fill(null));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const urls = [
          'contPerso',
          'contAsistencia',
          'contVisita',
          'contInventary',
          'contDepart',
          'contCargo',
          'contCategorias'
        ];
        const requests = urls.map(url => axios.get(`${ServidorURL}/${url}`));
        const responses = await Promise.all(requests);
        const data = responses.map(response => response.data);
        console.log(data);
        setData(data);
      } catch (error) {
        console.error('Hubo un error al obtener los datos:', error);
      }
    };

    fetchData();
  }, []);
  const CardsArray = [
    {
      label: "Personal",
      icon: <PiUsersFourFill className="h-20 w-20" />,
      to: "/personal",
      cantidad: data[0],
    },
    {
      label: "Asistencias",
      icon: <PiCalendarFill className="h-20 w-20" />,
      to: "/asistencias",
      cantidad: data[1],
    },
    {
      label: "Visitas",
      icon: <MdSupervisedUserCircle className="h-20 w-20" />,
      to: "/visitas",
      cantidad: data[2],
    },
    {
      label: "Inventario",
      icon: <MdInventory className="h-20 w-20" />,
      to: "/inventario",
      cantidad: data[3],
    },
    {
      label: "Departamentos",
      icon: <PiBankBold className="h-20 w-20" />,
      to: "/departamentos",
      cantidad: data[4],
    },
    {
      label: "Cargos",
      icon: <RiOrganizationChart className="h-20 w-20" />,
      to: "/cargos",
      cantidad: data[5],
    },
    {
      label: "Categorias",
      icon: <MdCategory className="h-20 w-20" />,
      to: "/categoria",
      cantidad: data[6],
    },
  ];
  return (
    <Container>
      <div className="flex flex-wrap gap-2 mb-1">
        {CardsArray.map(({ icon, label, cantidad }) => (
          <div className="card work" key={label}>
            <div className="img-section">{icon} </div>
            <div className="card-desc">
              <div className="card-header">
                <div className="card-title">{label}</div>
                <div className="card-menu">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
              </div>
              <hr></hr>
              <div className="card-time">{cantidad ? cantidad[0]['COUNT (*)'] : 'Cargando...'} Registros</div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}


const Container = styled.div`
  margin: 1.1rem;
  hr {
    border: none;
    height: 1px;
    background-color: #fff; /* establece el color de la linea */
  }
`;
