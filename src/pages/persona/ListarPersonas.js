import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import unidadServicio from "../../services/unidad/unidadServicio";
import PersonaCard from "../../components/persona/PersonaCard";
import personaServicio from "../../services/persona/personaServicio";
import NormalButton from "../../components/Utils/NormalButton";
import ModalLiberarUnidad from "../../components/unidad/ModalLiberarUnidad";
import ModalTransferirUnidad from "../../components/unidad/ModalTransferirUnidad";
import ModalAlquilarUnidad from "../../components/unidad/ModalAlquilarUnidad";
import ModalControlUnidad from "../../components/unidad/ModalControlUnidad";

function ListarPersonas() {
  const { codigo, piso, numero, identificador } = useParams();
  const [duenios, setDuenios] = useState([]);
  const [inquilinos, setinquilinos] = useState([]);

  const [showLiberar, setShowLiberar] = useState(false);
  const handleCloseLiberar = () => setShowLiberar(false);
  const handleShowLiberar = () => setShowLiberar(true);

  const [showTransferir, setShowTransferir] = useState(false);
  const handleCloseTransferir = () => setShowTransferir(false);
  const handleShowTransferir = () => setShowTransferir(true);

  const [showAlquilar, setShowAlquilar] = useState(false);
  const handleCloseAlquilar = () => setShowAlquilar(false);
  const handleShowAlquilar = () => setShowAlquilar(true);

  const [showAgregarDuenio, setShowAgregarDuenio] = useState(false);
  const handleCloseAgregarDuenio = () => setShowAgregarDuenio(false);
  const handleShowAgregarDuenio = () => setShowAgregarDuenio(true);

  const [showAgregarInquilino, setShowAgregarInquilino] = useState(false);
  const handleCloseAgregarInquilino = () => setShowAgregarInquilino(false);
  const handleShowAgregarInquilino = () => setShowAgregarInquilino(true);

  useEffect(() => {
    unidadServicio.getDuenios(codigo, piso, numero).then((response) => {
      setDuenios(response);
    });
  }, [duenios]);

  useEffect(() => {
    unidadServicio.getInquilinos(codigo, piso, numero).then((response) => {
      setinquilinos(response);
    });
  }, [inquilinos]);

  const eliminarDuenio = (documento) => {
    unidadServicio.deleteDuenio(documento, identificador).then(() => {
      setDuenios(duenios.filter((duenio) => duenio.documento != documento));
    });
  };

  const eliminarInquilino = (documento) => {
    unidadServicio.deleteInquilino(documento, identificador).then(() => {
      setinquilinos(
        inquilinos.filter((inquilino) => inquilino.documento != documento)
      );
    });
  };

  const modificarPersona = (documento, persona) => {
    personaServicio.updatePersona(documento, persona).then((response) => {
      console.log(response);
    });
  };

  const liberarUnidad = (codigo, piso, numero) => {
    unidadServicio.liberarUnidad(codigo, piso, numero).then((response) => {
      console.log(response);
      window.location.reload();
    });
  };

  const transferirUnidad = (codigo, piso, numero, documento) => {
    unidadServicio
      .transferirUnidad(codigo, piso, numero, documento)
      .then((response) => {
        console.log(response);
      });
  };

  const alquilarUnidad = (codigo, piso, numero, documento) => {
    unidadServicio
      .alquilarUnidad(codigo, piso, numero, documento)
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .catch(function(error) {
        console.log(error.response.data);
        alert(error.response.data);
      });
  };

  const agregarDuenioUnidad = (codigo, piso, numero, documento) => {
    unidadServicio
      .agregarDuenioUnidad(codigo, piso, numero, documento)
      .then((response) => {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error.response.data);
        alert(error.response.data);
      });
  };

  const agregarInquilinoUnidad = (codigo, piso, numero, documento) => {
    unidadServicio
      .agregarInquilinoUnidad(codigo, piso, numero, documento)
      .then((response) => {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error.response.data);
        alert(error.response.data);
      });
  };

  return (
    <>
      <div className="d-flex=row">
        <div className="d-flex ">
          <div className="">
            <h6>Eliminar todos los inquilinos de una unidad:</h6>
            <NormalButton onClickFuncion={handleShowLiberar} accion="Liberar" />
          </div>
          <div className="">
            <h6>Transfiere la propiedad de una unidad:</h6>
            <NormalButton
              onClickFuncion={handleShowTransferir}
              accion="Transferir"
            />
          </div>
          <div className="">
            <h6>Alquilar una unidad vacia:</h6>
            <NormalButton
              onClickFuncion={handleShowAlquilar}
              accion="Alquilar"
            />
          </div>

          <div className="">
            <h6>Agregar otro duenio a una unidad:</h6>
            <NormalButton
              onClickFuncion={handleShowAgregarDuenio}
              accion="Agregar Duenio"
            />
          </div>
          
          <div className="">
            <h6>Agregar otro inquilino a una unidad:</h6>
            <NormalButton
              onClickFuncion={handleShowAgregarInquilino}
              accion="Agregar Inquilino"
            />
          </div>
        </div>

        <div>
          <h3>Duenios:</h3>
          {duenios.map((duenio) => (
            <PersonaCard
              persona={duenio}
              eliminarPersona={eliminarDuenio}
              modificarPersona={modificarPersona}
            />
          ))}
        </div>

        <div>
          <h3>Inquilino:</h3>
          {/* cuidado en api el endpoint inquilino llama a duenios y no inquilino,modificar */}
          ,
          {inquilinos.map((inquilino) => (
            <PersonaCard
              persona={inquilino}
              modificarPersona={modificarPersona}
              eliminarPersona={eliminarInquilino}
            />
          ))}
        </div>
      </div>
      <ModalLiberarUnidad
        show={showLiberar}
        onHide={handleCloseLiberar}
        codigo={codigo}
        piso={piso}
        numero={numero}
        liberarUnidad={liberarUnidad}
      />

      <ModalTransferirUnidad
        show={showTransferir}
        onHide={handleCloseTransferir}
        transferirUnidad={transferirUnidad}
        codigo={codigo}
        piso={piso}
        numero={numero}
      />

      <ModalAlquilarUnidad
        show={showAlquilar}
        onHide={handleCloseAlquilar}
        alquilarUnidad={alquilarUnidad}
        codigo={codigo}
        piso={piso}
        numero={numero}
      />

      <ModalControlUnidad
        show={showAgregarDuenio}
        onHide={handleCloseAgregarDuenio}
        funcionControl={agregarDuenioUnidad}
        codigo={codigo}
        piso={piso}
        numero={numero}
        titulo="Agregar una persona como co-propietario"
      />

      <ModalControlUnidad
        show={showAgregarInquilino}
        onHide={handleCloseAgregarInquilino}
        funcionControl={agregarInquilinoUnidad}
        codigo={codigo}
        piso={piso}
        numero={numero}
        titulo="Agregar una persona como co-inquilino"
      />
    </>
  );
}
export default ListarPersonas;
