import { Alert, Input } from "antd";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import { validateEmail } from "../registerHelper";

const PasswordReset = ({
  // // check containers/LoginRegister/index.jsx to see details of functions
  onSubmit,
  handleLogin,
  // string
  error,
  // string
  message,
}) => {
  const [t] = useTranslation();
  const [passwordResetInfo, setPasswordRestInfo] = useState({ email: "" });
  const handleChange = (key, value) => {
    const newValues = { ...passwordResetInfo };
    newValues[key] = value;
    setPasswordRestInfo(newValues);
  };
  const [errors, setErrors] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email } = passwordResetInfo;
    const newErrors = {};
    if (!validateEmail(email)) {
      newErrors.email = t("passReset.emailFormat");
    }
    if (email.trim() === "") {
      newErrors.email = t("passReset.fillField");
    }
    setErrors(newErrors);
    const errorNameArr = Object.keys(newErrors);
    if (errorNameArr.length > 0) {
      return;
    }
    onSubmit(passwordResetInfo);
  };
  const handleGoToLogin = () => {
    handleLogin();
  };

  return (
    <form noValidate onSubmit={handleSubmit}>
      <div className="loginContainer">
        <div className="loginContainer__loginTitle">
          {t("passReset.passwordReset")}
        </div>
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
            {t("passReset.email")}
          </div>
          <div className="loginContainer__loginDialog__input">
            <Input
              className={
                errors.email && "loginContainer__loginDialog__input__hasError"
              }
              type="email"
              value={passwordResetInfo.email}
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
          <button
            type="submit"
            className="loginContainer__loginDialog__submitButton"
          >
            {t("passReset.passwordReset")}
          </button>
          <button
            onClick={() => {
              handleGoToLogin();
            }}
            type="button"
            className="loginContainer__loginDialog__backToLoginButton"
          >
            {t("passReset.backToLogin")}
          </button>
        </div>
      </div>
    </form>
  );
};

export default PasswordReset;
