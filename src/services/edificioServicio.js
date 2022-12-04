import axios from "axios";

const baseUrl = "http://localhost:8080/api/edificio";

const getAllEdificios = () => {
  const request = axios.get(baseUrl, { mode: "no-cors" });
  return request.then((response) => response.data);
};

const getEdificio = (id) => {
  const request = axios.get(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

const getEdificiosPorIds = (ids) => {
  let params = "";
  ids.forEach((id) => {
    params = params + `codigos=${id}&`;
  });
  const request = axios.get(`${baseUrl}/codigos?${params}`);
  return request.then((response) => response.data);
};

const getEdificioUnidades = (id) => {
  const request = axios.get(`${baseUrl}/${id}/unidades`);
  return request.then((response) => response.data);
};

const createEdificio = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

const updateEdificio = (codigo, newObject) => {
  const request = axios.put(`${baseUrl}/${codigo}`, newObject, {
    mode: "no-cors",
  });
  return request.then((response) => response.data);
};

const deleteEdificio = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response);
};

const servicioEdificio = {
  getAllEdificios,
  createEdificio,
  updateEdificio,
  getEdificio,
  deleteEdificio,
  getEdificioUnidades,
  getEdificiosPorIds,
};

export default servicioEdificio;
