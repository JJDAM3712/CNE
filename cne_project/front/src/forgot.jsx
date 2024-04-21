import styled from "styled-components";
import "./output.css";
import logo from "./assets/img/CNE_logo.svg";
import "./css/login.css";
import { HiUser } from "react-icons/hi";
import { useState } from "react";
import swal from "sweetalert";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth/AuthProvided";

export function Forgot() {
  const [datos, setDatos] = useState({
    usuario: "",
    password: "",
  });
  const navigate = useNavigate();
  //   ACTIVAR EL USO DE ESTA FUNCION (NO SUPE COMO XD)
  const handleChange = (e) => {
    let names = e.target.name;
    let value = e.target.value;
    setDatos({ ...datos, [names]: value });
  };
  const { setIsAuthenticated } = useAuth();
  //   VALIDACION DE AUTENTICACION EVITA EL ACCESO NO AUTORIZADO AL SIGUIENTE FORMULARIO
  //   setIsAuthenticated(false);

  //   ACTIVAR EL USO DE ESTA FUNCION (NO SUPE COMO XD)
  const handleSend = async (e) => {
    e.preventDefault();

    try {
      // EDITAR Y ADAPTAR LAS VALIDACIONES
      if (datos.usuario.trim() === "" && datos.password.trim() === "") {
        swal({
          title: "Campo vacio",
          text: "Debes ingresar todos los datos",
          icon: "warning",
          timer: "1500",
        });
      } else {
        const res = await axios.post("http://localhost:4000/login", datos, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        // CAMBIA LA AUTENTICACION DE RUTA A VERDADERO Y PERMITE EL ACCESO AL SIGUIENTE FORMULARIO
        if (res.status === 200) {
          setIsAuthenticated(true);
          navigate("/forgot/*");
        }
      }
    } catch (error) {
      if (error.response && error.response.status === 300) {
        swal({
          title: "Oops...",
          text: `Usuario o contraseña incorerctos!`,
          icon: "error",
          timer: "2000",
        });
      } else {
        swal({
          title: "Oops...",
          text: `Ha ocurrido un error! ${error}`,
          icon: "error",
        });
      }
      return console.log(error);
    }
  };
  return (
    <Container>
      <form action="" className="form_main">
        <div className="flex ">
          <img src={logo} alt="Logo CNE" className="w-24" />
        </div>
        <p className="heading">Recuperar Contraseña</p>
        <div className="inputContainer">
          <HiUser className="inputIcon" />
          <input
            type="text"
            className="inputField"
            id="usuario"
            name="usuario"
            placeholder="Usuario"
          />
        </div>

        <button id="button">Buscar Usuario</button>
        <a className="forgotLink" href="/">
          Volver
        </a>
      </form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ccc;
`;

export default Forgot;
