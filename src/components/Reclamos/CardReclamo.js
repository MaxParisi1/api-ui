import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function CardReclamo({
  id,
  documento,
  codigoEdificio,
  identificador,
  ubicacion,
  descripcion,
  estado,
  cambiarEstado
}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleValue = () => {
    var optionSelect = document.getElementById("FormSelect");
    var text = optionSelect.options[optionSelect.selectedIndex].text;
    cambiarEstado(id,text);
  };

  return (
    <div
    className="card m-4"
      style={{ maxWidth: "18rem", border: "solid 2px #519657" }}
    >
      <div
        className="card-header"
        style={{ borderBottom: "solid 1px #519657" }}
      >
        Nro de Reclamo: {id}
      </div>
      <div className="card-body">
        <p className="card-text">Realizado por: {documento}</p>
      </div>
      <div className="card-body">
        <p className="card-text">Edificio: {codigoEdificio}</p>
      </div>
      <div className="card-body">
        <p className="card-text">Unidad: {identificador}</p>
      </div>
      <div className="card-body">
        <p className="card-text">Ubicacion: {ubicacion}</p>
      </div>
      <div className="card-body">
        <p className="card-text">
          Descripcion: {descripcion == null ? "-" : descripcion}
        </p>
      </div>
      <div className="card-body">
        <p className="card-text">Estado: {estado}</p>
      </div>

      {/* No lo hago en LinkButtonGrey porque no funcionan los modales */}
      <div className="w-100" style={{ textAlign: "center" }}>
        <Link
          className="w-50 "
          type="button"
          style={{ color: "var(--bs-dropdown-link-color)" }}
        >
          <button
            type="button"
            class="btn btn-outline-secondary btn-sm m-2 w-100"
            style={{ color: "var(--bs-dropdown-link-color)" }}
            onClick={handleShow}
          >
            Cambiar Estado
          </button>
        </Link>
      </div>

      {/* Modal */}
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
            Por cuál estado desea cambiarlo?
          </Modal.Title>
        </Modal.Header>
        {/* <Modal.Body class="modal-body">
                    Esta acción no se puede deshacer
                </Modal.Body> */}
        <Modal.Footer class="modal-footer">
          <Form.Select id="FormSelect" aria-label="Default select example">
            <option>Estados</option>{" "}
            {/* No deberia dejar que el usuario lo use */}
            <option value="1">abierto</option>
            <option value="2">enProceso</option>
            <option value="3">desestimado</option>
            <option value="4">anulado</option>
            <option value="5">terminado</option>
          </Form.Select>
          <button
            onClick={() => {
              handleValue();
              handleClose();
            }}
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            {" "}
            Guardar
          </button>
          <button
            onClick={handleClose}
            type="button"
            class="btn"
            data-bs-dismiss="modal"
            style={{ backgroundColor: "#DEB887" }}
          >
            {" "}
            Cancelar
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CardReclamo;
