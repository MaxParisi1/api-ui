import React from "react";
import reclamoServicio from "../../services/reclamo/reclamoServicio";
import { useEffect, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Typography } from "antd";
import CardReclamo from "../../components/Reclamos/CardReclamo";
import servicioEdificio from "../../services/edificio/edificioServicio";

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

const edificiosFiltroAUX = [
  {
    key: "1",
    label: "todos",
  },
  {
    key: "2",
    label: "SLS Puerto Madero",
  },
  {
    key: "3",
    label: "The Link Towers",
  },
];

function ReclamosAdmin() {
  const [reclamos, setReclamos] = useState([{}]);
  const [estado, setEstado] = useState("");
  const [edificioFiltro, setEdificioFiltro] = useState("");
  var dicOnclickEdificio = {};

  var arrayEdificio = [];
  arrayEdificio.push({
    key: "1",
    label: "todos",
  });

  useEffect(() => {
    setEstado("nuevo");
    setEdificioFiltro("todos");

    servicioEdificio.getAllEdificios().then((response) => {
      response.forEach((element) => {
        arrayEdificio.push({
          key: (element.codigo + 1).toString(),
          label: element.nombre,
        });
      });

      console.log("ARRAY EDIFICO");
      console.log(arrayEdificio);

      dicOnclickEdificio["1"] = "todos";
      var aux = 2;
      arrayEdificio.forEach((x) => {
        dicOnclickEdificio[aux] = (aux - 1).toString();
        aux += 1;
      });
      console.log(dicOnclickEdificio);
    });
  }, []);

  useEffect(() => {
    reclamoServicio.getReclamoEstado(estado).then((response) => {
      setReclamos(response);
    });
  }, [estado, edificioFiltro, reclamos]);

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

  const onClickEdificios = ({ key }) => {
    console.log("DIC DESDE ONCLICK");
    console.log(dicOnclickEdificio);
    setEdificioFiltro(dicOnclickEdificio[key]);
    /*
    if (key === "1") {
      setEdificioFiltro("todos");
    } else if (key === "2") {
      setEdificioFiltro("1");
    } else if (key === "3") {
      setEdificioFiltro("2");
    } else if (key === "4") {
      setEdificioFiltro("3");
    } else if (key === "5") {
      setEdificioFiltro("4");
    } else if (key === "6") {
      setEdificioFiltro("5");
    } else if (key === "7") {
      setEdificioFiltro("6");
    }else if (key === "8") {
      setEdificioFiltro("7");
    }else if (key === "9") {
      setEdificioFiltro("8");
    }
    */
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
          <i className="bi bi-clipboard2-minus p-2"></i>Reclamos
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
          <Typography.Link className="d-flex w-50">
            <h4>
              <i className="bi bi-funnel"></i>
              Filtrar por estado:{" "}
              <i
                class="bi bi-chevron-down"
                style={{ verticalAlign: "middle", marginRight: "10px" }}
              ></i>
              </h4>
              <Space>
              <h5>{estado}</h5>
            </Space>
          </Typography.Link>
          </Dropdown>

          <Dropdown
            menu={{
              items: edificiosFiltroAUX,
              selectable: true,
              onClick: onClickEdificios,
            }}
          >
            <Typography.Link className="d-flex w-50">
            <h4>
              <i className="bi bi-funnel"></i>
              Filtrar por edificio:{" "}
              <i
                class="bi bi-chevron-down"
                style={{ verticalAlign: "middle", marginRight: "10px" }}
              ></i>
              </h4>
              <Space>
              <h5>{edificioFiltro}</h5>
            </Space>
          </Typography.Link>
          
          </Dropdown>
        </h4>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4 justify-content-center">
        {edificioFiltro !== "todos"
          ? reclamos
              .filter(
                (reclamo) =>
                  reclamo.estado === estado &&
                  reclamo.codigo === parseInt(edificioFiltro)
              )
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
          : reclamos
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
              ))}
      </div>
    </div>
  );
}

export default ReclamosAdmin;
