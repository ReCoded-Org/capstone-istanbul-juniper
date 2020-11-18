import { Alert, Input } from "antd";
import React, { useState } from "react";
import { validateEmail } from "../../functions";
import { useTranslation } from "react-i18next";

const PasswordReset = (props) => {
  const [t] = useTranslation();
  const [passwordResetInfo, setPasswordResetInfo] = useState({ email: "" });
  const handleChange = (key, value) => {
    let newValues = Object.assign({}, passwordResetInfo);
    newValues[key] = value;
    setPasswordResetInfo(newValues);
  };
  const [errors, setErrors] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    let { email } = passwordResetInfo;
    let errors = {};
    if (!validateEmail(email)) {
      errors["email"] = t("passwordReset.emailFormat");
    }
    if (email.trim() === "") {
      errors["email"] = t("passwordReset.fillField");
    }
    setErrors(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }
    props.onSubmit(passwordResetInfo);
  };
  const handleGoToLogin = () => {
    props.onGoToLogin();
  };

  return (
    <form noValidate onSubmit={handleSubmit}>
      <div className="loginContainer">
        <div className="loginContainer__loginTitle">
          {t("passwordReset.passwordReset")}
        </div>
        {props.error && (
          <Alert
            style={{ marginBottom: 10 }}
            type="error"
            showIcon
            message={props.error}
          ></Alert>
        )}
        {props.message}
        <div className="loginContainer__loginDialog">
          <div className="loginContainer__loginDialog__inputLabel">
            {t("passwordReset.email")}
          </div>
          <div className="loginContainer__loginDialog__input">
            <Input
              className={
                errors["email"] &&
                "loginContainer__loginDialog__input__hasError"
              }
              type="email"
              value={passwordResetInfo.email}
              onChange={(e) => {
                handleChange("email", e.target.value);
              }}
            />
            {errors["email"] && (
              <div className="loginContainer__loginDialog__errorContainer">
                {errors["email"]}
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

export default PasswordReset;
