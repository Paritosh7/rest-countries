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
      <SearchIconWrapper aria-label="search-input">
        <AiOutlineSearch
          style={{
            height: "100%",
            width: "90%",
            color: "var(--color-dark-grey-light-mode-input)",
          }}
        />
      </SearchIconWrapper>
      <SearchInput
        name="search-input"
        type="search"
        placeholder="Search for country..."
        onChange={handleQueryChange}
      ></SearchInput>
    </SearchWrapper>
  );
};

const SearchWrapper = styled.div`
  /* border: 1px solid var(--color-white-dark-mode-text-light-mode-elements); */
  display: flex;
  padding-left: 24px;
  border-radius: 4px;
  background-color: var(--color-white-dark-mode-text-light-mode-elements);
`;

const SearchIconWrapper = styled.label`
  width: 20px;
`;

const SearchInput = styled.input`
  padding: 12px 0;
  padding-left: 16px;
  flex: 1 1 70%;
  border: none;
  border-radius: 4px;

  ::placeholder {
    font-size: 1rem;
    color: var(--color-dark-grey-light-mode-input);
    opacity: 0.3;
  }
`;

export default Search;
