import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalLiberarUnidad({show, onHide, liberarUnidad, codigo, piso, numero}) {
  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>¿Seguro que desea Liberar esta Unidad?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Esta acción no se puede deshacer</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Cancelar
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              liberarUnidad(codigo,piso,numero);
              onHide();
            }}
          >
            Liberar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalLiberarUnidad;
