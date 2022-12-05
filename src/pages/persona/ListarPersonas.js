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

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ModalCrearPersona from "../../components/persona/ModalCrearPersona";
import ModalMensajeExito from "../../components/persona/ModalMensajeExito";

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

  const [showCrearPersona, setShowCrearPersona] = useState(false);
  const handleCloseCrearPersona = () => setShowCrearPersona(false);
  const handleShowCrearPersona = () => setShowCrearPersona(true);

  const [showCrearPersonaExito, setShowCrearPersonaExito] = useState(false);
  const handleCloseCrearPersonaExito = () => setShowCrearPersonaExito(false);
  const handleShowCrearPersonaExito = () => setShowCrearPersonaExito(true);

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
      setDuenios(duenios.filter((duenio) => duenio.documento !== documento));
    });
  };

  const eliminarInquilino = (documento) => {
    unidadServicio.deleteInquilino(documento, identificador).then(() => {
      setinquilinos(
        inquilinos.filter((inquilino) => inquilino.documento !== documento)
      );
    });
  };

  const modificarPersona = (documento, persona) => {
    personaServicio.updatePersona(documento, persona);
  };

  const liberarUnidad = (codigo, piso, numero) => {
    unidadServicio.liberarUnidad(codigo, piso, numero).then((response) => {
      setinquilinos([]);
    });
  };

  const transferirUnidad = (codigo, piso, numero, documento) => {
    unidadServicio
      .transferirUnidad(codigo, piso, numero, documento)
      .then((response) => {
        personaServicio.getPersona(documento).then((responseP) => {
          setDuenios([...duenios, responseP]);
        });
      });
  };

  const alquilarUnidad = (codigo, piso, numero, documento) => {
    unidadServicio
      .alquilarUnidad(codigo, piso, numero, documento)
      .then((response) => {
        personaServicio.getPersona(documento).then((responseP) => {
          setinquilinos([...inquilinos, responseP]);
        });
      })
      .catch(function (error) {
        alert(error.response.data);
      });
  };

  const agregarDuenioUnidad = (codigo, piso, numero, documento) => {
    unidadServicio
      .agregarDuenioUnidad(codigo, piso, numero, documento)
      .then((response) => {
        personaServicio.getPersona(documento).then((responseP) => {
          setDuenios([...duenios, responseP]);
        });
      })
      .catch(function (error) {
        alert(error.response.data);
      });
  };

  const agregarInquilinoUnidad = (codigo, piso, numero, documento) => {
    unidadServicio
      .agregarInquilinoUnidad(codigo, piso, numero, documento)
      .then((response) => {
        personaServicio.getPersona(documento).then((responseP) => {
          setinquilinos([...inquilinos, responseP]);
        });
      })
      .catch(function (error) {
        alert(error.response.data);
      });
  };

  const crearPersona = (persona) => {
    personaServicio.createPersona(persona).then((response) => {
      handleShowCrearPersonaExito();
    });
  };

  return (
    <div>
      <h2 className="mt-4 ml-5">Detalle de la unidad</h2>
      <div
        className="container-sm p-5 mt-5"
        style={{ maxWidth: "760px", border: "solid 2px #519657" }}
      >
        <div className="d-flex=row">
          <Row className="d-flex ">
            <Col>
              <h6 className="d-flex" style={{ marginTop: "4%" }}>
                Eliminar todos los inquilinos de una unidad:{" "}
              </h6>
              <h6 className="d-flex" style={{ marginTop: "9%" }}>
                Transfiere la propiedad de una unidad:{" "}
              </h6>
              <h6 className="d-flex" style={{ marginTop: "9%" }}>
                Alquilar una unidad vacia:
              </h6>
              <h6 className="d-flex" style={{ marginTop: "9%" }}>
                Agregar otro duenio a una unidad:
              </h6>
              <h6 className="d-flex" style={{ marginTop: "9%" }}>
                Agregar otro inquilino a una unidad:
              </h6>
              <h6 className="d-flex" style={{ marginTop: "8%",marginBottom: "10%" }}>
                Crear una nueva persona
              </h6>
            </Col>

            <Col>
              <NormalButton
                onClickFuncion={handleShowLiberar}
                accion="Liberar"
                style={{ width: "auto" }}
              />
              <NormalButton
                onClickFuncion={handleShowTransferir}
                accion="Transferir"
                style={{ textAlign: "end" }}
              />
              <NormalButton
                onClickFuncion={handleShowAlquilar}
                accion="Alquilar"
              />
              <NormalButton
                onClickFuncion={handleShowAgregarDuenio}
                accion="Agregar Duenio"
              />
              <NormalButton
                onClickFuncion={handleShowAgregarInquilino}
                accion="Agregar Inquilino"
              />
              <NormalButton
                onClickFuncion={handleShowCrearPersona}
                accion="Crear Persona"
              />
            </Col>
          </Row>

          <h3>Dueños:</h3>
          <div className="row row-cols-1 row-cols-md-2">
            {duenios.map((duenio) => (
              <PersonaCard
                persona={duenio}
                eliminarPersona={eliminarDuenio}
                modificarPersona={modificarPersona}
              />
            ))}
          </div>

          <h3>Inquilino:</h3>

          <div className="row row-cols-1 row-cols-md-2">
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

        <ModalCrearPersona
          show={showCrearPersona}
          onHide={handleCloseCrearPersona}
          crearPersona={crearPersona}
        />

        <ModalMensajeExito
          show={showCrearPersonaExito}
          onHide={handleCloseCrearPersonaExito}
        />
      </div>
    </div>
  );
}
export default ListarPersonas;
