import React, { useEffect, useState } from "react";
import servicioEdificio from "../../services/edificio/edificioServicio";
import CardEdificio from "../../components/edificio/CardEdificio";
import ContainerCards from "../../components/Utils/ContainerCards";
import NormalButton from "../../components/Utils/NormalButton";
import ModalCrearEdificio from "../../components/edificio/ModalCrearEdificio";

function ListaEdificios() {
  const [edificios, setEdificios] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    servicioEdificio.getAllEdificios().then((response) => {
      setEdificios(response);
    });
  }, [edificios]);

  const eliminarEdificio = (codigo) => {
    servicioEdificio
      .deleteEdificio(codigo)
      .then((response) => {
        setEdificios(
          edificios.filter((edificio) => edificio.codigo !== codigo)
        );
      })
      .catch(function (error) {
        //No se puede eliminar un edificio si tiene unidades
        alert(error.response.data);
      });
  };

  const crearEdificio = (edificio) => {
    servicioEdificio.createEdificio(edificio).catch(function (error) {
      alert(error.response.data);
    });
  };

  const modificarEdificio = (codigo, datos) => {
    servicioEdificio.updateEdificio(codigo, datos).catch(function (error) {
      alert(error.response.data);
    });
  };

  return (
    <div>
      <h3>Listado de edificios</h3>
      <NormalButton onClickFuncion={handleShow} accion="Nuevo Edificio" />
      <ContainerCards>
        {edificios.map((edificio) => (
          <CardEdificio
            codigo={edificio.codigo}
            nombre={edificio.nombre}
            direccion={edificio.direccion}
            eliminarEdificio={eliminarEdificio}
            modificarEdificio={modificarEdificio}
          />
        ))}
      </ContainerCards>

      <ModalCrearEdificio
        show={show}
        onHide={handleClose}
        crearEdificio={crearEdificio}
      />
    </div>
  );
}

export default ListaEdificios;
