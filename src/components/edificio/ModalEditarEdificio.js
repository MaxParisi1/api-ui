import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function ModalEditarEdificio({
  show,
  onHide,
  codigo,
  nombre,
  direccion,
  modificarEdificio,
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
          <Modal.Title>Editar Edificio {codigo}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                name="nombre"
                placeholder={nombre}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Direccion</Form.Label>
              <Form.Control
                name="direccion"
                placeholder={direccion}
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
              modificarEdificio(codigo, datos);
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

export default ModalEditarEdificio;
