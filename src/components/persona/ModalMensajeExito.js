import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function ModalMensajeExito({ show,onHide }) {
  return (
    <div>
      <Modal
        show={show}
        onHide={onHide}
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <Modal.Header closeButton className="modal-header">
          <Modal.Title className="modal-title fs-5" id="exampleModalLabel">
            Operacion exitosa!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          Persona creada exitosamente!
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <Button
            variant="primary"
            onClick={onHide}
          >
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalMensajeExito;
