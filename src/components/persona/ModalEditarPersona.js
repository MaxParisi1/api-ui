import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function ModalEditarPersona({ show, onHide, persona, modificarPersona }) {
  const [personaAux, setPersonaAux] = useState([]);
  useEffect(() => {
    setPersonaAux(persona);
  }, []);

  const handleChangeEditar = (e) => {
    const { name, value } = e.target;
    setPersonaAux((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Editar persona {persona.documento}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                name="nombre"
                placeholder={persona.nombre}
                onChange={handleChangeEditar}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                nombre="contraseña"
                placeholder="Contraseña"
                onChange={handleChangeEditar}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Admin</Form.Label>
              <Form.Control
                nombre="admin"
                placeholder="Admin"
                onChange={handleChangeEditar}
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
              modificarPersona(persona.documento, personaAux);
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

export default ModalEditarPersona;
