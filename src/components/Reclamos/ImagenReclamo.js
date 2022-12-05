import React, { useContext, useState } from "react";

const ImagenReclamo = (props) => {
  const [imageFinal, setImageFinal] = useState({});
  const [image, _setImage] = useState();

  const cleanup = () => {
    URL.revokeObjectURL(image && imageFinal);
  };

  const setImage = (newImage) => {
    if (image) {
      cleanup();
    }
    _setImage(newImage);
  };

  const handleImage = (e) => {
    if (e.target.files[0]) {
      setImageFinal({
        src: URL.createObjectURL(e.target.files[0]),
        alt: e.target.files[0].name,
      });
      props.logoHandler(e.target.files[0]);
    }
  };

  const handleOnChange = (event) => {
    const newImage = event.target.files[0];
    if (newImage) {
      setImage(URL.createObjectURL(newImage));
    }
    handleImage(event);
  };
  return (
    <div className="mb-3">
      <label htmlFor="formFile" className="form-label">
        Imagen
      </label>
      <input
        className="form-control"
        type="file"
        id="formFile"
        accept="image/*"
        onChange={handleOnChange}
      />
    </div>
  );
};

export default ImagenReclamo;
