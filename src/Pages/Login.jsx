import React, { useRef, useState } from "react";
import { useGlobalContext } from "../context";
import { Bars } from "react-loading-icons";
import { useNavigate } from "react-router-dom";
import { url } from "../config";
import axios from "axios";

const Login = () => {
  const { setUser } = useGlobalContext();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const role = [...e.target.querySelectorAll('[type="radio"]')].find(
      (e) => e.checked
    )?.value;

    // console.log(email, password, role);

    const object = {
      role,
      email,
      password,
    };

    // axios.post(`${url}app/controllers/user.php?method=login`, object);
    const request = new XMLHttpRequest();
    request.open("POST", `${url}app/controllers/user.php?method=login`);
    request.onreadystatechange = () => {
      if (request.status === 200 && request.readyState === 4) {
        console.log(request.responseText);
        const res = JSON.parse(request.responseText);
        console.log(res)
      }
    };
    request.send(JSON.stringify(object));
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h3>تسجيل الدخول</h3>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="البريد الالكتروني" ref={emailRef} />
          <input type="password" placeholder="كلمة المرور" ref={passwordRef} />
          <ul className="radio">
            <li>
              <input
                type="radio"
                id="teacher"
                name="role"
                value="teacher"
                required
              />
              <label htmlFor="teacher">معلم</label>
            </li>
            <li>
              <input
                type="radio"
                id="student"
                name="role"
                value="student"
                required
              />
              <label htmlFor="student">طالب</label>
            </li>
            <li>
              <input
                type="radio"
                id="manager"
                name="role"
                value="manager"
                required
              />
              <label htmlFor="manager">مدير</label>
            </li>
          </ul>
          <button type="submit">تسجيل {loading && <Bars />}</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
