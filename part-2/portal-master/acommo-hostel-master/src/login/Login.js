import React, { useState } from "react";
import "./Login.css";
import email from "./email.jpg";
import pass from "./pass.png";
// import profile from "./a.png"
const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    //console.log(data)
  };

  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image"></div>
          </div>
          <div>
            <h1>STAFF</h1>
            <form onSubmit={submitHandler}>
              <div>
                <img src={email} alt="email" className="email" />
                <input
                  type="text"
                  placeholder="user name"
                  name="email"
                  onChange={changeHandler}
                  className="name"
                />
              </div>
              <div className="second-input">
                <img src={pass} alt="pass" className="email" />
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  onChange={changeHandler}
                  className="name"
                />
              </div>
              <div className="login-button">
                <button className="btn" type="submit">
                  Login
                </button>
              </div>
              <p className="link">
                <a href="#">Forgot password ?</a> Or<a href="#">ADMIN</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
