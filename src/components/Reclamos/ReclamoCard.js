import React from "react";

const ReclamoCard = (props) => {
  return (
    <div
      className="card  mb-3 m-4"
      style={{ maxWidth: "18rem", border: "solid 2px #DEB887" }}
    >
      <div
        className="card-header"
        style={{ borderBottom: "solid 1px #DEB887" }}
      >
        Nro de Reclamo: {props.id}
      </div>
      <div className="card-body">
        <p className="card-text">Edificio: {props.edificio}</p>
      </div>
      <div className="card-body">
        <p className="card-text">Piso: {props.identificador}</p>
      </div>
      <div className="card-body">
        <p className="card-text">Depto: {props.identificador}</p>
      </div>
      <div className="card-body">
        <p className="card-text">ubicacion: {props.ubicacion}</p>
      </div>
      <div className="card-body">
        <p className="card-text">Descripcion: {props.descripcion}</p>
      </div>
      <div className="card-body">
        <p className="card-text">Estado: {props.estado}</p>
      </div>
    </div>
  );
};

export default ReclamoCard;
