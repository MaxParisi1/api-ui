import React, { useContext, useRef, useState } from "react";
import axios from "axios";
import AuthContext from "../../store/auth-context";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Modal, Form, Input, Select } from "antd";
import { useEffect } from "react";

const { Option } = Select;

const Login = () => {
  const ctx = useContext(AuthContext);

  const [documento, setDocumento] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState(false);
  const [tipoDocumento, setTipoDocumento] = useState("DNI");

  const documentoHandler = (event) => {
    setDocumento(event.target.value);
  };

  const contraseñaHandler = (event) => {
    setContraseña(event.target.value);
  };

  const tipoDocumentoHandler = (value) => {
    setTipoDocumento(value);
  };

  useEffect(() => {
    error &&
      Modal.error({
        title: "Los datos ingresados son incorrectos",
        content: "Revise sus datos e intenta de nuevo",
      });
    setError(false);
  }, [error]);

  const submitHandler = () => {
    let documentoFinal = tipoDocumento + documento;

    axios
      .post("http://localhost:8080/api/login", {
        documento: documentoFinal,
        contrasenia: contraseña,
      })
      .then((res) => ctx.onLogin(res.data, documentoFinal))
      .catch((err) => setError(true));
  };

  return (
    <div className="p-1 ">
      <Form
        className="container-sm p-5 mt-5"
        style={{ maxWidth: "760px", border: "solid 2px #DEB887" }}
        name="normal_login"
        initialValues={{
          remember: true,
        }}
        onFinish={submitHandler}
        autoComplete="off"
      >
        <div className="row ">
          <div className="col-span-1 fw-semibold mb-4">
            <h3>Login</h3>
          </div>
          <div className="col-span-1">
            <Form.Item>
              <Select defaultValue="DNI" onChange={tipoDocumentoHandler}>
                <Select.Option value="DNI">DNI</Select.Option>
                <Select.Option value="CI ">CI</Select.Option>
                <Select.Option value="CPA">CPA</Select.Option>
              </Select>
            </Form.Item>
          </div>
          <div className="col-span-1">
            <Form.Item
              name="Documento"
              rules={[
                {
                  required: true,
                  message: "Ingrese su Documento!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Documento"
                onChange={documentoHandler}
              />
            </Form.Item>
          </div>
          <div className="col-span-1">
            <Form.Item
              name="Contraseña"
              rules={[
                {
                  required: true,
                  message: "Ingrese su Contraseña!",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Contraseña"
                onChange={contraseñaHandler}
              />
            </Form.Item>
          </div>

          <Form.Item>
            <button
              type="submit"
              className="btn fw-semibold mt-5"
              style={{ borderColor: "#DEB887", color: "#DEB887" }}
            >
              Enviar
            </button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};
export default Login;
