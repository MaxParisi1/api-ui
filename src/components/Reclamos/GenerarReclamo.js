import React, { useContext } from "react";
import { Modal } from "antd";
import Axios from "axios";
import reclamoServicio from "../../services/reclamoServicio";
import AuthContext from "../../store/auth-context";
import { useState } from "react";
import ImagenReclamo from "./ImagenReclamo";

const GenerarReclamo = (props) => {
  const ctx = useContext(AuthContext);
  const [logo, setLogo] = useState("");

  const handleEnviar = async (event) => {
    event.preventDefault();
    const numero = await reclamoServicio.agregarReclamo(
      props.unidad.codigoEdificio,
      props.unidad.piso,
      props.unidad.numero,
      ctx.documento,
      event.target.ubicacion.value,
      event.target.descripcion.value
    );
    const imagen = await profileUpload(logo);
    reclamoServicio.agregarImagenReclamo(numero, imagen, "jpg");
    info(numero);
  };

  const profileUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "htdsqrik");
    let data = "";
    await Axios.post(
      "https://api.cloudinary.com/v1_1/dbxxr6sg6/image/upload",
      formData
    ).then((response) => {
      data = response.data["secure_url"];
    });
    return data;
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
            <option>{props.unidad.codigoEdificio}</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Piso
          </label>
          <input
            type="text"
            className="form-control"
            value={props.unidad.piso}
            readOnly="readOnly"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Departamento
          </label>
          <input
            type="text"
            className="form-control"
            value={props.unidad.numero}
            readOnly="readOnly"
          />
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

        <ImagenReclamo logoHandler={setLogo} />

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

export default GenerarReclamo;
