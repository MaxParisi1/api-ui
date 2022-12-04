import React, { useState } from "react";
import servicioEdificio from "../../services/edificio/edificioServicio";

function CrearEdificio() {
  const [edificio, setEdificio] = useState({
    nombre: "",
    direccion: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEdificio((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  function guardarEdificio() {
    servicioEdificio.createEdificio(edificio)
    .then((response) => {console.log(`Edificio creado con id ${response}`);});
  }

  return (
    <div className="p-2">
      <form
        className="p-5 container mt-5"
        style={{ maxWidth: "760px", border: "solid 2px #DEB887" }}
      >
        <h1 className="text-lg-start text-bold">Creando nuevo edificio</h1>

        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Direccion
          </label>
          <input
            type="text"
            className="form-control"
            name="direccion"
            onChange={handleChange}
          />
        </div>

        <button
          type="button"
          className="btn fw-semibold mt-5"
          style={{ borderColor: "#DEB887", color: "#DEB887" }}
          onClick={guardarEdificio}
        >
          Guardar
        </button>
      </form>
    </div>
  );
}

export default CrearEdificio;