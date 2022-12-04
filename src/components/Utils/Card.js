import React from "react";
import NormalButton from "./NormalButton";

function Card(props) {
  return (
    <div
      class="card text-bg-secondary mb-3 m-4"
      style={{ maxWidth: "18rem" }}
      id={props.id}
    >
      <div class="card-header">{props.nombre}</div>
      <div class="card-body">
        <p class="card-text">{props.cuerpo}</p>
      </div>
      <NormalButton onClickFuncion={props.onClick} accion={props.accion} />
    </div>
  );
}

export default Card;
