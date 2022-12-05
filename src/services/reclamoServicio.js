import axios from "axios";

const getReclamosPorDocumento = async (documento) => {
  let response;
  const request = await axios
    .get(`http://localhost:8080/api/reclamo/persona/${documento}`)
    .then((res) => (response = res.data))
    .catch((err) => response);
  return response;
};

const getReclamosComunesPorEdificio = async (codigo) => {
  let response;
  const request = await axios
    .get(`http://localhost:8080/api/reclamo/edificio/${codigo}/comunes`)
    .then((res) => (response = res.data))
    .catch((err) => response);
  return response;
};

const getReclamosPorUnidad = async (codigo, piso, numero) => {
  let response;
  const request = await axios
    .get(
      `http://localhost:8080/api/reclamo/unidad?codigo=${codigo}&piso=${piso}&numero=${numero}`
    )
    .then((res) => (response = res.data))
    .catch((err) => response);

  return response;
};

const agregarReclamo = async (
  codigo,
  piso,
  numero,
  documento,
  ubicacion,
  descripcion
) => {
  const params = new URLSearchParams({
    codigo: codigo,
    piso: piso,
    numero: numero,
    documento: documento,
    ubicacion: ubicacion,
    descripcion: descripcion,
  }).toString();
  let response;
  const request = await axios
    .post("http://localhost:8080/api/reclamo/agregar?" + params)
    .then((res) => (response = res.data))
    .catch((err) => (response = -1));
  console.log(response);
  return response;
};

const agregarReclamoComun = async (
  codigo,
  documento,
  ubicacion,
  descripcion
) => {
  const params = new URLSearchParams({
    codigo: codigo,
    documento: documento,
    ubicacion: ubicacion,
    descripcion: descripcion,
  }).toString();
  let response;
  const request = await axios
    .post("http://localhost:8080/api/reclamo/agregar?" + params)
    .then((res) => (response = res.data))
    .catch((err) => (response = -1));
  console.log(request);
  return response;
};

const agregarImagenReclamo = async (id, path, tipo) => {
  const params = new URLSearchParams({
    path: path,
    tipo: tipo,
  }).toString();
  let response;
  const request = await axios
    .put(`http://localhost:8080/api/reclamo/${id}/imagen?` + params)
    .then((res) => (response = res.data))
    .catch((err) => response);
  return response;
};

const reclamoServicio = {
  getReclamosPorDocumento,
  getReclamosPorUnidad,
  agregarReclamo,
  getReclamosComunesPorEdificio,
  agregarReclamoComun,
  agregarImagenReclamo,
};

export default reclamoServicio;
