import { HiOutlineRefresh } from "react-icons/hi";
import styled from "styled-components";
import logo from "../assets/img/CNE_logo.svg";
import "../css/login.css";
import "../css/respaldo.css";
import { MdCloudDownload } from "react-icons/md";
import axios from "axios";
import swal from "sweetalert";
import { useState } from "react";

export function Respaldo() {
  // realizar respaldo de datos
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

  // Restaurar respaldo de datos
  const [archivoSQL, setArchivoSQL] = useState(null);

  const [nombreArchivo, setNombreArchivo] = useState('');

  const handleSeleccionArchivo = (event) => {
    const archivoSeleccionado = event.target.files[0];
    if (archivoSeleccionado) {
      if (archivoSeleccionado.name.endsWith('.sql')) {
        setArchivoSQL(archivoSeleccionado);
        setNombreArchivo(archivoSeleccionado.name);
      } else {
        swal({
          title: "Archivo incorrecto!",
          text: "Por favor seleccione un archivo valido!",
          icon: "error",
          timer: "2500",
        });
      }
    }
  };
  const handleEnviarArchivo = async () => {
    if (archivoSQL) {
      const formData = new FormData();
      formData.append('file', archivoSQL);

      try {
        const response = await axios.post('http://localhost:4000/back', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        swal({
          title: "Datos restaurados",
          text: "Los datos se han restablecido exitosamente",
          icon: "success",
          timer: "2500",
        });
      } catch (error) {
        console.error('Error al enviar el archivo:', error);
        swal({
          title: "Error!",
          text: "Ocurrio un error durante la restauracion!",
          icon: "error",
          timer: "2500",
        });
      } finally {
        setNombreArchivo('');
      }
    } else {
      swal({
        title: "Sin archivo!",
        text: "Por favor seleccione un archivo!",
        icon: "warning",
        timer: "2500",
      });
    }
  };
  
  return (
    <Container>
      <div className="respaldo_content">
        <div className="flex ">
          <img src={logo} alt="Logo CNE" className="w-24" />
        </div>
        <p className="heading">Respaldo de Datos</p>
        <button className="boton_saved" onClick={handleRespaldarDatos}>
          <MdCloudDownload className="inputIcon" />
          Respaldar Datos
        </button>

        {/* Botón para seleccionar archivos */}
        <div  className="content-respaldo">
          <label htmlFor="fileInput" className="boton_input custom-file-upload">
            <HiOutlineRefresh  />
            <span>{nombreArchivo || 'Seleccione un archivo'}</span>
          </label>
          <input
            type="file"
            id="fileInput"
            accept=".sql"
            style={{ display: 'none' }}
            onChange={handleSeleccionArchivo}
          />
        </div>

        <button onClick={handleEnviarArchivo} className="Enviar_Archivo">
          Restaurar Datos
        </button>

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
