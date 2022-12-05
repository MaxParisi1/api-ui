import React from "react";
import NormalButton from "./NormalButton";

function Card(props) {
  return (
    <div
      className="card mb-3 m-4"
      style={{ maxWidth: "18rem", border: "solid 2px #519657" }}
      id={props.id}
      key={props.index}
    >
      <div
        className="card-header"
        style={{ borderBottom: "solid 1px #519657" }}
      >
        {props.nombre}
      </div>
      <div className="card-body">
        <p className="card-text">{props.cuerpo}</p>
      </div>
      <NormalButton onClickFuncion={props.onClick} accion={props.accion} />
      {props.accion2 && (
        <NormalButton
          onClickFuncion={props.reclamoComun}
          accion={props.accion2}
        />
      )}
    </div>
  );
}

export default Card;
