import axios from "axios";

const baseUrl = "http://localhost:8080/api/reclamo";

const getReclamoEstado = (estado) => {
  const request = axios.get(`${baseUrl}/estado?estado=${estado}`);
  return request.then((response) => response.data);
};

const getReclamoEstadoCompleto = (estado) => {
  const request = axios.get(`${baseUrl}/estadoCompleto?estado=${estado}`);
  return request.then((response) => response.data);
};

const cambiarEstado = (idReclamo, estado) => {
  const request = axios.put(
    `${baseUrl}/${idReclamo}/cambiarEstado?estado=${estado}`
  );
  return request.then((response) => response.data);
};

const reclamoServicio = {
  getReclamoEstado,
  cambiarEstado,
  getReclamoEstadoCompleto,
};

export default reclamoServicio;
