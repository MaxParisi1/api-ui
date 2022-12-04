import React from "react";
import reclamoServicio from "../../services/reclamo/reclamoServicio";
import { useEffect, useState } from "react";
import ReclamoCard from "../../components/Reclamos/ReclamoCard";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Typography } from "antd";
import CardReclamo from "../../components/Reclamos/CardReclamo";

const items = [
  {
    key: "1",
    label: "Nuevo",
  },
  {
    key: "2",
    label: "Abierto",
  },
  {
    key: "3",
    label: "En proceso",
  },
  {
    key: "4",
    label: "Desestimado",
  },
  {
    key: "5",
    label: "Anulado",
  },
  {
    key: "6",
    label: "Terminado",
  },
];

function ReclamosAdmin() {
  const [reclamos, setReclamos] = useState([{}]);
  const [estado, setEstado] = useState("");

  useEffect(() => {
    setEstado("nuevo");
  }, []);

  useEffect(() => {
    reclamoServicio.getReclamoEstado(estado).then((response) => {
      setReclamos(response);
    });
  }, [estado, reclamos]);

  const onClick = ({ key }) => {
    if (key === "1") {
      setEstado("nuevo");
    } else if (key === "2") {
      setEstado("abierto");
    } else if (key === "3") {
      setEstado("enProceso");
    } else if (key === "4") {
      setEstado("desestimado");
    } else if (key === "5") {
      setEstado("anulado");
    } else if (key === "6") {
      setEstado("terminado");
    }
  };

  const cambiarEstado = (idReclamo, estado) => {
    reclamoServicio.cambiarEstado(idReclamo, estado).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <div className="container">
        <h1 className="py-4">
          <i className="bi bi-clipboard2-minus p-2"></i>Mis reclamos
        </h1>

        <h4 className="p-2">
          <i className="bi bi-funnel"></i>Filtrar por:
        </h4>
        <Dropdown
          menu={{
            items,
            selectable: true,
            defaultSelectedKeys: ["1"],
            onClick,
          }}
        >
          <Typography.Link>
            <Space>
              Estado: {estado}
              <DownOutlined />
            </Space>
          </Typography.Link>
        </Dropdown>
      </div>
      <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center">
        {estado !== ""
          ? reclamos
              .filter((reclamo) => reclamo.estado === estado)
              .map((reclamo) => (
                <CardReclamo
                  key={reclamo.idReclamo}
                  id={reclamo.idReclamo}
                  documento={reclamo.documento}
                  codigoEdificio={reclamo.codigo}
                  identificador={reclamo.identificador}
                  ubicacion={reclamo.ubicacion}
                  descripcion={reclamo.descripcion}
                  estado={reclamo.estado}
                  cambiarEstado={cambiarEstado}
                />
              ))
          : reclamos.map((reclamo) => (
              <CardReclamo
                key={reclamo.idReclamo}
                id={reclamo.idReclamo}
                documento={reclamo.documento}
                codigoEdificio={reclamo.codigo}
                identificador={reclamo.identificador}
                ubicacion={reclamo.ubicacion}
                descripcion={reclamo.descripcion}
                estado={reclamo.estado}
                cambiarEstado={cambiarEstado}
              />
            ))}
      </div>
    </div>
  );
}

export default ReclamosAdmin;

/*
<CardReclamo 
  key={reclamo.idReclamo}
  id={reclamo.idReclamo}
  documento={reclamo.documento}
  codigoEdificio={reclamo.codigo}
  identificador={reclamo.identificador}
  ubicacion={reclamo.ubicacion}
  descripcion={reclamo.descripcion}
  estado={reclamo.estado}
   />
*/
