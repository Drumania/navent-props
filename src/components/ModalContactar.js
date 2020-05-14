import React, { useState } from "react";

const ModalContactar = ({
  articleTitle,
  articlePicture,
  setModal,
  articleId,
}) => {
  const [datesForm, setDatesForm] = useState({
    articleId: articleId,
  });

  const handleChange = (e) => {
    setDatesForm({
      ...datesForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(datesForm);
    alert("se envia el email");
  };

  return (
    <div className="wrap-modal">
      <div className="cont-modal p-5">
        <a
          href="#!"
          className="float-right btn-close-modal"
          onClick={() => setModal(false)}
        >
          &#10006;
        </a>
        <h3>Solicitar info sobre:</h3>

        <div className="row bg-light py-3">
          <div className="col-12 col-lg-2">
            <img
              src={articlePicture}
              className="img-fluid"
              alt={articleTitle}
            />
          </div>
          <div className="col-12 col-lg-10">{articleTitle}</div>
        </div>

        <form className="pt-3" onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="exampleInputEmail1">Nombre</label>
            <input
              type="text"
              name="nombre"
              className="form-control"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Teléfono</label>
            <input
              type="tel"
              name="telefono"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              required
              pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$"
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-info">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalContactar;
