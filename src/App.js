import React from "react";
import "./App.css";
import FilterProvider from "./context/FilterContext";
import ArticlesProvider from "./context/ArticlesContext";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ListArticles from "./components/ListArticles";

function App() {
  return (
    <FilterProvider>
      <ArticlesProvider>
        <Header />
        <div className="container custom-padding-top">
          <div className="row">
            <aside className="col-12 col-lg-4">
              <Sidebar />
            </aside>
            <main className="col-12 col-lg-8">
              <ListArticles />
            </main>
          </div>
        </div>
      </ArticlesProvider>
    </FilterProvider>
  );
}

export default App;
