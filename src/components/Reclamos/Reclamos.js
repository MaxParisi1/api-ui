import React from "react";
import { useState } from "react";
import ReclamoCard from "./ReclamoCard";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Typography } from "antd";
import { useEffect } from "react";
import { useContext } from "react";
import axios from "axios";
import AuthContext from "../../store/auth-context";

const items = [
  {
    key: "1",
    label: "Todos los reclamos",
  },
  {
    key: "2",
    label: "Nuevo",
  },
  {
    key: "3",
    label: "Abierto",
  },
  {
    key: "4",
    label: "En proceso",
  },
  {
    key: "5",
    label: "Desestimado",
  },
  {
    key: "6",
    label: "Anulado",
  },
  {
    key: "7",
    label: "Terminado",
  },
];

const Reclamos = () => {
  const ctx = useContext(AuthContext);
  const [reclamos, setReclamos] = useState([{}]);
  const [estado, setEstado] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/reclamo/persona/${ctx.documento}`)
      .then((res) => setReclamos(res.data))
      .catch((err) => console.log(err));
  }, []);

  const onClick = ({ key }) => {
    if (key === "1") {
      setEstado("");
    } else if (key === "2") {
      setEstado("nuevo");
    } else if (key === "3") {
      setEstado("abierto");
    } else if (key === "4") {
      setEstado("enProceso");
    } else if (key === "5") {
      setEstado("desestimado");
    } else if (key === "6") {
      setEstado("anulado");
    } else if (key === "7") {
      setEstado("terminado");
    }
  };

  return (
    <div>
      <div className="container">
        <h1 className="py-4">
          <i className="bi bi-clipboard2-minus p-2"></i>Mis reclamos
        </h1>
    <h1>ANA</h1>
        {/* <h4 className="p-2">
          <i className="bi bi-funnel"></i>Filtrar por:
        </h4> */}
        <Dropdown
          menu={{
            items,
            selectable: true,
            defaultSelectedKeys: ["1"],
            onClick,
          }}
        >
          <Typography.Link className="d-flex w-50">
            <h4>
              <i className="bi bi-funnel"></i>
              Filtrar por estado:{" "}
              <i
                class="bi bi-chevron-down"
                style={{ verticalAlign: "middle", marginRight: "2px" }}
              ></i>
              </h4>

            <Space>
              <h5>{estado}</h5>
            </Space>
          </Typography.Link>
        </Dropdown>
      </div>
      <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center">
        {estado !== ""
          ? reclamos
              .filter((reclamo) => reclamo.estado === estado)
              .map((reclamo) => (
                <ReclamoCard
                  key={reclamo.idReclamo}
                  id={reclamo.idReclamo}
                  edificio={reclamo.codigo}
                  ubicacion={reclamo.ubicacion}
                  descripcion={reclamo.descripcion}
                  identificador={reclamo.identificador}
                  estado={reclamo.estado}
                />
              ))
          : reclamos.map((reclamo) => (
              <ReclamoCard
                key={reclamo.idReclamo}
                id={reclamo.idReclamo}
                edificio={reclamo.codigo}
                ubicacion={reclamo.ubicacion}
                descripcion={reclamo.descripcion}
                identificador={reclamo.identificador}
                estado={reclamo.estado}
              />
            ))}
      </div>
    </div>
  );
};

export default Reclamos;
