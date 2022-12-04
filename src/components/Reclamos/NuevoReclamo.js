import React, { useEffect, useState } from "react";
import { useContext } from "react";
import servicioEdificio from "../../services/edificioServicio";
import unidadServicio from "../../services/unidadServicio";
import AuthContext from "../../store/auth-context";
import Card from "../Utils/Card";
import ContainerCards from "../Utils/ContainerCards";
import { Breadcrumb } from "antd";
import ReclamoCard from "./ReclamoCard";
import reclamoServicio from "../../services/reclamoServicio";
import NormalButton from "../Utils/NormalButton";
import GenerarReclamo from "./GenerarReclamo";
import { Link } from "react-router-dom";
import GenerarReclamoComun from "./GenerarReclamoComun";

function NuevoReclamo() {
  const ctx = useContext(AuthContext);
  const [unidades, setUnidades] = useState([{}]);
  const [edificios, setEdificios] = useState([]);
  const [reclamos, setReclamos] = useState([{}]);
  const [reclamosComunes, setReclamosComunes] = useState([{}]);

  const [codigoEdificioActual, setCodigoEdificioActual] = useState(0);
  const [identificadorActual, setIdentificadorActual] = useState(0);
  const [edificioView, setEdificioView] = useState(true);
  const [unidadesView, setUnidadesView] = useState(false);
  const [reclamosView, setReclamosView] = useState(false);
  const [reclamosCreate, setReclamosCreate] = useState(false);
  const [reclamosComunCreate, setReclamosComunCreate] = useState(false);
  const [reclamosComunView, setReclamosComunView] = useState(false);

  useEffect(() => {
    unidadServicio.getUnidadesPorDocumento(ctx.documento).then((response) => {
      setUnidades(response);
    });
  }, []);

  useEffect(() => {
    let result = unidades.map((unidad) => unidad.codigoEdificio);
    const set = new Set(result);
    servicioEdificio.getEdificiosPorIds(set).then((response) => {
      setEdificios(response);
      if (response.length <= 1) {
        setEdificioView(false);
        setUnidadesView(true);
        console.log(response[0].codigo);
        setCodigoEdificioActual(response[0].codigo);
      }
    });
  }, [unidades]);

  const fetchDataReclamos = async (identificador) => {
    const unidadSeleccionada = unidades.find(
      (unidad) => unidad.identificador == identificador
    );

    setReclamos(
      await reclamoServicio.getReclamosPorUnidad(
        unidadSeleccionada.codigoEdificio,
        unidadSeleccionada.piso,
        unidadSeleccionada.numero
      )
    );
  };

  const fetchDataReclamosComunes = async (codigo) => {
    setReclamosComunes(
      await reclamoServicio.getReclamosComunesPorEdificio(codigo)
    );
  };

  const selectEdificio = (event) => {
    setCodigoEdificioActual(event.target.parentNode.parentNode.id);
    setEdificioView(false);
    setUnidadesView(true);
  };

  const selectUnidad = (event) => {
    setIdentificadorActual(event.target.parentNode.parentNode.id);
    setUnidadesView(false);
    setReclamosView(true);
    fetchDataReclamos(event.target.parentNode.parentNode.id);
  };

  const reclamoComun = (event) => {
    setCodigoEdificioActual(event.target.parentNode.parentNode.id);
    setEdificioView(false);
    setReclamosComunView(true);
    fetchDataReclamosComunes(event.target.parentNode.parentNode.id);
  };

  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>Reclamos</Breadcrumb.Item>
        <Breadcrumb.Item
          onClick={() => {
            setEdificioView(true);
            setUnidadesView(false);
            setReclamosView(false);
            setReclamosCreate(false);
            setReclamosComunCreate(false);
            setReclamosComunView(false);
          }}
        >
          Edificio
        </Breadcrumb.Item>
        {(unidadesView ||
          reclamosView ||
          reclamosCreate ||
          reclamosComunView ||
          reclamosComunCreate) && (
          <Breadcrumb.Item
            onClick={() => {
              setEdificioView(false);
              setUnidadesView(true);
              setReclamosView(false);
              setReclamosCreate(false);
              setReclamosComunCreate(false);
              setReclamosComunView(false);
            }}
          >
            Unidades
          </Breadcrumb.Item>
        )}
        {(reclamosView || reclamosCreate) && (
          <Breadcrumb.Item
            onClick={() => {
              setEdificioView(false);
              setUnidadesView(false);
              setReclamosView(true);
              setReclamosCreate(false);
            }}
          >
            Reclamos
          </Breadcrumb.Item>
        )}
      </Breadcrumb>
      {edificioView && (
        <ContainerCards titulo="Seleccionar Edificio">
          {edificios.map((edificio) => (
            <Card
              id={edificio.codigo}
              nombre={edificio.nombre}
              cuerpo={`Dirección: ${edificio.direccion}`}
              onClick={selectEdificio}
              accion={"Unidades"}
              reclamoComun={reclamoComun}
              accion2={"Reclamos Comunes"}
            />
          ))}
        </ContainerCards>
      )}
      {reclamosComunView && (
        <div
          className="w-100 w-md-50"
          style={{ textAlignLast: "left", marginTop: "3%", marginBottom: "4%" }}
        >
          <NormalButton
            onClickFuncion={() => {
              setReclamosComunCreate(true);
              setReclamosComunView(false);
            }}
            accion={"Crear nuevo Reclamo Comun"}
          />
        </div>
      )}
      {reclamosComunView && (
        <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center">
          {reclamosComunes?.map((reclamo) => (
            <ReclamoCard
              key={reclamo.idReclamo}
              id={reclamo.idReclamo}
              edificio={`Edificio: ${
                edificios.find((edificio) => edificio.codigo == reclamo.codigo)
                  ?.nombre
              }`}
              ubicacion={`Ubicacion: ${reclamo.ubicacion}`}
              descripcion={`Descripcion: ${reclamo.descripcion}`}
              estado={`Estado: ${reclamo.estado}`}
            />
          ))}
        </div>
      )}
      {reclamosComunCreate && (
        <GenerarReclamoComun
          edificios={edificios.find(
            (edificio) => edificio.codigo == codigoEdificioActual
          )}
          endCreate={() => {
            setReclamosComunCreate(false);
            setEdificioView(true);
          }}
        ></GenerarReclamoComun>
      )}
      {unidadesView && (
        <div
          className="w-100 w-md-50"
          style={{ textAlignLast: "left", marginTop: "3%", marginBottom: "4%" }}
        >
          <NormalButton
            onClickFuncion={() => {
              setReclamosComunView(true);
              setUnidadesView(false);
              fetchDataReclamosComunes(codigoEdificioActual);
            }}
            accion={"Reclamos Comunes"}
          />
        </div>
      )}
      {unidadesView && (
        <ContainerCards titulo="Seleccionar Unidad">
          {unidades
            .filter((unidad) => unidad.codigoEdificio == codigoEdificioActual)
            .map((unidad) => (
              <Card
                id={unidad.identificador}
                nombre={`Piso ${unidad.piso} Nº ${unidad.numero}`}
                cuerpo={`Edificio: ${
                  edificios.find(
                    (edificio) => edificio.codigo == codigoEdificioActual
                  ).nombre
                }`}
                onClick={selectUnidad}
                accion={"Ver Reclamos"}
              />
            ))}
        </ContainerCards>
      )}
      {reclamosView && (
        <div
          className="w-md-50 d-flex text-center"
          style={{
            textAlignLast: "left",
            marginTop: "3%",
            marginBottom: "4%",
            textAlignLast: "center",
            width: "60%",
          }}
        >
          <NormalButton
            onClickFuncion={() => {
              setReclamosCreate(true);
              setReclamosView(false);
            }}
            accion={"Crear nuevo Reclamo"}
          />
          <NormalButton accion={"Ver todos mis reclamos"}>
            <Link to="/reclamos"></Link>
          </NormalButton>
        </div>
      )}
      {reclamosView && reclamos && (
        <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center">
          {reclamos.map((reclamo) => (
            <ReclamoCard
              key={reclamo.idReclamo}
              id={reclamo.idReclamo}
              edificio={`Edificio: ${
                edificios.find((edificio) => edificio.codigo == reclamo.codigo)
                  ?.nombre
              }`}
              ubicacion={`Ubicacion: ${reclamo.ubicacion}`}
              descripcion={`Descripcion: ${reclamo.descripcion}`}
              identificador={`Piso ${
                unidades.find(
                  (unidad) => unidad.identificador == identificadorActual
                )?.piso
              } Nº ${
                unidades.find(
                  (unidad) => unidad.identificador == identificadorActual
                )?.numero
              }`}
              estado={`Estado: ${reclamo.estado}`}
            />
          ))}
        </div>
      )}
      {reclamosCreate && (
        <GenerarReclamo
          unidad={unidades.find(
            (unidad) => unidad.identificador == identificadorActual
          )}
          endCreate={() => {
            setReclamosCreate(false);
            setUnidadesView(true);
          }}
        ></GenerarReclamo>
      )}
    </div>
  );
}

export default NuevoReclamo;
