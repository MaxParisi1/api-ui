import React, {  useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function ModalTransferirUnidad({
  show,
  onHide,
  transferirUnidad,
  codigo,
  piso,
  numero,
}) {
  const [datos, setDatos] = useState([]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatos((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Transferir Unidad</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Codigo</Form.Label>
              <Form.Control name="codigo" value={codigo} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Piso</Form.Label>
              <Form.Control name="piso" value={piso} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Numero</Form.Label>
              <Form.Control name="numero" value={numero} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Documento</Form.Label>
              <Form.Control
                name="documento"
                placeholder="documento"
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              console.log(datos.documento)
              transferirUnidad(codigo, piso, numero,datos.documento);
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

export default ModalTransferirUnidad;