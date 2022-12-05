import React, { Component, useContext } from "react";
import AuthContext from "../../store/auth-context";
import Navigation from "../Navigation/Navigation";
import NavigationAdmin from "../Navigation/NavigationAdmin";

const MainHeader = () => {
  const ctx = useContext(AuthContext);

  return (
    <div
      className="container-lg p-3 bg-purple-30 fondo"
      style={{ backgroundColor: "#81c784" }}
    >
      <div className="row ">
        <div
          className="text-center align-self-center fw-bold ml-4 mb-4 "
          style={{ fontSize: "x-large" }}
        >
          <i className="bi bi-building"></i>
          Infinity
        </div>

        {ctx.isLoggedIn && (
          <div className=" text-center p-1">
            {ctx.isAdmin && <NavigationAdmin />}
            {!ctx.isAdmin && <Navigation />}
            <button
              type="button"
              className="btn btn-outline-dark btn-sm mx-1"
              onClick={ctx.onLogout}
            >
              Cerrar sesion
            </button>
          </div>
        )} 
      </div>
    </div>
  );
};

export default MainHeader;
