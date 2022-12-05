import axios from "axios";

const baseUrl = "http://localhost:8080/api/edificio";

const getAllDuenios = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const getDuenio = (id) => {
  const request = axios.get(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

const createDuenio = (newObject) => {
  const request = axios.post(baseUrl, newObject)
  return request.then((response) => response.data);
};

const updateDuenio = (codigo, newObject) => {
  const request = axios.put(`${baseUrl}/${codigo}`, newObject);
  return request.then((response) => response.data);
};

const deleteDuenio = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response);
}

const servicioEdificio = {
  getAllEdificios: getAllDuenios,
  createEdificio: createDuenio,
  updateEdificio: updateDuenio,
  getEdificio: getDuenio,
  deleteEdificio: deleteDuenio,
};

export default servicioEdificio;