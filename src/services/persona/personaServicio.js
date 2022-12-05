import axios from "axios";

const baseUrl = "http://localhost:8080/api/administracion";

const updatePersona = (documento, newObject) => {
    const request = axios.put(`${baseUrl}/${documento}`, newObject);
    return request.then((response) => response.data);
  };
  
  const deletePersona = (documento) => {
    const request = axios.delete(`${baseUrl}/${documento}`);
    return request.then((response) => response);
  }



const personaServicio = {
    updatePersona: updatePersona,
    deletePersona: deletePersona,

  };
  
  export default personaServicio;