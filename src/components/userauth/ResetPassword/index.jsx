import { Alert, Input } from "antd";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import { validateEmail, createErrorClassName } from "../registerHelper";
import ErrorMessage from "../ErrorMessage";

const ResetPassword = ({
  // check containers/LoginRegister/index.jsx to see details of functions
  onSubmit,
  handleLogin,
  // string
  error,
  // string. It is displayed when wrong data is used by user.
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
    if (!validateEmail(email)) {
      errors.email = t("passwordReset.emailFormat");
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
          {t("passwordReset.passwordReset")}
        </div>
        {error && (
          <Alert className="authAlert" type="error" showIcon message={error} />
        )}
        {message}
        <div className="loginContainer__loginDialog">
          <div className="loginContainer__loginDialog__inputLabel">
            {t("passwordReset.email")}
          </div>
          <div className="loginContainer__loginDialog__input">
            <Input
              className={createErrorClassName(errors.email)}
              type="email"
              value={passwordResetInfo.email}
              onChange={(e) => {
                handleChange("email", e.target.value);
              }}
            />
            <ErrorMessage message={errors.email} />
          </div>
          <button
            type="submit"
            className="loginContainer__loginDialog__submitButton"
          >
            {t("passwordReset.passwordReset")}
          </button>
          <button
            onClick={() => {
              handleGoToLogin();
            }}
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

export default ResetPassword;
