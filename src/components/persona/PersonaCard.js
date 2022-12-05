import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import ModalEliminar from "../Utils/ModalEliminar";
import NormalButton from "../Utils/NormalButton";
import ModalEditarPersona from "./ModalEditarPersona";

function PersonaCard({ persona, eliminarPersona, modificarPersona }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showEditar, setShowEditar] = useState(false);
  const handleCloseEditar = () => setShowEditar(false);
  const handleShowEditar = () => setShowEditar(true);

  return (
    <>
      <div
        key={persona.documento}
        className="card mb-3 m-4"
        style={{ maxWidth: "18rem", border: "solid 2px #519657" }}
      >
        <div
          className="card-header"
          style={{ borderBottom: "solid 1px #519657" }}
        >{`Documento : ${persona.documento}`}</div>
        <div className="card-body">
          <p className="card-text">{`Nombre : ${persona.nombre}`}</p>
        </div>

        {/* MODIFICAR PERSONA */}
        <NormalButton onClickFuncion={handleShowEditar} accion="Editar" />

        {/* ELIMINAR PERSONA */}
        <NormalButton onClickFuncion={handleShow} accion="Eliminar" />
      </div>

      {/* MODAL ELIMINAR PERSONA */}
      <Modal
        show={show}
        onHide={handleClose}
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <Modal.Header closeButton className="modal-header">
          <Modal.Title className="modal-title fs-5" id="exampleModalLabel">
            Seguro que desea eliminar esta Persona?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          Esta acción no se puede deshacer
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <button
            onClick={() => eliminarPersona(persona.documento)}
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Eliminar
          </button>
          <button
            onClick={handleClose}
            type="button"
            className="btn btn-primary"
            data-bs-dismiss="modal"
          >
            {" "}
            Cancelar
          </button>
        </Modal.Footer>
      </Modal>

      {/* MODIFICAR PERSONA */}
      <ModalEditarPersona
        show={showEditar}
        onHide={handleCloseEditar}
        persona={persona}
        modificarPersona={modificarPersona}
      ></ModalEditarPersona>
    </>
  );
}

/*¿Porque mierda no renderiza?

      <NormalButton onClickFuncion={handleShow} accion="Eliminar" />

      <ModalEliminar
        show={show}
        handleClose={handleClose}
        eliminarEdificio={false}
        titulo="Seguro que desea eliminar esta Persona"
      />

*/

export default PersonaCard;
