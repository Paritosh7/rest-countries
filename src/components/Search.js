import React from "react";

const Search = ({ functionalitiesQueryChangeListener }) => {
  const [query, setQuery] = React.useState(() => "");

  function handleQueryChange(eve) {
    console.log(eve.target.value);
    setQuery(query);
    functionalitiesQueryChangeListener(eve.target.value);
  }

  return (
    <div>
      <input
        type="search"
        placeholder="Search for country"
        onChange={handleQueryChange}
      ></input>
    </div>
  );
};

export default Search;
