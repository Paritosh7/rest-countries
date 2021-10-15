import React from "react";
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
    <main>
      <ul>
        {countriesState.map((country) => {
          const name = country.name.common;
          return (
            <li key={name}>
              <Card country={country} />
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Main;
