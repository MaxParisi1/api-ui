import React from "react";
import { useState } from "react";
import ReclamoCard from "./ReclamoCard";
import { Dropdown, Space, Typography } from "antd";
import { useEffect } from "react";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import reclamoServicio from "../../services/reclamoServicio";
import servicioEdificio from "../../services/edificioServicio";
import unidadServicio from "../../services/unidadServicio";

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
    const fetchData = async () => {
      setReclamos(await reclamoServicio.getReclamosPorDocumento(ctx.documento));
    };
    fetchData();
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

        <h4 className="p-2">
          <Dropdown
            menu={{
              items,
              selectable: true,
              defaultSelectedKeys: ["1"],
              onClick,
            }}
          >
            <Typography.Link className="d-flex w-50" style={{ color: "black" }}>
              <h4>
                <i className="bi bi-funnel"></i>
                Filtrar por estado:{" "}
                <i
                  class="bi bi-chevron-down"
                  style={{ verticalAlign: "middle" }}
                ></i>
              </h4>

              <Space className="">
                <h5>{estado}</h5>
              </Space>
            </Typography.Link>
          </Dropdown>
        </h4>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4 justify-content-center">
        {estado && reclamos
          ? reclamos
              .filter((reclamo) => reclamo.estado === estado)
              ?.map((reclamo) => (
                <ReclamoCard
                  key={reclamo?.idReclamo}
                  id={reclamo?.idReclamo}
                  edificio={`Edificio: ${reclamo?.codigo.nombre}`}
                  ubicacion={`Ubicacion: ${reclamo?.ubicacion}`}
                  descripcion={`Descripcion: ${reclamo?.descripcion}`}
                  identificador={`Piso ${reclamo?.identificador?.piso} Nº ${reclamo?.identificador?.numero}`}
                  estado={`Estado: ${reclamo?.estado}`}
                />
               )) 
            : reclamos?.map((reclamo) => (
              <ReclamoCard
                key={reclamo?.idReclamo}
                id={reclamo?.idReclamo}
                edificio={`Edificio: ${reclamo?.codigo?.nombre}`}
                ubicacion={`Ubicacion: ${reclamo?.ubicacion}`}
                descripcion={`Descripcion: ${reclamo?.descripcion}`}
                identificador={`Piso ${reclamo?.identificador?.piso} Nº ${reclamo?.identificador?.numero}`}
                estado={`Estado: ${reclamo?.estado}`}
              />
            ))}
      </div>
    </div>
  );
};

export default Reclamos;
