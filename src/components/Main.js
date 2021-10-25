import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import Card from "./Card";

/**
 * Todo:
 * 1. use status state => idle, pending and resolve reject.
 * 2. Adding error boundary
 */

const Main = ({ countries }) => {
  const [countriesState, setCountriesState] = React.useState(() =>
    countries ? countries : []
  );

  React.useEffect(() => {
    setCountriesState(countries);
  }, [countries]);

  return (
    <MainWrapper>
      <ListWrapper>
        {countriesState.map((country) => {
          const name = country?.name?.common;
          return (
            <List key={name}>
              <Card country={country} />
            </List>
          );
        })}
      </ListWrapper>
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  margin-top: 24px;
`;

const ListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: 16px;
  margin-right: 16px;
`;

const List = styled.li`
  flex: 1 1 200px;
  min-width: 200px;
  max-width: 320px;
  margin-left: 16px;
  margin-right: 16px;
`;

export default Main;
