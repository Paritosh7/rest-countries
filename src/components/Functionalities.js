import React from "react";
import styled from "styled-components/macro";
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
    <FunctionalityWrapper>
      <Search functionalitiesQueryChangeListener={searchQueryListener} />
      <Filter functionalitiesFilterChangeListener={filterListener} />
    </FunctionalityWrapper>
  );
};

const FunctionalityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 16px;
`;

export default Functionalities;
