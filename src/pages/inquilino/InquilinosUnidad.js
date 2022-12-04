import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ContainerCards from "../../components/Utils/ContainerCards";
import PersonaCard from "../../components/persona/PersonaCard";
import unidadServicio from "../../services/unidad/unidadServicio";

function InquilinosUnidad() {
  const { codigo, piso, numero } = useParams();
  const [Inquilinos, setInquilinos] = useState([]);

  useEffect(() => {
    unidadServicio
      .getUnidadInquilinos(codigo, piso, numero)
      .then((response) => {
        setInquilinos(response);
      });
  }, []);

  return (
    <div>
      <ContainerCards
        titulo={`Listado de Inquilinos de la unidad piso ${piso}, numero ${numero}`}
      >
        {Inquilinos.map((inquilino) => (
          <PersonaCard
            documento={inquilino.documento}
            nombre={inquilino.nombre}
          />
        ))}
      </ContainerCards>
    </div>
  );
}

export default InquilinosUnidad;
