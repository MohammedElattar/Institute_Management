import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

function Aside() {
  return (
    <nav id="aside">
      <NavLink to="/" end>
        الصفحة الرئيسية
      </NavLink>
      <NavLink to="/students">الطلاب</NavLink>
      <NavLink to="/teachers">المعلمين</NavLink>
    </nav>
  );
}

export default Aside;
