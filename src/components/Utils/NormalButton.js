import React from "react";

function NormalButton({onClickFuncion, accion, children }) {
    return (
      <div
        className="w-100"
        style={{ color: "var(--bs-dropdown-link-color)", textAlign: "center" }}
      >
        <button
          type="button"
          class="btn btn-outline-light btn-sm m-2 w-50" //Chequear el admin deberia tener w-50
          style={{
            color: "var(--bs-dropdown-link-color)",
            border: "solid 1px #519657",
          }}
          onClick={onClickFuncion}
        >
          {children && children}
          {!children && accion}
        </button>
      </div>
    );

}

export default NormalButton;
