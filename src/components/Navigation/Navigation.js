import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const Navigation = () => {
  return (
    <>
      <button type="button" className="btn btn-outline-dark btn-sm mx-1">
        <Link
          to="/"
          className="text-decoration-none"
          style={{ color: "var(--bs-dropdown-link-color)" }}
        >
          Home
        </Link>
      </button>

      <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle
          id="dropdown-custom-1"
          className="dropdown btn btn-outline-dark dropdown-toggle btn-sm mx-1"
          style={{ backgroundColor: "transparent" }}
        >
          Reclamos
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>
            <Link to="/reclamo" className="text-decoration-none">
              <a className="dropdown-item ">Generar nuevo reclamo</a>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/reclamos" className="text-decoration-none">
              <a className="dropdown-item ">Todos mis reclamos</a>
            </Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default Navigation;
