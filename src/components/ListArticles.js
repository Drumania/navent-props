import React, { Fragment, useContext } from "react";
import { ArticlesContext } from "../context/ArticlesContext";
import Article from "./Article";

const ListArticles = () => {
  const { articles, favoritesStorage } = useContext(ArticlesContext);

  return (
    <Fragment>
      {articles.length >= 1
        ? articles.map((article) => (
            <Article
              key={article.posting_id}
              article={article}
              favoritesStorage={favoritesStorage}
            />
          ))
        : "No hay propiedades disponibles."}
    </Fragment>
  );
};

export default ListArticles;
