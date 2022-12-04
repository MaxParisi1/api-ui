import axios from "axios";

const getReclamosPorDocumento = async (documento) => {
  let response;
  const request = await axios
    .get(`http://localhost:8080/api/reclamo/persona/${documento}`)
    .then((res) => (response = res.data))
    .catch((err) => console.log(err));
  return response;
};

const getReclamosPorUnidad = async (codigo, piso, numero) => {
  let response;
  const request = await axios
    .get(
      `http://localhost:8080/api/reclamo/unidad?codigo=${codigo}&piso=${piso}&numero=${numero}`
    )
    .then((res) => (response = res.data))
    .catch((err) => console.log(err));
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
  console.log(typeof codigo);
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
    .catch((err) => console.log(err));
  return response;
};

const reclamoServicio = {
  getReclamosPorDocumento,
  getReclamosPorUnidad,
  agregarReclamo,
};

export default reclamoServicio;
