import React, { useState } from "react";
import styled from "styled-components/macro";

const Filter = ({ functionalitiesFilterChangeListener }) => {
  const [state, setState] = useState(() => "");

  function handleChange(eve) {
    setState(eve.target.value);
    functionalitiesFilterChangeListener(eve.target.value);
  }

  return (
    <SelectWrapper value={state} onChange={handleChange}>
      <option value="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </SelectWrapper>
  );
};

const SelectWrapper = styled.select`
  margin-top: 32px;
  padding: 10px 16px;
  width: 55%;
  border: none;
  border-radius: 4px;
  color: hsl(0, 0%, 52%);
`;

export default Filter;
