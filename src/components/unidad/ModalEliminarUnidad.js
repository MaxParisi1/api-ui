import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalEliminarUnidad({ show, onHide, identificador, eliminarUnidad }) {
  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Seguro que desea eliminar esta Unidad?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Esta acción no se puede deshacer</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              eliminarUnidad(identificador);
              onHide();
            }}
          >
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalEliminarUnidad;
