import React from "react";
import { FaChalkboardTeacher, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h3>لوحة التحكم</h3>
      <div className="container">
        <div className="cards">
          <div className="card" style={{ backgroundColor: "#f2cc5c" }}>
            <div className="icon">
              <FaUsers />
            </div>
            <div className="info">
              <h3>5</h3>
              <p>الطلاب</p>
            </div>
          </div>
          <div className="card" style={{ backgroundColor: "#503e9d" }}>
            <div className="icon">
              <FaChalkboardTeacher />
            </div>
            <div className="info">
              <h3>5</h3>
              <p>المعلمين</p>
            </div>
          </div>
          <div className="card" style={{ backgroundColor: "#eb6398" }}>
            <div className="icon">
              <FaUsers />
            </div>
            <div className="info">
              <h3>5</h3>
              <p>الصفوف والمواد الدراسية</p>
            </div>
          </div>
        </div>
        <div className="links">
          <ul>
            <li>
              <Link to="add-student">اضافة طالب</Link>
            </li>
            <li>
              <Link to="add-student">اضافة طالب</Link>
            </li>
            <li>
              <Link to="add-student">اضافة طالب</Link>
            </li>
            <li>
              <Link to="add-student">اضافة طالب</Link>
            </li>
            <li>
              <Link to="add-student">اضافة طالب</Link>
            </li>
            <li>
              <Link to="add-student">اضافة طالب</Link>
            </li>
            <li>
              <Link to="add-student">اضافة طالب</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
