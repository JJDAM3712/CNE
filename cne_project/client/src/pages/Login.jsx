import styled from "styled-components";
import "../css/output.css";
import logo from "../assets/img/CNE_logo.svg";
import "../css/login.css";
import { HiLockClosed, HiUser } from "react-icons/hi";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { alert } from "../utils/generic"
import { ServidorURL } from "../config/config";
import { useAuth } from "../auth/AuthProvided";


function Login() {
  const [datos, setDatos] = useState({
    usuario: "",
    password: "",
  });
  const navigate = useNavigate();
  // accede a la funcion login de useAuth
  const { authState, login } = useAuth();

  // En tu componente de inicio de sesión
  useEffect(() => {
    if (authState.isAuthenticated) {
      // Redirige cuando el estado de autenticación cambie a true
      navigate("/app/*");
    }
  }, [authState.isAuthenticated, navigate]);

  const handleChange = (e) => {
    let names = e.target.name;
    let value = e.target.value;
    setDatos({ ...datos, [names]: value });
  };

  const handleSend = async (e) => {
    e.preventDefault();

    try {
      if (datos.usuario.trim() === "" && datos.password.trim() === "") {
        alert("Campo vacio","Debes ingresar todos los datos","warning");
      } else {
        const res = await axios.post(`${ServidorURL}/login`, datos, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        if (res.status === 200) {
          login(res.data.mensaje);
          navigate("/app/*");
        }
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error.response);
      if (error.response && error.response.status === 401) {
        alert("Oops...",`Usuario o contraseña incorerctos!`,"error");
      } else {
        alert("Oops...",`Ha ocurrido un error! ${error}`,"error");
      }
      return console.log(error);
    }
  };

  return (
    <Container>
      <form action="" className="form_main" onSubmit={handleSend}>
        <div className="flex ">
          <img src={logo} alt="Logo CNE" className="w-24" />
        </div>
        <p className="heading">Ingresar al Sistema</p>
        <div className="inputContainer">
          <HiUser className="inputIcon" />
          <input
            type="text"
            className="inputField"
            id="usuario"
            name="usuario"
            value={datos.usuario}
            placeholder="Usuario"
            onChange={handleChange}
          />
        </div>

        <div className="inputContainer">
          <HiLockClosed className="inputIcon" />
          <input
            type="password"
            className="inputField"
            id="password"
            name="password"
            value={datos.password}
            onChange={handleChange}
            placeholder="Contraseña"
          />
        </div>

        <button id="button">Ingresar</button>
        <a className="forgotLink" href="/forgot">
          Olvidó su contraseña?
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

export default Login;
