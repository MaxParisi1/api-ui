import React from "react";
import { Link } from "react-router-dom";

function LinkButton({ path, action, estilo, onClickFuncion }) {
  return (
    <div>
      <Link
        to={path}
        className="w-100"
        type="button"
        style={{ color: "var(--bs-dropdown-link-color)", textAlign: "center" }}
      >
        <button
          type="button"
          className="btn btn-outline-light btn-sm m-2 w-50"
          style={{
            color: "var(--bs-dropdown-link-color)",
            border: "solid 1px #519657",
          }}
          onClick={onClickFuncion}
        >
          {action}
        </button>
      </Link>
    </div>
  );
}

export default LinkButton;
