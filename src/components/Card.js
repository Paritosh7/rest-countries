import React from "react";

const Card = ({ country }) => {
  const name = country?.name?.common;
  const population = country?.population;
  const region = country?.region;
  const capital = country?.capital?.[0]
    ? country?.capital?.[0]
    : "Info not available";
  const flag = country?.flags?.svg ? country?.flags?.svg : "none";

  return (
    <article>
      <img alt={`${name} flag`} src={flag} style={{ width: "100%" }}></img>
      <section>
        <h3>{name}</h3>
        <p>Population : {population}</p>
        <p>Region : {region}</p>
        <p>Capital : {capital}</p>
      </section>
    </article>
  );
};

export default Card;
