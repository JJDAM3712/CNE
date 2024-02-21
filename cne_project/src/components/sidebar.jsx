import styled from "styled-components";
import logo from "../assets/img/react.svg";
import { v } from "../css/Variables";
export function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <Container isOpen={sidebarOpen}>
      <div className="Sidebarbutton"></div>
      <div className="Logocontent">
        <div className="imgcontent">
          <img src={logo} alt="Logo CNE" />
        </div>
        <h2>CNE APP</h2>
      </div>
    </Container>
  );
}
// ESTILOS DEL CONTENEDOR GENERAL
const Container = styled.div`
  background: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.text};
  position: sticky;
  padding-top: 20px;
  .Logocontent {
    display: flex;
    justify-content: center;
    align-items: center;

    padding-bottom: ${v.lgSpacing};
    .imgcontent {
      display: flex;
      img {
        max-width: 100%;
        height: auto;
      }
      cursor: pointer;
      transition: all 0.3s;
      transform: ${({ isOpen }) => (isOpen ? `scale(0.7)` : `scale(1.5)`)};
    }
    h2 {
      display: ${({ isOpen }) => (isOpen ? `block` : `none`)};
    }
  }
`;
