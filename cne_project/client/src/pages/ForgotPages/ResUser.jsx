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
import React, { useState, useEffect } from 'react';
import axios from "axios"
import { useAuth } from "../../auth/AuthProvided";
import { useNavigate } from "react-router-dom";
import { ServidorURL } from "../../config/config"
import { alert } from "../../utils/generic"

export function ResUser() {
  const [datos, setDatos] = useState({
    usuario: "", quest: "", resp: "", pass: ""
  });
  const [secondPass, setSecondPass] = useState("");
  // resultado de quest
  const [questResult, setQuestResult] = useState('');

  const handleChange = (e) => {
    let names = e.target.name;
    let value = e.target.value;
    if (names === "secondPass") {
      setSecondPass(value);
    } else {
      setDatos({ ...datos, [names]: value });
    }
  };

  const { authState, logout } = useAuth();
  const { userId } = authState;
  const navigate = useNavigate();

  // mostrar los datos del usuario 
  useEffect(() => {
    const UserData = async () => {
      try {
        const DatosUsuario = await axios.get(`${ServidorURL}/signup/${userId}`);
        setDatos({
          usuario: DatosUsuario.data[0].usuario,
          quest: DatosUsuario.data[0].quest,
        });
        let resultado;
        switch (DatosUsuario.data[0].quest) {
          case 1:
            resultado = '¿Color Favorito?';
            break;
          case 2:
            resultado = '¿Nombre de mi Perro?';
            break;
          case 3:
             resultado = '¿Nombre de mi Madre?';
             break;
          case 4:
            resultado = '¿Lugar de Nacimiento?';
            break;
          case 5:
            resultado = '¿Primer auto?';
            break;       
        };
        setQuestResult(resultado)
      } catch (error) {
        console.error(error);
      }
    }
    UserData();
  }, []);

  // cambiar la contraseña
  const handleSend = async (e) => {
    e.preventDefault();
    console.log(datos, secondPass);
    // valida que los campos no esten vacios
    if (
      (!datos.resp || datos.resp.trim() === "") ||
      (!datos.pass || datos.pass.trim() === "") ||
      (!secondPass || secondPass.trim() === "")
    ) {
      alert("Campo vacio","Debes ingresar todos los datos","warning","2000")
      // valida que ambas contraseñas sean iguales
    } else if (datos.pass !== secondPass) {
      alert("Contraseñas no coinciden","Las contraseñas ingresadas no son iguales","error","2000")
    } else {
      try {
        const res = await axios.put(`${ServidorURL}/loginRecor/${userId}`, datos,{
            headers: { "Content-Type": "application/json" },
          });
          alert("Cambio exitoso", "Se ha recuperado la contraseña exitosamente", "success", "2000")
          handleVolverClick()
      } catch (error) {
        if (error.response && error.response.status === 400) {
          alert("Respuesta erronea",`La respuesta a la pregunta es incorrecta`,"error","2000")
        } else {
          alert("Oops...",`Ha ocurrido un error! ${error}`,"error","2000")
        }
        return console.log(error);
      }
    }
  }
  const handleVolverClick = () => {
    logout();
    navigate('/');
  };

  return (
    <Container>
      <form onSubmit={handleSend} className="form_main">
        <div className="flex ">
          <img src={logo} alt="Logo CNE" className="w-24" />
        </div>
        <p className="heading">Recuperar Contraseña</p>
        {/* nombre de usuario */}
        <div className="inputContainer">
          <HiUser className="inputIcon" />
          <input
            type="text"
            className="inputField"
            id="usuario"
            name="usuario"
            placeholder="Usuario"
            value={datos.usuario}
            disabled
          />
        </div>
        {/* pregunta de seguridad */}
        <div className="inputContainer">
          <HiQuestionMarkCircle className="inputIcon" />
          <input
            type="text"
            className="inputField"
            id="quest"
            name="quest"
            value={questResult}
            placeholder="Pregunta de Seguridad"
            disabled
          />
        </div>
        {/* respuesta de seguridad */}
        <div className="inputContainer">
          <MdFactCheck className="inputIcon" />
          <input
            type="text"
            className="inputField"
            id="resp"
            name="resp"
            value={datos.resp}
            placeholder="Ingrese la Respuesta"
            onChange={handleChange}
          />
        </div>
        {/* contraseña */}
        <div className="inputContainer">
          <HiKey className="inputIcon" />
          <input
            type="password"
            className="inputField"
            id="pass"
            name="pass"
            value={datos.pass}
            placeholder="Contraseña Nueva"
            onChange={handleChange}
          />
        </div>
        {/* confirmar contraseña */}
        <div className="inputContainer">
          <HiOutlineKey className="inputIcon" />
          <input
            type="password"
            className="inputField"
            id="secondPass"
            name="secondPass"
            placeholder="Repita la Contraseña"
            value={secondPass}
            onChange={handleChange}
          />
        </div>

        <button id="button">Recuperar Contraseña</button>
        <a className="forgotLink cursor-pointer" onClick={handleVolverClick}>
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
