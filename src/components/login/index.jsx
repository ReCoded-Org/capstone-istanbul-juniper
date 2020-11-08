import { Input } from "antd";
import React, { useState } from "react";
import "./index.css";

const Login = (props) => {
  const [values, setValues] = useState({ email: "", password: "" });

  const handleChange = (key, value) => {
    let newValues = Object.assign({}, values);
    newValues[key] = value;
    setValues(newValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (typeof props.onSubmit == "function") {
      props.onSubmit(values);
    }
  };
  const handleGoToRegister = () => {
    if (typeof props.onGoToRegister == "function") {
      props.onGoToRegister();
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="loginContainer">
        <div className="loginContainer__loginTitle">Log in</div>
        <div className="loginContainer__loginDialog">
          <div className="loginContainer__loginDialog__inputLabel">Email</div>
          <div className="loginContainer__loginDialog__input">
            <Input
              type="email"
              value={values.email}
              onChange={(e) => {
                handleChange("email", e.target.value);
              }}
            />
          </div>
          <div className="loginContainer__loginDialog__inputLabel">
            Password
          </div>
          <div className="loginContainer__loginDialog__input">
            <Input
              type="password"
              value={values.password}
              onChange={(e) => {
                handleChange("password", e.target.value);
              }}
            />
          </div>

          <button
            type="submit"
            className="loginContainer__loginDialog__submitButton"
          >
            Log in
          </button>
          <div className="loginContainer__loginDialog__registerLabel">
            New at junpier? Register now
          </div>
          <button
            onClick={() => {
              handleGoToRegister();
            }}
            type="button"
            className="loginContainer__loginDialog__registerButton"
          >
            Create an account
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;
