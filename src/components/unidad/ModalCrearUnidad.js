import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function ModalCrearUnidad({ show, onHide, crearUnidad, codigo }) {
  const [unidadAux, setUnidadAux] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUnidadAux((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Crear unidad</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Piso</Form.Label>
              <Form.Control
                name="piso"
                placeholder="Piso"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Numero</Form.Label>
              <Form.Control
                name="numero"
                placeholder="Numero"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Habitado</Form.Label>
              <Form.Control
                name="habitado"
                placeholder="Habitado"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Edificio</Form.Label>
              <Form.Control name="codigoEdificio" value={codigo} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Cancelar
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              crearUnidad(unidadAux);
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

export default ModalCrearUnidad;
