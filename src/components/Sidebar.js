import React, { Fragment, useContext, useState } from "react";
import { FilterContext } from "../context/FilterContext";
import { ArticlesContext } from "../context/ArticlesContext";

const Sidebar = () => {
  const { filter, setFilter } = useContext(FilterContext);
  const { articles } = useContext(ArticlesContext);

  const [direction, setDirection] = useState();

  let psuedoKey = 0;

  const getDirection = (e) => {
    setDirection(e.target.value);
  };

  const handleChange = (getFilter) => {
    setFilter({
      ...filter,
      tipo: getFilter,
    });
  };

  return (
    <div className="bg-dark text-white mr-3 rounded custom-shadow">
      <h3 className="border-bottom mx-3 py-3">Filtrado acutal</h3>

      <div className="border-bottom m-3 py-3">
        <h5>Dirección</h5>
        <form
          className="input-group mb-3"
          onSubmit={(e) => {
            // esta forma  de manejar el submit
            // particularmente no me gusta, pero existe
            e.preventDefault();
            setFilter({
              ...filter,
              direction: direction,
            });
          }}
        >
          <input
            list="articles"
            name="direction"
            id="direction"
            className="form-control "
            placeholder="Buscar por dirección"
            onChange={getDirection}
          />
          <datalist id="articles">
            {articles.map((article) => (
              <Fragment>
                <option
                  key={psuedoKey++}
                  value={article.posting_location.address}
                />
                <option
                  key={psuedoKey++}
                  value={article.posting_location.city}
                />
                <option
                  key={psuedoKey++}
                  value={article.posting_location.zone}
                />
              </Fragment>
            ))}
          </datalist>

          <div className="input-group-append">
            <button className="btn btn-info" type="submit" id="button-addon2">
              Buscar
            </button>
          </div>
        </form>
      </div>

      <div className="m-3 py-3">
        <h5>Tipo de operación</h5>
        <div className="custom-control custom-radio">
          <input
            type="radio"
            id="customRadio1"
            name="customRadio"
            className="custom-control-input"
            onClick={() => handleChange(2)}
          />
          <label className="custom-control-label" for="customRadio1">
            Comprar
          </label>
        </div>
        <div className="custom-control custom-radio">
          <input
            type="radio"
            id="customRadio2"
            name="customRadio"
            className="custom-control-input"
            onClick={() => handleChange(1)}
          />
          <label className="custom-control-label" for="customRadio2">
            Alquilar
          </label>
        </div>
        <div className="custom-control custom-radio">
          <input
            type="radio"
            id="customRadio3"
            name="customRadio"
            className="custom-control-input"
            onClick={() => handleChange(3)}
          />
          <label className="custom-control-label" for="customRadio3">
            Temporal
          </label>
        </div>
        <div className="custom-control custom-radio">
          <input
            type="radio"
            id="customRadio4"
            name="customRadio"
            className="custom-control-input"
            onClick={() => handleChange(0)}
          />
          <label className="custom-control-label" for="customRadio4">
            Todos
          </label>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
