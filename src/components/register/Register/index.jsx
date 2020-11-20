import { Alert, Button, Checkbox, Input } from "antd";
import Modal from "antd/lib/modal/Modal";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { validateEmail } from "../registerHelpers";

const MAX_PASSWORD_LENGTH = 8;

const Register = ({
  // check container/LoginRegister/index.jsx to see functions
  // function
  onSubmit,
  // function
  handleLogin,
  // function
  handleFacebookAuth,
  // function
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
  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, age, password, isAgreed } = registerInformation;
    const newErrors = {};
    if (fullName.trim() === "") {
      newErrors.fullName = t("register.fullName");
    }
    if (age.trim() === "") {
      newErrors.age = t("register.age");
    }
    if (password.trim().length < MAX_PASSWORD_LENGTH) {
      newErrors.password = t("register.passwordCharacter");
    }
    if (password.trim() === "") {
      newErrors.password = t("register.enterPassword");
    }
    if (validateEmail(email).length === 0) {
      newErrors.email = t("register.emailFormat");
    }
    if (!isAgreed) {
      newErrors.isAgreed = t("register.agreeOnTerms");
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
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
              className={
                errors.fullname &&
                "loginContainer__loginDialog__input__hasError"
              }
              value={registerInformation.fullname}
              onChange={(e) => {
                handleChange("fullname", e.target.value);
              }}
            />
            {errors.fullname && (
              <div className="loginContainer__loginDialog__errorContainer">
                {errors.fullname}
              </div>
            )}
          </div>
          <div className="loginContainer__loginDialog__inputLabel">
            {t("register.enterAge")}
          </div>
          <div className="loginContainer__loginDialog__input">
            <Input
              className={
                errors.age && "loginContainer__loginDialog__input__hasError"
              }
              type="number"
              value={registerInformation.age}
              onChange={(e) => {
                handleChange("age", e.target.value);
              }}
            />
            {errors.age && (
              <div className="loginContainer__loginDialog__errorContainer">
                {errors.age}
              </div>
            )}
          </div>
          <div className="loginContainer__loginDialog__inputLabel">
            {t("register.email")}
          </div>
          <div className="loginContainer__loginDialog__input">
            <Input
              className={
                errors.email && "loginContainer__loginDialog__input__hasError"
              }
              value={registerInformation.email}
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
            {t("register.password")}
          </div>
          <div className="loginContainer__loginDialog__input">
            <Input
              className={
                errors.password &&
                "loginContainer__loginDialog__input__hasError"
              }
              type="password"
              value={registerInformation.password}
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
            {errors.isAgreed && (
              <div className="loginContainer__loginDialog__errorContainer">
                {errors.isAgreed}
              </div>
            )}
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
