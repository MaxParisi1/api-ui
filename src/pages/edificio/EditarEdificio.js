import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import servicioEdificio from "../../services/edificio/edificioServicio";

function EditarEdificio() {
  const { codigo } = useParams();
  const [edificio, setEdificio] = useState([]);

  useEffect(() => {
    servicioEdificio.getEdificio(codigo).then((response) => {
      setEdificio(response);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEdificio((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const editarEdificio = () => {
    servicioEdificio.updateEdificio(edificio.codigo, edificio);
  };

  return (
    <div className="p-2">
      <form
        className="p-5 container mt-5"
        style={{ maxWidth: "760px", border: "solid 2px #519657" }}
      >
        <h1 className="text-lg-start text-bold">{`Editando el edificio: ${edificio.codigo}`}</h1>

        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            placeholder={edificio.nombre}
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
            placeholder={edificio.direccion}
            onChange={handleChange}
          />
        </div>

        <button
          type="button"
          className="btn fw-semibold mt-5"
          style={{ borderColor: "#519657", color: "#519657" }}
          onClick={() => editarEdificio()}
        >
          Guardar cambios
        </button>
      </form>
    </div>
  );
}

export default EditarEdificio;
