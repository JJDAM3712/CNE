import swal from "sweetalert";
import axios from "axios";
import { ServidorURL } from "../config/config";

// funcion de peticion axios
export const PeticionAxios = async (endpoint, metodo, datos = null, params = {}) => {
    let url = `${ServidorURL}/${endpoint}`

    // Añade parámetros a la URL si es necesario
    if (Object.keys(params).length) {
        const queryParams = new URLSearchParams(params).toString();
        url += `?${queryParams}`;
    }
    const config = {
        method: metodo,
        url: url,
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
    };
    // Solo añade 'data' a la configuración si 'datos' no es null
    if (datos) {
        config.data = datos;
    } 
    try {
        const response = await axios(config);
        return { data: response.data, status: response.status };
    } catch (error) {
      console.error("Error en la petición Axios:", error);
      return { data: error.response?.data, status: error.response?.status };
    }
}


// funcion de alertas
export const alert = (titulo, texto, icono, tiempo) => {
    swal({
      title: titulo,
      text: texto,
      icon: icono,
      timer: tiempo
    });
}