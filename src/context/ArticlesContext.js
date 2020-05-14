import React, { createContext, useState, useEffect, useContext } from "react";
import { FilterContext } from "./FilterContext";
import { postings } from "../mockedPostings.js";

export const ArticlesContext = createContext();

const ArticlesProvider = (props) => {
  const [articles, setArticles] = useState([]);
  const { filter } = useContext(FilterContext);

  // favorites Id from storage
  let favoritesStorage = JSON.parse(localStorage.getItem("arrayStorage"));
  if (!favoritesStorage) {
    favoritesStorage = [];
  }

  useEffect(() => {
    //filter
    const { tipo, direction } = filter;
    let postingsFilters = postings;

    //direction
    console.log(postings);

    if (direction) {
      postingsFilters = postings.filter(
        (article) =>
          article.posting_location.address === direction ||
          article.posting_location.zone === direction ||
          article.posting_location.city === direction
      );
    }

    // 2 = Comprar | 1 = Alquilar | 3 = Temporal | 0 = Todos
    if (tipo !== 0) {
      postingsFilters = postingsFilters.filter(
        (article) => article.operation_type.operation_type_id === tipo
      );
    }

    //super highlighted
    let postingsSuper = postingsFilters.filter(
      (article) => article.publication_plan === "SUPERHIGHLIGHTED"
    );

    //highlighted
    let postingsHighlight = postingsFilters.filter(
      (article) => article.publication_plan === "HIGHLIGHTED"
    );

    //simple
    let postingsSimple = postingsFilters.filter(
      (article) => article.publication_plan === "SIMPLE"
    );

    //final sort
    const articlesSort = [
      ...postingsSuper,
      ...postingsHighlight,
      ...postingsSimple,
    ];

    setArticles(articlesSort);
  }, [filter]);

  return (
    <ArticlesContext.Provider
      value={{
        articles,
        favoritesStorage,
      }}
    >
      {props.children}
    </ArticlesContext.Provider>
  );
};

export default ArticlesProvider;
