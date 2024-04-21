import styled from "styled-components";
import "../../output.css";
import logo from "../../assets/img/CNE_logo.svg";
import "../../css/login.css";
import {
  HiKey,
  HiOutlineKey,
  HiQuestionMarkCircle,
  HiUser,
} from "react-icons/hi";
import { MdFactCheck } from "react-icons/md";

export function ResUser() {
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
            disabled
          />
        </div>
        <div className="inputContainer">
          <HiQuestionMarkCircle className="inputIcon" />
          <input
            type="text"
            className="inputField"
            id="quest"
            name="quest"
            placeholder="Pregunta de Seguridad"
            disabled
          />
        </div>
        <div className="inputContainer">
          <MdFactCheck className="inputIcon" />
          <input
            type="text"
            className="inputField"
            id="Respuesta"
            name="Respuesta"
            placeholder="Ingrese la Respuesta"
          />
        </div>
        <div className="inputContainer">
          <HiKey className="inputIcon" />
          <input
            type="text"
            className="inputField"
            id="password"
            name="password"
            placeholder="Contraseña Nueva"
          />
        </div>
        <div className="inputContainer">
          <HiOutlineKey className="inputIcon" />
          <input
            type="text"
            className="inputField"
            id="secondPass"
            name="SecondPass"
            placeholder="Repita la Contraseña"
          />
        </div>

        <button id="button">Recuperar Contraseña</button>
        <a className="forgotLink" href="/forgot">
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
