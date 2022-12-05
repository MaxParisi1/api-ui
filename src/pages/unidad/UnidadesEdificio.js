import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ContainerCards from "../../components/Utils/ContainerCards";
import NormalButton from "../../components/Utils/NormalButton";
import CardUnidad from "../../components/unidad/CardUnidad";
import ModalCrearUnidad from "../../components/unidad/ModalCrearUnidad";
import servicioEdificio from "../../services/edificio/edificioServicio";
import unidadServicio from "../../services/unidad/unidadServicio";
import { Dropdown, Space, Typography } from "antd";

const items = [
  { key: "1", label: "Todos" },
  { key: "2", label: "S" },
  { key: "3", label: "N" },
];

function UnidadesEdificio() {
  const { codigo } = useParams();
  const [unidades, setUnidades] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [estado, setEstado] = useState("");

  useEffect(() => {
    servicioEdificio.getEdificioUnidades(codigo).then((response) => {
      setUnidades(response);
    });
  }, [unidades]);

  const crearUnidad = (unidadNueva) => {
    console.log(unidadNueva);
    unidadNueva.codigoEdificio = codigo;
    unidadServicio.createUnidad(unidadNueva).then((response) => {
      console.log(response);
    }).catch(function(error) {
      console.log(error.response.data);
      alert(error.response.data);
    });
    ;
  };

  const modificarUnidad = (identificador, unidad) => {
    /*no existe el endpoint */
    unidadServicio.updateUnidad(identificador, unidad).then((response) => {
      console.log(response);
    });
  };

  const eliminarUnidad = (identificador) => {
    unidadServicio.deleteUnidad(identificador).then(() => {
      setUnidades(
        unidades.filter((unidad) => unidad.identificador !== identificador)
      );
    });
  };

  const onClick = ({ key }) => {
    if (key === "1") {
      setEstado("Todos");
    } else if (key === "2") {
      setEstado("S");
    } else if (key === "3") {
      setEstado("N");
    }
  };

  return (
    <>
      <div>
        <h3>Listado de unidades del edificio {codigo}</h3>
        <NormalButton onClickFuncion={handleShow} accion="Nueva Unidad" />
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
                Filtrar por Habitado:{" "}
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
        </h4>

        <ContainerCards>
          {estado !== "Todos"
            ? unidades
                .filter((unidad) => unidad.habitado == estado)
                .map((unidad) => (
                  <CardUnidad
                    unidad={unidad}
                    modificarUnidad={modificarUnidad}
                    eliminarUnidad={eliminarUnidad}
                  />
                ))
            : unidades.map((unidad) => (
                <CardUnidad
                  unidad={unidad}
                  modificarUnidad={modificarUnidad}
                  eliminarUnidad={eliminarUnidad}
                />
              ))}
        </ContainerCards>
      </div>
      <ModalCrearUnidad
        show={show}
        onHide={handleClose}
        crearUnidad={crearUnidad}
        codigo={codigo}
      ></ModalCrearUnidad>
    </>
  );
}

export default UnidadesEdificio;
