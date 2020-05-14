import React, { createContext, useState, useEffect } from "react";

export const FilterContext = createContext();

const FilterProvider = (props) => {
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    setFilter({
      direction: "",
      tipo: 0,
    });
  }, []);

  return (
    <FilterContext.Provider
      value={{
        filter,
        setFilter,
      }}
    >
      {props.children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
