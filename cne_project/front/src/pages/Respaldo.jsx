import { HiOutlineRefresh } from "react-icons/hi";
import styled from "styled-components";
import logo from "../assets/img/CNE_logo.svg";
import "../css/login.css";
import { MdCloudDownload } from "react-icons/md";

export function Respaldo() {
  return (
    <Container>
      <form action="" className="form_main">
        <div className="flex ">
          <img src={logo} alt="Logo CNE" className="w-24" />
        </div>
        <p className="heading">Respaldo de Datos</p>
        <div className="inputContainer">
          <button id="buttonResp">
            <MdCloudDownload className="inputIcon" />
            Respaldar Datos
          </button>
        </div>

        <div className="inputContainer">
          <button id="buttonRecp">
            <HiOutlineRefresh className="inputIcon" />
            Recuperar Respaldo
          </button>
        </div>
      </form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
`;
