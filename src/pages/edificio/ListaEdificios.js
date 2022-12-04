import React, { useEffect, useState } from "react";
import servicioEdificio from "../../services/edificio/edificioServicio";
import CardEdificio from "../../components/edificio/CardEdificio"
import ContainerCards from "../../components/Utils/ContainerCards";

function ListaEdificios() {
  const [edificios, setEdificios] = useState([]);

  useEffect(() => {
    servicioEdificio.getAllEdificios().then((response) => {
      setEdificios(response);
    });
  }, [edificios]);

  const eliminarEdificio = (codigo) => {
    servicioEdificio
      .deleteEdificio(codigo)
      .then((response) => {
        /* debuggerar ¿Porque llega undefined ?
      console.log(response);
      if (response.status == 204){
        console.log("hola");
      }
      */
        setEdificios(edificios.filter((edificio) => edificio.codigo !== codigo));
      })
      .catch(function(error) {
        console.log(error.response.data); //No se puede eliminar un edificio si tiene unidades
        alert(error.response.data);
      });
  };
  return (
    <div>
      <ContainerCards titulo="Listado de edificios">
        {edificios.map((edificio) => (
          <CardEdificio
            codigo={edificio.codigo}
            nombre={edificio.nombre}
            direccion={edificio.direccion}
            eliminarEdificio={eliminarEdificio}
          />
        ))}
      </ContainerCards>
    </div>
  );
}

export default ListaEdificios;
