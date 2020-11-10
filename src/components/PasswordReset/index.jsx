import { Alert, Input } from "antd";
import React, { useState } from "react";
import { validateEmail } from "../../functions";
import "./index.css";

const Login = (props) => {
  const [values, setValues] = useState({ email: "" });

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

    setErrors(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }
    if (typeof props.onSubmit == "function") {
      props.onSubmit(values);
    }
  };

  const handleGoToRegister = () => {
    if (typeof props.onGoToRegister == "function") {
      props.onGoToRegister();
    }
  };

  const handleGoToLogin = () => {
    if (typeof props.onGoToLogin == "function") {
      props.onGoToLogin();
    }
  };

  const handleGoToPasswordReset = ()=>{
    if (typeof props.goToPasswordReset == "function") {
      props.goToPasswordReset();
    }
  }
  return (
    <form noValidate onSubmit={handleSubmit}>
      <div className="loginContainer">
        <div className="loginContainer__loginTitle">Password Reset</div>
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
          
          <button
            type="submit"
            className="loginContainer__loginDialog__submitButton"
          >
            Password Reset
          </button>
         
       

          <button
            onClick={() => {
              handleGoToLogin();
            }}
            type="button"
            className="loginContainer__loginDialog__registerButton"
          >
            Back To Log in
          </button>
          
          
        </div>
      </div>
    </form>
  );
};

export default Login;
