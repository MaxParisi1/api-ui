import React from "react";
import NormalButton from "./NormalButton";

function Card(props) {
  return (
    <div
      class="card mb-3 m-4"
      style={{ maxWidth: "18rem", border: "solid 2px #519657" }}
      id={props.id}
    >
      <div class="card-header" style={{ borderBottom: "solid 1px #519657" }}>
        {props.nombre}
      </div>
      <div class="card-body">
        <p class="card-text">{props.cuerpo}</p>
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
