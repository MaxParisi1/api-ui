import React from "react";
function NormalButton({ onClickFuncion, accion }) {
  return (
    <div className="w-100" style={{ color: "var(--bs-dropdown-link-color)", textAlign: "center" }}>
      <button
      type="button"
      class="btn btn-outline-light btn-sm m-2" //Chequear el admin deberia tener w-50
          style={{ color: "var(--bs-dropdown-link-color)", border: 'solid 1px #519657' }}
      onClick={onClickFuncion}
      >
      {accion}
      </button>
    </div>
    
  );
}
export default NormalButton;
