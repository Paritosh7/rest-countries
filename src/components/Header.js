import React from "react";
import { MdOutlineDarkMode } from "react-icons/md";

const Header = () => {
  return (
    <header>
      <h2>Where in the world</h2>
      <label>
        <MdOutlineDarkMode />
        Dark Mode
      </label>
    </header>
  );
};

export default Header;
