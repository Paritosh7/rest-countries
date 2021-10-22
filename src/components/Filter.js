import React, { useState } from "react";

const Filter = ({ functionalitiesFilterChangeListener }) => {
  const [state, setState] = useState(() => "");

  function handleChange(eve) {
    setState(eve.target.value);
    functionalitiesFilterChangeListener(eve.target.value);
  }

  return (
    <select value={state} onChange={handleChange}>
      <option value="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};

export default Filter;
