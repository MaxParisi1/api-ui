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
        class="card text-bg-secondary mb-3 m-4"
        style={{ maxWidth: "18rem" }}
      >
        <div class="card-header">{`Documento : ${persona.documento}`}</div>
        <div class="card-body">
          <p class="card-text">{`Nombre : ${persona.nombre}`}</p>
        </div>

        {/* MODIFICAR PERSONA */}
        <button
          type="button"
          class="btn btn-outline-light btn-sm m-2 w-50 "
          style={{
            color: "var(--bs-dropdown-link-color)",
            alignSelf: "center",
          }}
          onClick={handleShowEditar}
        >
          Editar
        </button>

        {/* ELIMINAR PERSONA */}
        <button
          type="button"
          class="btn btn-outline-light btn-sm m-2 w-50 "
          style={{
            color: "var(--bs-dropdown-link-color)",
            alignSelf: "center",
          }}
          onClick={handleShow}
        >
          Eliminar
        </button>
      </div>

      {/* MODAL ELIMINAR PERSONA */}
      <Modal
        show={show}
        onHide={handleClose}
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <Modal.Header closeButton class="modal-header">
          <Modal.Title class="modal-title fs-5" id="exampleModalLabel">
            Seguro que desea eliminar esta Persona?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body class="modal-body">
          Esta acción no se puede deshacer
        </Modal.Body>
        <Modal.Footer class="modal-footer">
          <button
            onClick={() => eliminarPersona(persona.documento)}
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Eliminar
          </button>
          <button
            onClick={handleClose}
            type="button"
            class="btn"
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
