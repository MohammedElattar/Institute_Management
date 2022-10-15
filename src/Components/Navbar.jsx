import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaChalkboardTeacher, FaUsers } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="nav">
      <NavLink to="/" end>
        <FaHome />
        الصفحة الرئيسية
      </NavLink>
      <NavLink to="/students">
        <FaUsers />
        الطلاب
      </NavLink>
      <NavLink to="/teachers">
        <FaChalkboardTeacher />
        المعلمين
      </NavLink>
    </nav>
  );
};

export default Navbar;
