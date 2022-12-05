import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function ModalEditarUnidad({ show, onHide, unidad, modificarUnidad }) {
  const [unidadAux, setUnidadAux] = useState([]);
  useEffect(() => {
    setUnidadAux(unidad);
  }, []);

  const handleChangeEditar = (e) => {
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
          <Modal.Title>Editar Unidad {unidad.identificador}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Piso</Form.Label>
              <Form.Control
                name="piso"
                placeholder={unidad.piso}
                onChange={handleChangeEditar}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Numero</Form.Label>
              <Form.Control
                nombre="numero"
                placeholder={unidad.numero}
                onChange={handleChangeEditar}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Habitado</Form.Label>
              <Form.Control
                nombre="habitado"
                placeholder={unidad.habitado}
                onChange={handleChangeEditar}
              />
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
              modificarUnidad(unidad.identificador, unidadAux);
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

export default ModalEditarUnidad;
