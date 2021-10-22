import React from "react";
import Filter from "./Filter";
import Search from "./Search";

const Functionalities = ({
  appSearchQueryChangeListener,
  appFilterChangeListener,
}) => {
  function searchQueryListener(value) {
    appSearchQueryChangeListener(value);
  }

  function filterListener(value) {
    appFilterChangeListener(value);
  }

  return (
    <div>
      <Search functionalitiesQueryChangeListener={searchQueryListener} />
      <Filter functionalitiesFilterChangeListener={filterListener} />
    </div>
  );
};

export default Functionalities;
