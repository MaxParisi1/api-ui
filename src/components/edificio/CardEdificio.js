import React, { useState } from "react";
import LinkButton from "../Utils/LinkButton";
import Modal from 'react-bootstrap/Modal';

function CardEdificio({codigo,nombre,direccion, eliminarEdificio}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div
      key={codigo}
      class="card text-bg-secondary mb-3 m-4"
      style={{ maxWidth: "18rem" }}
    >
      <div class="card-header">{nombre}</div>
      <div class="card-body">
        <p class="card-text">{`Direccion : ${direccion}`}</p>
      </div>

      <LinkButton path={`/edificio/${codigo}/unidad`} action="Unidades"  />
      <LinkButton path={`/edificio/${codigo}`} action="Editar" estilo="50%" class="w-50"/>
      
      <button
        type="button"
        class="btn btn-outline-light btn-sm m-2 w-50 "
        style={{ color: "var(--bs-dropdown-link-color)", alignSelf: "center" }}
        onClick={handleShow}
      >
        Eliminar
      </button> 

      {/* Modal */}
      <Modal show={show} onHide={handleClose} class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">  
        <Modal.Header closeButton class="modal-header">
            <Modal.Title class="modal-title fs-5" id="exampleModalLabel">Seguro que desea eliminar el edificio?</Modal.Title>
        </Modal.Header>
        <Modal.Body class="modal-body">
            Esta acción no se puede deshacer
        </Modal.Body>
        <Modal.Footer class="modal-footer">
            <button onClick={() => eliminarEdificio(codigo)} type="button" class="btn btn-secondary" data-bs-dismiss="modal">Eliminar</button>
            <button onClick={handleClose} type="button" class="btn" data-bs-dismiss="modal" > Cancelar</button>
        </Modal.Footer>
      </Modal>

      
      {/* onClick={() => eliminarEdificio(codigo)}  */}
     
    </div>
  );
}

export default CardEdificio;
