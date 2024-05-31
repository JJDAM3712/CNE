import styled from "styled-components";
import "./output.css";
import logo from "./assets/img/CNE_logo.svg";
import "./css/login.css";
import { HiLockClosed, HiUser } from "react-icons/hi";
import { useState } from "react";
import swal from "sweetalert";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
  const [datos, setDatos] = useState({
    usuario: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    let names = e.target.name;
    let value = e.target.value;
    setDatos({ ...datos, [names]: value });
  };

  const handleSend = async (e) => {
    e.preventDefault();

    try {
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
        if (res.status === 200) {
          navigate("/app/*");
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
