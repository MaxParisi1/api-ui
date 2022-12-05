import React, { useState } from "react";
import LinkButton from "../Utils/LinkButton";
import NormalButton from "../Utils/NormalButton";
import ModalEditarUnidad from "./ModalEditarUnidad";
import ModalEliminarUnidad from "./ModalEliminarUnidad";

function CardUnidad({ unidad, modificarUnidad, eliminarUnidad }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showEliminar, setShowEliminar] = useState(false);
  const handleCloseEliminar = () => setShowEliminar(false);
  const handleShowEliminar = () => setShowEliminar(true);

  return (
    <>
      <div
        key={unidad.identificador}
        className="card mb-3 m-4"
        style={{ maxWidth: "18rem", border: "solid 2px #519657" }}
      >
        <div
          className="card-header"
          style={{ borderBottom: "solid 1px #519657" }}
        >
          {" "}
          {`Identificador : ${unidad.identificador}`}
        </div>
        <div className="card-body">
          <p className="card-text">{`Piso : ${unidad.piso}`}</p>
          <p className="card-text">{`Numero : ${unidad.numero}`}</p>
          <p className="card-text">{`Habitado : ${unidad.habitado}`}</p>
        </div>

        <NormalButton onClickFuncion={handleShow} accion="Editar" />
        <NormalButton onClickFuncion={handleShowEliminar} accion="Eliminar" />

        <LinkButton
          path={`persona/${unidad.identificador}/${unidad.codigoEdificio}/${unidad.piso}/${unidad.numero}`}
          action="Ver detalle"
        />
      </div>

      <ModalEditarUnidad
        show={show}
        onHide={handleClose}
        unidad={unidad}
        modificarUnidad={modificarUnidad}
      ></ModalEditarUnidad>

      <ModalEliminarUnidad
        show={showEliminar}
        onHide={handleCloseEliminar}
        identificador={unidad.identificador}
        eliminarUnidad={eliminarUnidad}
      ></ModalEliminarUnidad>
    </>
  );
}

export default CardUnidad;
