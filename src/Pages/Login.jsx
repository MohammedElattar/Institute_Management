import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { url } from "../config";
import { useGlobalContext } from "../context";

const Login = () => {
  const { setUser } = useGlobalContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    if (loading) return;
    setLoading(true);
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const role = [...e.target.querySelectorAll('[type="radio"]')].find(
      (e) => e.checked
    ).value;

    if (!email || !password || !role) return;

    const object = {
      role,
      email,
      password,
    };

    console.log(object);

    const request = new XMLHttpRequest();
    request.open("POST", `${url}app/controllers/user.php?method=login`);
    request.onreadystatechange = () => {
      if (request.status !== 200 || request.readyState !== 4) return;

      try {
        const data = JSON.parse(request.responseText);
        if (data["user-not-exists"]) {
          setError(true);
          return;
        }
        setUser(data.data);
        navigate("/", { replace: true });
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    request.send(JSON.stringify(object));
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h3>تسجيل الدخول</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="البريد الالكتروني"
            ref={emailRef}
            defaultValue="admin@admin.com"
          />
          <input
            type="password"
            defaultValue="admin"
            placeholder="كلمة المرور"
            ref={passwordRef}
          />
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
                defaultChecked
              />
              <label htmlFor="manager">مدير</label>
            </li>
          </ul>
          {error && <p className="error">حدث خطأ ما الرجاء اعادة المحاولة</p>}
          <button type="submit">تسجيل</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
