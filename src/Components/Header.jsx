import React from "react";
import { Link } from "react-router-dom";
import logo from "../imgs/logo.jpg";

const Header = () => {
  return (
    <header>
      <h3>معهد</h3>
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
      </Link>
    </header>
  );
};

export default Header;
