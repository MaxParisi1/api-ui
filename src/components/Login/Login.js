import React, { useContext, useRef, useState } from "react";
import axios from "axios";
import AuthContext from "../../store/auth-context";

const Login = () => {
  const ctx = useContext(AuthContext);

  const [documento, setDocumento] = useState("");
  const [contraseña, setContraseña] = useState("");

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const documentoHandler = (event) => {
    setDocumento(event.target.value);
  };

  const contraseñaHandler = (event) => {
    setContraseña(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/api/login", {
        documento: documento,
        contrasenia: contraseña,
      })
      .then((res) => ctx.onLogin(res.data, documento))
      .catch((err) => console.log(err));
  };

  return (
    <div className="p-1 ">
      <form
        className="container-sm p-5 mt-5"
        style={{ maxWidth: "760px", border: "solid 2px #DEB887" }}
      >
        <div className="row ">
          <div className="col-span-1 fw-semibold mb-4">
            <h3>Login</h3>
          </div>
          <div className="col-span-1">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Documento
            </label>
            <input
              type="email"
              className="form-control"
              id="txtusu"
              name="email"
              ref={emailInputRef}
              value={documento}
              onChange={documentoHandler}
            />
          </div>

          <div className="col-span-1 ">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="txtpass"
              name="paasasword"
              ref={passwordInputRef}
              value={contraseña}
              onChange={contraseñaHandler}
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn fw-semibold mt-5"
          style={{ borderColor: "#DEB887", color: "#DEB887" }}
          onClick={submitHandler}
        >
          Enviar
        </button>
      </form>
    </div>
  );
};
export default Login;
