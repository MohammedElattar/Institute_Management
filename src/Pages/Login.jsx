import React, { useRef, useState } from "react";
import { useGlobalContext } from "../context";
import { Bars } from "react-loading-icons";
import { useNavigate } from "react-router-dom";

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

    if (email && password) {
      setUser({
        email: email,
        password: password,
        id: "KGjafkguAFKJgafs14",
      });
      navigate("/", { replace: true });
    }
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h3>تسجيل الدخول</h3>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="البريد الالكتروني" ref={emailRef} />
          <input type="password" placeholder="كلمة المرور" ref={passwordRef} />
          <button type="submit">تسجيل {loading && <Bars />}</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
