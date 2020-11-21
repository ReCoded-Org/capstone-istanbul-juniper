import { Alert, Button, Checkbox, Input } from "antd";
import Modal from "antd/lib/modal/Modal";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { validateEmail, hasError } from "../registerHelpers";
import ErrorMessage from "../ErrorMessage";

const Register = ({
  // check container/LoginRegister/index.jsx to see functions
  onSubmit,
  handleLogin,
  handleFacebookAuth,
  handleGoogleAuth,
  // string
  error,
}) => {
  const [t] = useTranslation();
  const [registerInformation, setRegisterInformation] = useState({
    fullName: "",
    age: "",
    email: "",
    password: "",
    isAgreed: false,
  });
  const [errors, setErrors] = useState({});
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const handleChange = (key, value) => {
    const newValues = { ...registerInformation };
    newValues[key] = value;
    setRegisterInformation(newValues);
  };

  const newErrorsObj = (registerInfo) => {
    const MAX_PASSWORD_LENGTH = 8;
    const { fullName, email, age, password, isAgreed } = registerInfo;
    const errorObj = {};
    if (fullName.trim() === "") {
      errorObj.fullName = t("register.fullName");
    }
    if (age.trim() === "") {
      errorObj.age = t("register.age");
    }
    if (password.trim().length < MAX_PASSWORD_LENGTH) {
      errorObj.password = t("register.passwordCharacter");
    }
    if (password.trim() === "") {
      errorObj.password = t("register.enterPassword");
    }
    if (validateEmail(email).length === 0) {
      errorObj.email = t("register.emailFormat");
    }
    if (!isAgreed) {
      errorObj.isAgreed = t("register.agreeOnTerms");
    }

    return errorObj;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(newErrorsObj).length > 0) {
      setErrors(newErrorsObj);
      return;
    }
    onSubmit(registerInformation);
  };

  const handleOkTerms = () => {
    handleChange("isAgreed", true);
    setIsTermsOpen(false);
  };
  const handleCancelTerms = () => {
    setIsTermsOpen(false);
  };
  const termsAndConditionsTranslation = [
    ...t("register.terms", { returnObjects: true }),
  ];

  return (
    <form noValidate onSubmit={handleSubmit}>
      <Modal
        title={t("register.termsTitle")}
        visible={isTermsOpen}
        onOk={handleOkTerms}
        onCancel={handleCancelTerms}
        footer={[
          <Button key="back" onClick={handleCancelTerms}>
            {t("register.close")}
          </Button>,
          <Button key="submit" type="primary" onClick={handleOkTerms}>
            {t("register.iAgree")}
          </Button>,
        ]}
      >
        {t("register.agreeOnTerms", { returnObjects: true })}
      </Modal>
      <div className="loginContainer">
        <div className="loginContainer__loginTitle">{t("register.create")}</div>
        {error && (
          <Alert
            style={{ marginBottom: 10 }}
            type="error"
            showIcon
            message={error}
          />
        )}
        <div className="loginContainer__loginDialog">
          <div className="loginContainer__loginDialog__inputLabel">
            {t("register.name")}
          </div>
          <div className="loginContainer__loginDialog__input">
            <Input
              className={hasError(errors.fullName)}
              value={registerInformation.fullName}
              onChange={(e) => {
                handleChange("fullName", e.target.value);
              }}
            />
            <ErrorMessage message={errors.fullName} />
          </div>
          <div className="loginContainer__loginDialog__inputLabel">
            {t("register.enterAge")}
          </div>
          <div className="loginContainer__loginDialog__input">
            <Input
              className={hasError(errors.age)}
              type="number"
              value={registerInformation.age}
              onChange={(e) => {
                handleChange("age", e.target.value);
              }}
            />
            <ErrorMessage message={errors.age} />
          </div>
          <div className="loginContainer__loginDialog__inputLabel">
            {t("register.email")}
          </div>
          <div className="loginContainer__loginDialog__input">
            <Input
              className={hasError(errors.email)}
              value={registerInformation.email}
              onChange={(e) => {
                handleChange("email", e.target.value);
              }}
            />
            <ErrorMessage message={errors.email} />
          </div>
          <div className="loginContainer__loginDialog__inputLabel">
            {t("register.password")}
          </div>
          <div className="loginContainer__loginDialog__input">
            <Input
              className={hasError(errors.password)}
              type="password"
              value={registerInformation.password}
              onChange={(e) => {
                handleChange("password", e.target.value);
              }}
            />
            <ErrorMessage message={errors.password} />
          </div>
          <div className="loginContainer__loginDialog__input">
            <Checkbox
              checked={registerInformation.agree}
              onChange={(e) => {
                handleChange("isAgreed", e.target.checked);
              }}
            >
              {t("register.iAgreeTo")}
              <Button
                type="link"
                onClick={(e) => {
                  e.preventDefault();
                  setIsTermsOpen(true);
                }}
              >
                <ul>
                  {termsAndConditionsTranslation.map((termAndCondition) => (
                    <li key={termAndCondition}>{termAndCondition}</li>
                  ))}
                </ul>
              </Button>
            </Checkbox>
            <ErrorMessage message={errors.isAgreed} />
          </div>
          <button
            type="submit"
            className="loginContainer__loginDialog__submitButton"
          >
            {t("register.createAccount")}
          </button>
          <div className="loginContainer__loginDialog__registerLabel">
            {t("register.alreadyAMember")}
          </div>
          <button
            onClick={handleLogin}
            type="button"
            className="loginContainer__loginDialog__registerButton"
          >
            {t("register.login")}
          </button>
          <div className="loginContainer__loginDialog__loginOptionsTitle">
            {t("register.orYouCan")}
          </div>
          <button
            onClick={handleFacebookAuth}
            type="button"
            className="loginContainer__loginDialog__facebookLoginBtn"
          >
            {t("register.withFacebook")}
          </button>
          <button
            onClick={handleGoogleAuth}
            type="button"
            className="loginContainer__loginDialog__googleLoginBtn"
          >
            {t("register.withGoogle")}
          </button>
        </div>
      </div>
    </form>
  );
};
export default Register;
