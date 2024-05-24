import { HiOutlineRefresh } from "react-icons/hi";
import styled from "styled-components";
import logo from "../assets/img/CNE_logo.svg";
import "../css/login.css";
import { MdCloudDownload } from "react-icons/md";
import axios from "axios";
import swal from "sweetalert";

export function Respaldo() {

  const handleRespaldarDatos = async () => {
    try {
      const response = await axios.get('http://localhost:4000/back');
      swal({
        title: "Respaldado!",
        text: "El respaldo se realizo exitosamente!",
        icon: "success",
        timer: "2500",
      });
    } catch (error) {
      console.error('Error al realizar el respaldo:', error);
      // Manejar el error si es necesario
      swal({
        title: "Error!",
        text: "Ocurrio un error durante el respaldo!",
        icon: "error",
        timer: "2500",
      });
    }
  };
  return (
    <Container>
      <div className="form_main">
        <div className="flex ">
          <img src={logo} alt="Logo CNE" className="w-24" />
        </div>
        <p className="heading">Respaldo de Datos</p>
        <div className="inputContainer">
          <button id="buttonResp" onClick={handleRespaldarDatos}>
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
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
`;
