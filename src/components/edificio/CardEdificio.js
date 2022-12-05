import React, { useState } from "react";
import LinkButton from "../Utils/LinkButton";
import Modal from "react-bootstrap/Modal";
import NormalButton from "../Utils/NormalButton";
import ModalEditarEdificio from "./ModalEditarEdificio";

function CardEdificio({ codigo, nombre, direccion, eliminarEdificio,modificarEdificio }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showEditar, setShowEditar] = useState(false);
  const handleCloseEditar = () => setShowEditar(false);
  const handleShowEditar = () => setShowEditar(true);

  return (
    <div
      key={codigo}
      class="card mb-3 m-4"
      style={{ maxWidth: "18rem", border: "solid 2px #519657" }}
    >
      <div class="card-header" style={{ borderBottom: "solid 1px #519657" }}>
        {" "}
        {nombre}
      </div>
      <div class="card-body">
        <p class="card-text">{`Direccion : ${direccion}`}</p>
      </div>

      <LinkButton path={`/edificio/${codigo}/unidad`} action="Unidades" />
      <NormalButton onClickFuncion={handleShowEditar} accion="Editar" />

      <NormalButton onClickFuncion={handleShow} accion="Eliminar" />

      {/* Modal */}
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
            Seguro que desea eliminar el edificio?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body class="modal-body">
          Esta acción no se puede deshacer
        </Modal.Body>
        <Modal.Footer class="modal-footer">
          <button
            onClick={() => eliminarEdificio(codigo)}
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

      <ModalEditarEdificio
        show={showEditar}
        onHide={handleCloseEditar}
        codigo={codigo}
        nombre={nombre}
        direccion={direccion}
        modificarEdificio={modificarEdificio}
      />

      {/* onClick={() => eliminarEdificio(codigo)}  */}
    </div>
  );
}

export default CardEdificio;
