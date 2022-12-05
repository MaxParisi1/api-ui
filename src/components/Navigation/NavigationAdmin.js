import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import React from "react";
import { Link } from "react-router-dom";

const NavigationAdmin = () => {
  return (
    <>
      <div className=" text-center p-1" style={{ display: "contents" }}>
        <button type="button" className="btn btn-outline-dark btn-sm mx-1">
          <Link to="/" className="text-decoration-none">
            <a
              className="text-decoration-none text-dark"
              href="../../index.html"
              style={{ color: "var(--bs-dropdown-link-color)" }}
            >
              Home
            </a>
          </Link>
        </button>

        {/* Reclamos */}

        <Link to="/ReclamosAdmin" className="text-decoration-none">
          <button
            type="button"
            className="dropdown btn btn-outline-dark btn-sm mx-1"
            style={{ backgroundColor: "transparent" }}
          >
            Reclamos
          </button>
        </Link>

        <Link to="/listaEdificios" className="text-decoration-none">
          <button
            type="button"
            className="dropdown btn btn-outline-dark btn-sm mx-1"
            style={{ backgroundColor: "transparent" }}
          >
            Edificios{" "}
          </button>
        </Link>
      </div>
    </>
  );
};

export default NavigationAdmin;
