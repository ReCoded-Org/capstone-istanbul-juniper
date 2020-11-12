import { Alert, Input } from "antd";
import React, { useState } from "react";
import { validateEmail } from "../../functions";

const PasswordReset = (props) => {
const [passwordResetInfo, setPasswordRestInfo] = useState({ email: "" });

const handleChange = (key, value) => {
  let newValues = Object.assign({}, passwordResetInfo);
  newValues[key] = value;
  setPasswordRestInfo(newValues);
  };
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let { email } = passwordResetInfo;
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
      props.onSubmit(passwordResetInfo);
    }
  };
  const handleGoToLogin = () => {
    if (typeof props.onGoToLogin == "function") {
      props.onGoToLogin();
    }
  };

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
        {props.message}
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
              value={passwordResetInfo.email}
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
          >Password Reset
          </button>
          <button
            onClick={() => {
              handleGoToLogin();
            }}
            type="button"
            className="loginContainer__loginDialog__backToLoginButton"
          >Back To Log in
          </button>
        </div>
      </div>
    </form>
  );
};

export default PasswordReset;
