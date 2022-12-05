import React from "react";
import Modal from "react-bootstrap/Modal";

function ModalEliminar({ show, handleClose, eliminarEdificio, titulo }) {
  return (
    <div>
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
            {titulo}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          Esta acción no se puede deshacer
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <button
            onClick={() => eliminarEdificio}
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Eliminar
          </button>
          <button
            onClick={handleClose}
            type="button"
            className="btn"
            data-bs-dismiss="modal"
          >
            {" "}
            Cancelar
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalEliminar;
