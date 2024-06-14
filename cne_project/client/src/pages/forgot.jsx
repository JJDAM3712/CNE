import styled from "styled-components";
import "./output.css";
import logo from "./assets/img/CNE_logo.svg";
import "./css/login.css";
import { HiUser } from "react-icons/hi";
import { useState, useEffect } from "react";
import swal from "sweetalert";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvided";
import { ServidorURL } from "../config/config";
import { alert } from "../utils/generic"

export function Forgot() {
  const [datos, setDatos] = useState({
    usuario: ""
  });

  const handleChange = (e) => {
    let names = e.target.name;
    let value = e.target.value;
    setDatos({ ...datos, [names]: value });
  };
  const navigate = useNavigate();
  // accede a la funcion login de useAuth
  const { authState, login } = useAuth();

  // En tu componente de inicio de sesión
  useEffect(() => {
    if (authState.isAuthenticated) {
      // Redirige cuando el estado de autenticación cambie a true
      navigate("/forgot/*");
    }
  }, [authState.isAuthenticated, navigate]);
  //   ACTIVAR EL USO DE ESTA FUNCION (NO SUPE COMO XD)
  const handleSend = async (e) => {
    e.preventDefault();

    try {
      // EDITAR Y ADAPTAR LAS VALIDACIONES
      if (datos.usuario.trim() === "" && datos.password.trim() === "") {
        alert("Campo vacio","Debes ingresar todos los datos","warning")
      } else {
        const res = await axios.post(`${ServidorURL}/loginRecor`, datos, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res.status === 200) {
          const {token, userId} = res.data;
          login(token, userId);
          navigate("/forgot/*");
        }
      }
    } catch (error) {
      if (error.response && error.response.status === 300) {
        alert("Oops...",`Usuario incorercto!`, "error")
      } else {
        alert("Oops...",`Ha ocurrido un error! ${error}`, "error")
      }
      return console.log(error);
    }
  };
  return (
    <Container>
      <form className="form_main" onSubmit={handleSend}>
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
            value={datos.usuario}
            onChange={handleChange}
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
