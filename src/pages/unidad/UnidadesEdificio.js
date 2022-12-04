import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ContainerCards from "../../components/Utils/ContainerCards";
import NormalButton from "../../components/Utils/NormalButton";
import CardUnidad from "../../components/unidad/CardUnidad";
import ModalCrearUnidad from "../../components/unidad/ModalCrearUnidad";
import servicioEdificio from "../../services/edificio/edificioServicio";
import unidadServicio from "../../services/unidad/unidadServicio";

function UnidadesEdificio() {
  const { codigo } = useParams();
  const [unidades, setUnidades] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    });
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
        unidades.filter((unidad) => unidad.identificador != identificador)
      );
    });
  };

  return (
    <>
      <div>
        <h3>Listado de unidades del edificio {codigo}</h3>
        <NormalButton onClickFuncion={handleShow} accion="Nueva Unidad" />
        <ContainerCards>
          {unidades.map((unidad) => (
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
