import React from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import styled from "styled-components/macro";

const Header = () => {
  return (
    <HeaderWrapper>
      <Heading>Where in the world?</Heading>
      <ModeWrapper>
        <MdOutlineDarkMode style={{ marginRight: "4px" }} />
        <p>Dark Mode</p>
      </ModeWrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 24px 16px;
  background-color: var(--color-white-dark-mode-text-light-mode-elements);
`;

const Heading = styled.h1`
  font-weight: 800;
`;

const ModeWrapper = styled.div`
  display: flex;
`;

export default Header;
