import React, { useState } from "react";
import styled from "styled-components/macro";
import {
  ListboxButton,
  ListboxInput,
  ListboxList,
  ListboxOption,
  ListboxPopover,
} from "@reach/listbox";
import { AiOutlineArrowDown } from "react-icons/ai";

const Filter = ({ functionalitiesFilterChangeListener }) => {
  const [state, setState] = useState(() => "All");

  function handleChange(value) {
    console.log(typeof value);
    setState(value);
    functionalitiesFilterChangeListener(value);
  }

  return (
    <SelectListWrapper value={state} onChange={handleChange}>
      <SelectButton>
        {(props) => (
          <>
            <label>{props.label}</label>
            <span>
              <AiOutlineArrowDown />
            </span>
          </>
        )}
      </SelectButton>
      <Popover>
        <ListboxList>
          <ListItem value="All">Filter by Region (All)</ListItem>
          <ListItem value="Africa">Africa</ListItem>
          <ListItem value="Americas">America</ListItem>
          <ListItem value="Asia">Asia</ListItem>
          <ListItem value="Europe">Europe</ListItem>
          <ListItem value="Oceania">Oceania</ListItem>
        </ListboxList>
      </Popover>
    </SelectListWrapper>
  );
};

const SelectListWrapper = styled(ListboxInput)`
  margin-top: 32px;
  width: 55%;
  border: none;
  border-radius: 4px;
  color: var(--color-very-dark-blue-light-mode-text);
  background-color: var(--color-white-dark-mode-text-light-mode-elements);
`;

const SelectButton = styled(ListboxButton)`
  display: flex;
  justify-content: space-between;

  label {
    margin-left: 16px;
    padding: 10px 0;
  }

  span {
    margin-right: 16px;
    padding: 10px 0;
  }
`;

const Popover = styled(ListboxPopover)`
  background-color: var(--color-white-dark-mode-text-light-mode-elements);
  margin-top: 4px;
  border-radius: 4px;
  padding: 8px 0;
`;

const ListItem = styled(ListboxOption)`
  padding: 8px 16px;
`;

export default Filter;
