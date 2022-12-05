import React, {useContext, useState } from "react";
import NormalButton from '../Utils/NormalButton';
import Modal from "react-bootstrap/Modal";


const ReclamoCard = (props) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div
      className="card m-4"
      style={{ maxWidth: "18rem", border: "solid 2px #519657" }}
    >
      <div
        className="card-header"
        style={{ borderBottom: "solid 1px #519657" }}
      >
        Nro de Reclamo: {props.id}
      </div>
      <div className="card-body">
        <p className="card-text">{props.edificio}</p>
      </div>
      {props.identificador && (
        <div className="card-body">
          <p className="card-text">{props.identificador}</p>
        </div>
      )}
      <div className="card-body">
        <p className="card-text">{props.ubicacion}</p>
      </div>
      <div className="card-body">
        <p className="card-text">{props.descripcion}</p>
      </div>
      <div className="card-body">
        <p className="card-text">{props.estado}</p>
      </div>
      
      <button type="button"
              class="btn btn-outline-light btn-sm m-2" 
              style={{
                color: "var(--bs-dropdown-link-color)",
                border: "solid 1px #519657",
              }} onClick={handleShow}>Ver imagenes
      </button>
      
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
              Imagenes del reclamo
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{display: "inline-grid", justifyItems: "center"}}>

            <img style={{ paddingBottom: "10px", width: "300px"}} src="https://res.cloudinary.com/dbxxr6sg6/image/upload/v1670212081/grxasfeavbo1kwx1vzf1.jpg" ></img>
            
          </Modal.Body>
          
        </Modal>


    </div>
  );
};

export default ReclamoCard;
