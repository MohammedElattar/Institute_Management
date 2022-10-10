import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
function Navbar() {
  return (
    <header id="header">
      <h3>معهد</h3>
      <Link to="/">logo</Link>
    </header>
  );
}

export default Navbar;
