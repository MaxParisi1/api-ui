import React from "react";

function ContainerCards(props) {
  const { children } = props;
  return (
    <>
      <div>
        <h2 className="my-4 text-center">{props.titulo}</h2>
        <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center">
          {children}
        </div>
      </div>
    </>
  );
}

export default ContainerCards;
