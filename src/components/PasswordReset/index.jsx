import { Alert, Input } from "antd";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { validateEmail } from "../../functions";
import "./index.css";

const PasswordReset = ({
  // props are located in containers/LoginRegister/index.jsx
  // function
  onSubmit,
  // function
  onGoToLogin,
  // string
  error,
  // string
  message,
}) => {
  const [t] = useTranslation();
  const [passwordResetInfo, setPasswordResetInfo] = useState({ email: "" });
  const handleChange = (key, value) => {
    const newValues = { ...passwordResetInfo };
    newValues[key] = value;
    setPasswordResetInfo(newValues);
  };
  const [errors, setErrors] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email } = passwordResetInfo;
    const newErrors = {};
    if (validateEmail(email).length === 0) {
      newErrors.email = t("passwordReset.emailFormat");
      setErrors(newErrors);
      return;
    }
    onSubmit(passwordResetInfo);
  };
  return (
    <form noValidate onSubmit={handleSubmit}>
      <div className="loginContainer">
        <div className="loginContainer__loginTitle">
          {t("passwordReset.passwordReset")}
        </div>
        {error && (
          <Alert
            className="loginContainer__alert"
            type="error"
            showIcon
            message={error}
          />
        )}
        {message}
        <div className="loginContainer__loginDialog">
          <div className="loginContainer__loginDialog__inputLabel">
            {t("passwordReset.email")}
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
            {t("passwordReset.passwordReset")}
          </button>
          <button
            onClick={onGoToLogin}
            type="button"
            className="loginContainer__loginDialog__backToLoginButton"
          >
            {t("passwordReset.backToLogin")}
          </button>
        </div>
      </div>
    </form>
  );
};

export default PasswordReset;
