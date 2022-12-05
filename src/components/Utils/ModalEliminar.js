import React from "react";
import Modal from "react-bootstrap/Modal";

function ModalEliminar({show,handleClose,eliminarEdificio,titulo}) {
  return (
    <div>
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
            {titulo}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body class="modal-body">
          Esta acción no se puede deshacer
        </Modal.Body>
        <Modal.Footer class="modal-footer">
          <button
            onClick={() => eliminarEdificio}
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
    </div>
  );
}

export default ModalEliminar;
