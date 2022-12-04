import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import React from "react";
import { Link } from "react-router-dom";

const NavigationAdmin = () => {
  return (
    <>
      <div className=" text-center p-1">
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

        {/* Edificios */}

        <Dropdown as={ButtonGroup}>
          <Dropdown.Toggle
            id="dropdown-custom-1"
            className="dropdown btn btn-outline-dark dropdown-toggle btn-sm mx-1"
            style={{ backgroundColor: "transparent" }}
          >
            Edificios
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link to="/crearEdificio" className="text-decoration-none">
                <a className="dropdown-item ">Añadir nuevo</a>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/listaEdificios" className="text-decoration-none">
                <a className="dropdown-item ">Ver todos</a>
              </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <button type="button" className="btn btn-outline-dark btn-sm mx-1">
          Cerrar sesion
        </button>
      </div>
    </>
  );
};

export default NavigationAdmin;
