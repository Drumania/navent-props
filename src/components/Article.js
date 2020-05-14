import React, { useEffect, useState } from "react";
import ModalContactar from "./ModalContactar";

const Article = ({ article, favoritesStorage }) => {
  const [favorited, setFavorited] = useState();
  const [modal, setModal] = useState(false);

  let idArticle = article.posting_id;

  useEffect(() => {
    favoritesStorage.indexOf(idArticle) !== -1
      ? setFavorited(true)
      : setFavorited(false);
  }, [favoritesStorage, idArticle, favorited]);

  let modeHighlight;
  switch (article.publication_plan) {
    case `SUPERHIGHLIGHTED`:
      modeHighlight = `super-highlighted`;
      break;
    case "HIGHLIGHTED":
      modeHighlight = `highlighted`;
      break;
    default:
      modeHighlight = `simple`;
      break;
  }

  let price = article.posting_prices[0].price.amount,
    priceFormated = new Intl.NumberFormat("de-DE").format(price),
    currency = article.posting_prices[0].price.currency;

  let expenses;
  if (article.posting_prices[0].expenses) {
    expenses = new Intl.NumberFormat("de-DE").format(
      article.posting_prices[0].expenses.amount
    );
  }

  const customDateFormat = (thisDate) => {
    // dateStart = divido las fechas del api en dias meses años para asegurar el formato
    // dateEnd = armo una fecha con el mismo formato de hoy
    // el resutlado de la resta me da los milisegundos, lo transformo en dias

    let a_date = thisDate.split("/"),
      dateStart = new Date(a_date[2], a_date[1], a_date[0]),
      day = new Date().getDate(),
      month = new Date().getMonth() + 1,
      year = new Date().getFullYear(),
      dateEnd = new Date(year, month, day),
      days = (dateEnd - dateStart) / (60 * 60 * 24 * 1000);

    return days;
  };

  //favorite
  const favoriteOrNot = () => {
    if (favorited === false) {
      //change state
      setFavorited(true);

      //push id in array
      favoritesStorage.push(idArticle);
    } else {
      //change state
      setFavorited(false);

      //delete id in array
      let index = favoritesStorage.indexOf(idArticle);
      if (index > -1) {
        favoritesStorage.splice(index, 1);
      }
    }
    // act storage
    localStorage.setItem("arrayStorage", JSON.stringify(favoritesStorage));
  };

  return (
    <div
      className={`box row bg-white mb-4 pt-3 custom-shadow ${modeHighlight}`}
    >
      <div className="sidebar col-12 col-lg-4 bg-white">
        <a href={article.posting_slug}>
          <img
            src={article.posting_picture}
            className="img-fluid mb-3"
            alt={article.title}
          />
        </a>
        <h3>
          {currency} {priceFormated}
        </h3>
        <div className="mb-3"> {expenses && ` Expensas ${expenses}`}</div>
      </div>
      <div className="col-12 col-lg-8 pb-3">
        <div className="row">
          <small className="col-12">
            {article.operation_type.operation_type_name}
          </small>
          <a className="col-10" href={article.posting_slug}>
            <h4>{article.title}</h4>
          </a>
          <div
            className={`col-2 ${favorited ? " favorited" : " favorite"}`}
            onClick={() => favoriteOrNot()}
          ></div>
        </div>

        <strong>
          {article.posting_location.address}, {article.posting_location.city} ,{" "}
          {article.posting_location.zone}{" "}
        </strong>
        <a href={article.posting_slug}>
          <p className="mt-4">{`${article.posting_description.substring(
            0,
            180
          )}...`}</p>
        </a>
        <span className="text-black-50">
          Publicado hace {customDateFormat(article.publish_date)} días
        </span>
        <a
          className="btn btn-cstm-primary float-right"
          href="#!"
          onClick={() => setModal(true)}
        >
          Contactar
        </a>
        {modal && (
          <ModalContactar
            articleId={idArticle}
            articleTitle={article.title}
            articlePicture={article.posting_picture}
            setModal={setModal}
          />
        )}
      </div>
    </div>
  );
};

export default Article;
