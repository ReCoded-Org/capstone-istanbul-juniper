import { Alert, Input } from "antd";
import React, { useState } from "react";
import { validateEmail } from "../../functions";
import "./index.css";

const Login = (props) => {
  const [values, setValues] = useState({ email: "", password: "" });

  const handleChange = (key, value) => {
    let newValues = Object.assign({}, values);
    newValues[key] = value;
    setValues(newValues);
  };
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let { email, password } = values;
    let errors = {};
    if (!validateEmail(email)) {
      errors["email"] = "Email format error";
    }
    if (email.trim() === "") {
      errors["email"] = "Please fill this field";
    }

    if (password.trim().length < 6) {
      errors["password"] = "Password must be at least 6 characters long";
    }
    if (password.trim() === "") {
      errors["password"] = "Please fill this field";
    }

    setErrors(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }
    if (typeof props.onSubmit == "function") {
      props.onSubmit(values);
    }
  };

  const handleFacebookAuth = () =>{ 
    if (typeof(props.onFacebookAuth) === "function"){
      props.onFacebookAuth();
    }
  }
  const handleGoogleAuth = () =>{ 
    if (typeof(props.onGoogleAuth) === "function"){
      props.onGoogleAuth();
    }
  }
  const handleGoToRegister = () => {
    if (typeof props.onGoToRegister == "function") {
      props.onGoToRegister();
    }
  };
  const handleGoToPasswordReset = ()=>{
    if (typeof props.onGoToPasswordReset == "function") {
      props.onGoToPasswordReset();
    }
  }
  return (
    <form noValidate onSubmit={handleSubmit}>
      <div className="loginContainer">
        <div className="loginContainer__loginTitle">Log in</div>
        {props.error !== "" ? (
          <Alert
            style={{ marginBottom: 10 }}
            type="error"
            showIcon
            message={props.error}
          ></Alert>
        ) : null}
        <div className="loginContainer__loginDialog">
          <div className="loginContainer__loginDialog__inputLabel">Email</div>
          <div className="loginContainer__loginDialog__input">
            <Input
              className={
                errors["email"]
                  ? "loginContainer__loginDialog__input__hasError"
                  : ""
              }
              type="email"
              value={values.email}
              onChange={(e) => {
                handleChange("email", e.target.value);
              }}
            />
            {errors["email"] ? (
              <div className="loginContainer__loginDialog__errorContainer">
                {errors["email"]}
              </div>
            ) : null}
          </div>
          <div className="loginContainer__loginDialog__inputLabel">
            Password
          </div>
          <div className="loginContainer__loginDialog__input">
            <Input
              className={
                errors["password"]
                  ? "loginContainer__loginDialog__input__hasError"
                  : ""
              }
              type="password"
              value={values.password}
              onChange={(e) => {
                handleChange("password", e.target.value);
              }}
            />
            {errors["password"] ? (
              <div className="loginContainer__loginDialog__errorContainer">
                {errors["password"]}
              </div>
            ) : null}
          </div>
          <div className="loginContainer__loginDialog__forgotPasswordContainer">
              <a href="#" onClick={(e)=>{
                e.preventDefault();
                handleGoToPasswordReset();
              }}>Forgot Password?</a>

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

          <div className="loginContainer__loginDialog__loginOptionsTitle">
            Or you can
          </div>
          <button
            onClick={() => {
              handleFacebookAuth();
            }}
            type="button"
            className="loginContainer__loginDialog__facebookLoginBtn"
          >
            Login With Facebook
          </button>
          <button
            onClick={() => {
              handleGoogleAuth();
            }}
            type="button"
            className="loginContainer__loginDialog__googleLoginBtn"
          >
            Login With Google
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;
