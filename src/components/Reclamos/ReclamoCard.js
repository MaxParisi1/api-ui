import React from "react";

const ReclamoCard = (props) => {
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
    </div>
  );
};

export default ReclamoCard;
