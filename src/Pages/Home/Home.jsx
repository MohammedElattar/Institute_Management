import React from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./style.scss";

function Home() {
  return (
    <div id="home">
      <div className="statistics">
        <div className="box">
          <div>
            <FaUser />
            <h3>الطلاب</h3>
          </div>
          <span className="value">5</span>
        </div>
        <div className="box">
          <div>
            <FaUser />
            <h3>المعلمين</h3>
          </div>
          <span className="value">5</span>
        </div>
        <div className="box">
          <div>
            <FaUser />
            <h3>students</h3>
          </div>
          <span className="value">5</span>
        </div>
        <div className="box">
          <div>
            <FaUser />
            <h3>students</h3>
          </div>
          <span className="value">5</span>
        </div>
        <div className="box">
          <div>
            <FaUser />
            <h3>students</h3>
          </div>
          <span className="value">5</span>
        </div>
      </div>
      <div className="hot-links">
        <ul>
          <li>
            <Link to="/">اضافة طالب</Link>
          </li>
          <li>
            <Link to="/">اضافة طالب</Link>
          </li>
          <li>
            <Link to="/">اضافة طالب</Link>
          </li>
          <li>
            <Link to="/">اضافة طالب</Link>
          </li>
          <li>
            <Link to="/">اضافة طالب</Link>
          </li>
          <li>
            <Link to="/">اضافة طالب</Link>
          </li>
          <li>
            <Link to="/">اضافة طالب</Link>
          </li>
          <li>
            <Link to="/">اضافة طالب</Link>
          </li>
          <li>
            <Link to="/">اضافة طالب</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
