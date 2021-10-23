import React from "react";
import styled from "styled-components/macro";
import { AiOutlineSearch } from "react-icons/ai";

const Search = ({ functionalitiesQueryChangeListener }) => {
  const [query, setQuery] = React.useState(() => "");

  function handleQueryChange(eve) {
    console.log(eve.target.value);
    setQuery(query);
    functionalitiesQueryChangeListener(eve.target.value);
  }

  return (
    <SearchWrapper>
      <AiOutlineSearch />
      <SearchInput
        type="search"
        placeholder="Search for country"
        onChange={handleQueryChange}
      ></SearchInput>
    </SearchWrapper>
  );
};

const SearchWrapper = styled.div`
  /* border: 1px solid var(--color-white-dark-mode-text-light-mode-elements); */
  display: flex;
  align-items: center;
  padding-left: 16px;
  border-radius: 4px;
  background-color: var(--color-white-dark-mode-text-light-mode-elements);
`;

const SearchInput = styled.input`
  padding: 12px 0;
  padding-left: 16px;
  flex: 1 1 70%;
  border: none;
  border-radius: 4px;
`;

export default Search;
