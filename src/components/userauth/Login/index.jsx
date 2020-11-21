import { Alert, Input, Button } from "antd";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { validateEmail } from "../registerHelper";

const Login = ({
  // check containers/LoginRegister/index.jsx to see details of functions
  onSubmit,
  handleFacebookAuth,
  handleGoogleAuth,
  handleRegister,
  handlePasswordReset,
  // string
  error,
  // string
  message,
}) => {
  const [t] = useTranslation();
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });
  const handleChange = (key, value) => {
    const newValues = { ...loginCredentials };
    newValues[key] = value;
    setLoginCredentials(newValues);
  };
  const [errors, setErrors] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = loginCredentials;
    const newErrors = {};
    if (!validateEmail(email)) {
      newErrors.email = "Email format error";
    }
    if (email.trim() === "") {
      newErrors.email = "Please fill this field";
    }
    if (password.trim().length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }
    if (password.trim() === "") {
      newErrors.password = "Please fill this field";
    }
    setErrors(newErrors);
    const errorNameArr = Object.keys(newErrors);
    if (errorNameArr.length > 0) {
      return;
    }
    onSubmit(loginCredentials);
  };

  return (
    <form noValidate onSubmit={handleSubmit}>
      <div className="loginContainer">
        <div className="loginContainer__loginTitle">{t("login.login")}</div>
        {error && (
          <Alert
            style={{ marginBottom: 10 }}
            type="error"
            showIcon
            message={error}
          />
        )}
        {message}
        <div className="loginContainer__loginDialog">
          <div className="loginContainer__loginDialog__inputLabel">
            {t("login.email")}
          </div>
          <div className="loginContainer__loginDialog__input">
            <Input
              className={
                errors.email && "loginContainer__loginDialog__input__hasError"
              }
              type="email"
              value={loginCredentials.email}
              onChange={(e) => {
                handleChange("email", e.target.value);
              }}
            />
            {errors.email && (
              <div className="loginContainer__loginDialog__errorContainer">
                {errors.email}
              </div>
            )}
          </div>
          <div className="loginContainer__loginDialog__inputLabel">
            {t("login.password")}
          </div>
          <div className="loginContainer__loginDialog__input">
            <Input
              className={
                errors.password &&
                "loginContainer__loginDialog__input__hasError"
              }
              type="password"
              value={loginCredentials.password}
              onChange={(e) => {
                handleChange("password", e.target.value);
              }}
            />
            {errors.password && (
              <div className="loginContainer__loginDialog__errorContainer">
                {errors.password}
              </div>
            )}
          </div>
          <div className="loginContainer__loginDialog__forgotPasswordContainer">
            <Button
              type="link"
              onClick={(e) => {
                e.preventDefault();
                handlePasswordReset();
              }}
            >
              {t("login.forgotPassword")}
            </Button>
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
            onClick={handleRegister}
            type="button"
            className="loginContainer__loginDialog__registerButton"
          >
            {t("login.creat")}
          </button>
          <div className="loginContainer__loginDialog__loginOptionsTitle">
            {t("login.oryoucan")}
          </div>
          <button
            onClick={handleFacebookAuth}
            type="button"
            className="loginContainer__loginDialog__facebookLoginBtn"
          >
            {t("login.withFacebook")}
          </button>
          <button
            onClick={handleGoogleAuth}
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
