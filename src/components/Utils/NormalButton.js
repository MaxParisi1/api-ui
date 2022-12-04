import React from "react";
function NormalButton({ onClickFuncion, accion }) {
  return (
    <button
      type="button"
      class="btn btn-outline-light btn-sm m-2 w-50 "
      style={{ color: "var(--bs-dropdown-link-color)", alignSelf: "center" }}
      onClick={onClickFuncion}
    >
      {accion}
    </button>
  );
}
export default NormalButton;
