import React from "react";
import Filter from "./Filter";
import Search from "./Search";

const Functionalities = ({ appSearchQueryChangeListener }) => {
  function searchQueryListener(value) {
    appSearchQueryChangeListener(value);
  }

  return (
    <div>
      <Search functionalitiesQueryChangeListener={searchQueryListener} />
      <Filter />
    </div>
  );
};

export default Functionalities;
