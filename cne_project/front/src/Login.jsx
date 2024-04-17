import styled from "styled-components";
import "./output.css";
import logo from "./assets/img/CNE_logo.svg";
import "./css/login.css";
import { HiLockClosed, HiUser } from "react-icons/hi";

function Login() {
  return (
    <Container>
      <form action="" className="form_main">
        <div className="flex ">
          <img src={logo} alt="Logo CNE" className="w-24" />
        </div>
        <p className="heading">Ingresar al Sistema</p>
        <div className="inputContainer">
          <HiUser className="inputIcon" />
          <input
            type="text"
            className="inputField"
            id="user"
            placeholder="Usuario"
          />
        </div>

        <div className="inputContainer">
          <HiLockClosed className="inputIcon" />
          <input
            type="password"
            className="inputField"
            id="password"
            placeholder="Contraseña"
          />
        </div>

        <button id="button">Ingresar</button>
        <a className="forgotLink" href="#">
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
