import axios from "axios";

const baseUrl = "http://localhost:8080/api/unidad";

const getInquilinos = (codigo, piso, numero) => {
  const request = axios.get(`${baseUrl}/inquilinos`, {
    params: { codigo: codigo, piso: piso, numero: numero },
  });
  return request.then((response) => response.data);
};

const getUnidad = (codigo, piso, numero) => {
  const request = axios.get(
    `${baseUrl}/unidad?codigo=${codigo}&piso=${piso}&numero=${numero}`
  );
  return request.then((response) => response.data);
};

const getDuenios = (codigo, piso, numero) => {
  const request = axios.get(`${baseUrl}/duenios`, {
    params: { codigo: codigo, piso: piso, numero: numero },
  });
  return request.then((response) => response.data);
};

const createUnidad = (newObject) => {
  const request = axios.post(`${baseUrl}/crear`, newObject);
  return request.then((response) => response.data);
};

const updateUnidad = (identificador, newObject) => {
  const request = axios.put(`${baseUrl}/${identificador}`, newObject);
  return request.then((response) => response.data);
};

const deleteUnidad = (identificador) => {
  const request = axios.delete(`${baseUrl}/${identificador}`);
  return request.then((response) => response);
};

const liberarUnidad = (codigo, piso, numero) => {
  codigo = parseInt(codigo);
  const request = axios.put(
    `${baseUrl}/liberar?codigo=${codigo}&piso=${piso}&numero=${numero}`
  );
  return request.then((response) => response.data);
};

const transferirUnidad = (codigo, piso, numero, documento) => {
  const request = axios.put(
    `${baseUrl}/transferir?codigo=${codigo}&piso=${piso}&numero=${numero}&documento=${documento}`
  );
  return request.then((response) => response.data);
};

const alquilarUnidad = (codigo, piso, numero, documento) => {
  const request = axios.put(
    `${baseUrl}/alquilar?codigo=${codigo}&piso=${piso}&numero=${numero}&documento=${documento}`
  );
  return request.then((response) => response.data);
};

const deleteDuenio = (documento, identificador) => {
  const request = axios.delete(
    `${baseUrl}/${identificador}/duenio/${documento}`
  );
  return request.then((response) => response);
};

const deleteInquilino = (documento, identificador) => {
  const request = axios.delete(
    `${baseUrl}/${identificador}/inquilino/${documento}`
  );
  return request.then((response) => response);
};

const agregarDuenioUnidad = (codigo, piso, numero, documento) => {
  const request = axios.put(
    `${baseUrl}/agregar/duenio?codigo=${codigo}&piso=${piso}&numero=${numero}&documento=${documento}`
  );
  return request.then((response) => response.data);
};

const agregarInquilinoUnidad = (codigo, piso, numero, documento) => {
  const request = axios.put(
    `${baseUrl}/agregar/inquilino?codigo=${codigo}&piso=${piso}&numero=${numero}&documento=${documento}`
  );
  return request.then((response) => response.data);
};

const unidadServicio = {
  getInquilinos,
  getUnidad,
  getDuenios,
  createUnidad,
  updateUnidad,
  deleteUnidad,
  liberarUnidad,
  transferirUnidad,
  alquilarUnidad,
  deleteDuenio,
  deleteInquilino,
  agregarDuenioUnidad,
  agregarInquilinoUnidad,
};

export default unidadServicio;
