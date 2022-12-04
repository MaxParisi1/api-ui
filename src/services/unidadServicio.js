import axios from "axios";

const baseUrl = "http://localhost:8080/api/unidad";

const getUnidadInquilinos = (codigo, piso, numero) => {
  const request = axios.get(`${baseUrl}/inquilinos`, {
    params: { codigo: codigo, piso: piso, numero: numero },
  });
  return request.then((response) => response.data);
};

const getUnidadesPorDocumento = (documento) => {
  const request = axios.get(`${baseUrl}/unidad/${documento}`);
  return request.then((response) => response.data);
};

const unidadServicio = {
  getUnidadInquilinos,
  getUnidadesPorDocumento,
};

export default unidadServicio;
