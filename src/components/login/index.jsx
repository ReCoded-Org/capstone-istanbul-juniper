import { Alert, Input } from "antd";
import React, { useState } from "react";
import { validateEmail } from "../../functions";
import { useTranslation } from "react-i18next";

const Login = (props) => {
  const [t] = useTranslation();
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });
  const handleChange = (key, value) => {
    let newValues = Object.assign({}, loginCredentials);
    newValues[key] = value;
    setLoginCredentials(newValues);
  };
  const [errors, setErrors] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();

    let { email, password } = loginCredentials;
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
      props.onSubmit(loginCredentials);
    }
  };
  const handleFacebookAuth = () => {
    if (typeof props.onFacebookAuth === "function") {
      props.onFacebookAuth();
    }
  };
  const handleGoogleAuth = () => {
    if (typeof props.onGoogleAuth === "function") {
      props.onGoogleAuth();
    }
  };
  const handleGoToRegister = () => {
    if (typeof props.onGoToRegister == "function") {
      props.onGoToRegister();
    }
  };
  const handleGoToPasswordReset = () => {
    if (typeof props.onGoToPasswordReset == "function") {
      props.onGoToPasswordReset();
    }
  };

  return (
    <form noValidate onSubmit={handleSubmit}>
      <div className="loginContainer">
        <div className="loginContainer__loginTitle">{t("login.login")}</div>
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
          <div className="loginContainer__loginDialog__inputLabel">
            {t("login.email")}
          </div>
          <div className="loginContainer__loginDialog__input">
            <Input
              className={
                errors["email"]
                  ? "loginContainer__loginDialog__input__hasError"
                  : ""
              }
              type="email"
              value={loginCredentials.email}
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
            {t("login.password")}
          </div>
          <div className="loginContainer__loginDialog__input">
            <Input
              className={
                errors["password"]
                  ? "loginContainer__loginDialog__input__hasError"
                  : ""
              }
              type="password"
              value={loginCredentials.password}
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
            <a
              href="/#"
              onClick={(e) => {
                e.preventDefault();
                handleGoToPasswordReset();
              }}
            >
              {t("login.forgotPassword")}
            </a>
          </div>
          <button
            type="submit"
            className="loginContainer__loginDialog__submitButton"
          >
            {t("login.login")}
          </button>
          <div className="loginContainer__loginDialog__registerLabel">
            {t("login.new")}
          </div>
          <button
            onClick={() => {
              handleGoToRegister();
            }}
            type="button"
            className="loginContainer__loginDialog__registerButton"
          >
            {t("login.creat")}
          </button>
          <div className="loginContainer__loginDialog__loginOptionsTitle">
            {t("login.oryoucan")}
          </div>
          <button
            onClick={() => {
              handleFacebookAuth();
            }}
            type="button"
            className="loginContainer__loginDialog__facebookLoginBtn"
          >
            {t("login.withFacebook")}
          </button>
          <button
            onClick={() => {
              handleGoogleAuth();
            }}
            type="button"
            className="loginContainer__loginDialog__googleLoginBtn"
          >
            {t("login.withGoogle")}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;
