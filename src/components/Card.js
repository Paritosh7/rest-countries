import React from "react";
import styled from "styled-components/macro";

const Card = ({ country }) => {
  const name = country?.name?.common;
  const population = new Intl.NumberFormat().format(country?.population);
  const region = country?.region;
  const capital = country?.capital?.[0]
    ? country?.capital?.[0]
    : "Info not available";
  const flag = country?.flags?.svg ? country?.flags?.svg : "none";

  return (
    <Article>
      <FlagImage alt={`${name} flag`} src={flag}></FlagImage>
      <Data>
        <h2>{name}</h2>
        <p>Population : {population}</p>
        <p>Region : {region}</p>
        <p>Capital : {capital}</p>
      </Data>
    </Article>
  );
};

const Article = styled.article`
  border-radius: 4px;
  background-color: var(--color-white-dark-mode-text-light-mode-elements);
  margin-bottom: 32px;
`;

const FlagImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 4px 4px 0 0;
`;

const Data = styled.section`
  padding: 0 16px 0 16px;
  padding-bottom: 32px;

  h2 {
    font-weight: 600;
    font-size: 1.125rem;
    margin: 16px 0;
  }
  p {
    margin: 8px 0;
  }
`;

export default Card;
