import React, { Component, useContext, useState } from "react";
import AuthContext from "../../store/auth-context";
import Navigation from "../Navigation/Navigation";
import NavigationAdmin from "../Navigation/NavigationAdmin";
import Modal from 'react-bootstrap/Modal';

const MainHeader = () => {
  const ctx = useContext(AuthContext);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div
      className="container-lg p-3 bg-purple-30 fondo"
      style={{ backgroundColor: "#81c784" }}
    >
      <div className="row ">
        <div
          className="text-center align-self-center fw-bold ml-4 mb-4 "
          style={{ fontSize: "x-large" }}
        >
          <i className="bi bi-building"></i>
          Infinity
        </div>

        {ctx.isLoggedIn && (
          <div className=" text-center p-1">
            {/* {ctx.isAdmin && <NavigationAdmin />}
            {!ctx.isAdmin && <Navigation />} */}
            <button
              type="button"
              className="btn btn-outline-dark btn-sm mx-1"
              onClick={handleShow}
              
            >
              Cerrar sesion
            </button>
          </div>

        )} 
        
        {/* Modal para cerrar sesion */}
          <Modal show={show} onHide={handleClose} class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">  
            <Modal.Header closeButton class="modal-header">
                <Modal.Title class="modal-title fs-5" id="exampleModalLabel">Desea cerrar sesión?</Modal.Title>
            </Modal.Header>
            <Modal.Footer class="modal-footer">
                <button  onClick={ctx.onLogout} type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Cerrar sesión</button>
                <button onClick={handleClose} type="button" class="btn btn-secondary" data-bs-dismiss="modal" > Cancelar</button>
            </Modal.Footer>
          </Modal>
      </div>
    </div>
  );
};

export default MainHeader;
