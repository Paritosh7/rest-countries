import React from "react";
import Card from "./Card";

/**
 * Todo:
 * 1. use status state => idle, pending and resolve reject.
 * 2. Adding error boundary
 */

const Main = ({ countries }) => {
  return (
    <main>
      <ul>
        {countries.map((country) => {
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
