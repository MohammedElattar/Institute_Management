import React from "react";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import logo from "../imgs/logo.jpg";

const Header = () => {
  return (
    <header>
      <button className="toggle" type="button">
        <HiOutlineBars3BottomRight />
      </button>
      <h3>معهد</h3>
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
      </Link>
    </header>
  );
};

export default Header;
