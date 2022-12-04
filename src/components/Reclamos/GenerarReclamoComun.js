import React, { useContext } from "react";
import { Modal } from "antd";
import reclamoServicio from "../../services/reclamoServicio";
import AuthContext from "../../store/auth-context";

const GenerarReclamoComun = (props) => {
  const ctx = useContext(AuthContext);
  console.log(props);

  const handleEnviar = async (event) => {
    event.preventDefault();
    const numero = await reclamoServicio.agregarReclamoComun(
      props.edificios.codigo,
      ctx.documento,
      event.target.ubicacion.value,
      event.target.descripcion.value
    );
    info(numero);
  };

  const info = (numero) => {
    Modal.info({
      title: "Reclamo generado exitosamente!",
      content: (
        <div>
          <p>El codido del reclamo es: {numero}</p>
        </div>
      ),
      centered: true,
      onOk() {
        props.endCreate();
      },
    });
  };

  return (
    <div className="p-2">
      <form
        className="p-5 container mt-5"
        style={{ maxWidth: "760px", border: "solid 2px #519657" }}
        onSubmit={handleEnviar}
      >
        <h1 className="text-lg-start text-bold">Generá tu reclamo</h1>

        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Codigo Edificio
          </label>
          <select
            className="form-select"
            aria-label="Seleccionar dueño"
            readOnly="readOnly"
          >
            <option>{props.edificios.codigo}</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Ubicacion
          </label>
          <input type="text" className="form-control" name="ubicacion" />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Descripción del reclamo
          </label>
          <textarea
            className="form-control"
            placeholder="Describa detalladamente la situación"
            id="floatingTextarea"
            name="descripcion"
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">
            Imagen
          </label>
          <input className="form-control" type="file" id="formFile" />
        </div>

        {/* Button trigger modal */}
        <button
          type="submit"
          className="btn fw-semibold mt-5"
          style={{ borderColor: "#519657", color: "#519657" }}
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default GenerarReclamoComun;
