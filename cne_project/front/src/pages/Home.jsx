import styled from "styled-components";
import "../css/App.css";

import { AiOutlineHome } from "react-icons/ai";
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
export function Home() {
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
              <div className="card-time">{cantidad} Registros</div>
              <p className="recent">hace 3 dias</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
const CardsArray = [
  {
    label: "Usuarios",
    icon: <AiOutlineHome className="h-20 w-20" />,
    to: "/",
    cantidad: "2",
  },
  {
    label: "Personal",
    icon: <PiUsersFourFill className="h-20 w-20" />,
    to: "/personal",
    cantidad: "2",
  },
  {
    label: "Asistencias",
    icon: <PiCalendarFill className="h-20 w-20" />,
    to: "/asistencias",
    cantidad: "1",
  },
  {
    label: "Visitas",
    icon: <MdSupervisedUserCircle className="h-20 w-20" />,
    to: "/visitas",
    cantidad: "3",
  },
  {
    label: "Inventario",
    icon: <MdInventory className="h-20 w-20" />,
    to: "/inventario",
    cantidad: "1",
  },
  {
    label: "Departamentos",
    icon: <PiBankBold className="h-20 w-20" />,
    to: "/departamentos",
    cantidad: "2",
  },
  {
    label: "Cargos",
    icon: <RiOrganizationChart className="h-20 w-20" />,
    to: "/cargos",
    cantidad: "3",
  },
  {
    label: "Categorias",
    icon: <MdCategory className="h-20 w-20" />,
    to: "/categoria",
    cantidad: "2",
  },
  {
    label: "Usuarios",
    icon: <PiUsersFill className="h-20 w-20" />,
    to: "/usuario",
    cantidad: "1",
  },
];

const Container = styled.div`
  margin: 1.1rem;
  hr {
    border: none;
    height: 1px;
    background-color: #fff; /* establece el color de la línea */
  }
`;
