import React, { useEffect, useState } from "react";
import { useContext } from "react";
import servicioEdificio from "../../services/edificioServicio";
import unidadServicio from "../../services/unidadServicio";
import AuthContext from "../../store/auth-context";
import Card from "../Utils/Card";
import ContainerCards from "../Utils/ContainerCards";

function NuevoReclamo() {
  const ctx = useContext(AuthContext);
  const [unidades, setUnidades] = useState([{}]);
  const [edificios, setEdificios] = useState([]);
  const [edificioView, setEdificioView] = useState(true);

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
    });
  }, [unidades]);

  const selectEdificio = (event) => {
    console.log(event);
    setEdificioView(false);
  };

  return (
    <div>
      <ContainerCards titulo="Seleccionar Edificio">
        {edificioView &&
          edificios.map((edificio) => (
            <Card
              id={edificio.codigo}
              nombre={edificio.nombre}
              cuerpo={edificio.direccion}
              onClick={selectEdificio}
            />
          ))}
      </ContainerCards>
    </div>
  );
}

export default NuevoReclamo;
