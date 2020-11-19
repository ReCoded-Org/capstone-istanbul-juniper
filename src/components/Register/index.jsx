import { Alert, Button, Checkbox, Input } from "antd";
import Modal from "antd/lib/modal/Modal";
import React, { useState } from "react";
import { validateEmail } from "../../functions";
import { useTranslation } from "react-i18next";

const Register = (props) => {
  const [t] = useTranslation();
  const maxLenghtPassword = 8;
  const [registerInformation, setRegisterInformation] = useState({
    fullName: "",
    age: "",
    email: "",
    password: "",
    agree: false,
  });
  const [errors, setErrors] = useState({});
  const [termsOpen, setTermsOpen] = useState(false);
  const handleChange = (key, value) => {
    let newValues = Object.assign({}, registerInformation);
    newValues[key] = value;
    setRegisterInformation(newValues);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let { fullName, email, age, password, agree } = registerInformation;
    let errors = {};
    if (fullName.trim() === "") {
      errors["fullName"] = t("register.fullName");
    }
    if (email.trim() === "") {
      errors["email"] = t("register.validEmail");
    }
    if (age.trim() === "") {
      errors["age"] = t("register.age");
    }
    if (password.trim().length < maxLenghtPassword) {
      errors["password"] = t("register.passwordCharacter");
    }
    if (password.trim() === "") {
      errors["password"] = t("register.enterPassword");
    }
    if (!validateEmail(email)) {
      errors["email"] = t("register.emailFormat");
    }
    if (!agree) {
      errors["agree"] = t("register.agreeOnTerms");
    }
    setErrors(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }
    props.onSubmit(registerInformation);
  };
  const handleGoToLogin = () => {
    props.onGoToLogin();
  };
  const handleFacebookAuth = () => {
    props.onFacebookAuth();
  };
  const handleGoogleAuth = () => {
    props.onGoogleAuth();
  };
  const handleOkTerms = () => {
    handleChange("agree", true);
    setTermsOpen(false);
  };
  const handleCancelTerms = () => {
    setTermsOpen(false);
  };
  const termsAndConditionsTranslation = [
    ...t("register.terms",{ returnObjects: true,})
  ]

  return (
    <form noValidate onSubmit={handleSubmit}>
      <Modal
        title={t("register.termsTitle")}
        visible={termsOpen}
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
      >{t("register.agreeOnTerms",{ returnObjects: true,})}
      </Modal>
      <div className="loginContainer">
        <div className="loginContainer__loginTitle">{t("register.creat")}</div>
        {props.error && (
          <Alert
            style={{ marginBottom: 10 }}
            type="error"
            showIcon
            message={props.error}
          ></Alert>
        )}
        <div className="loginContainer__loginDialog">
          <div className="loginContainer__loginDialog__inputLabel">
            {t("register.name")}
          </div>
          <div className="loginContainer__loginDialog__input">
            <Input
              className={
                errors["fullname"] &&
                "loginContainer__loginDialog__input__hasError"
              }
              value={registerInformation.fullname}
              onChange={(e) => {
                handleChange("fullname", e.target.value);
              }}
            />
            {errors["fullname"] && (
              <div className="loginContainer__loginDialog__errorContainer">
                {errors["fullname"]}
              </div>
            )}
          </div>
          <div className="loginContainer__loginDialog__inputLabel">
            {t("register.enterAge")}
          </div>
          <div className="loginContainer__loginDialog__input">
            <Input
              className={
                errors["age"] && "loginContainer__loginDialog__input__hasError"
              }
              type="number"
              value={registerInformation.age}
              onChange={(e) => {
                handleChange("age", e.target.value);
              }}
            />
            {errors["age"] && (
              <div className="loginContainer__loginDialog__errorContainer">
                {errors["age"]}
              </div>
            )}
          </div>
          <div className="loginContainer__loginDialog__inputLabel">
            {t("register.email")}
          </div>
          <div className="loginContainer__loginDialog__input">
            <Input
              className={
                errors["email"] &&
                "loginContainer__loginDialog__input__hasError"
              }
              value={registerInformation.email}
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
          <div className="loginContainer__loginDialog__inputLabel">
            {t("register.password")}
          </div>
          <div className="loginContainer__loginDialog__input">
            <Input
              className={
                errors["password"] &&
                "loginContainer__loginDialog__input__hasError"
              }
              type="password"
              value={registerInformation.password}
              onChange={(e) => {
                handleChange("password", e.target.value);
              }}
            />
            {errors["password"] && (
              <div className="loginContainer__loginDialog__errorContainer">
                {errors["password"]}
              </div>
            )}
          </div>
          <div className="loginContainer__loginDialog__input">
            <Checkbox
              checked={registerInformation.agree}
              onChange={(e) => {
                handleChange("agree", e.target.checked);
              }}
            >
              {t("register.iAgreeTo")}
              <a
                href="/#"
                onClick={(e) => {
                  e.preventDefault();
                  setTermsOpen(true);
                }}
              >
                <ul>{termsAndConditionsTranslation.map(termAndCondiction => <li>{termAndCondiction}</li>)}</ul>
              </a>
            </Checkbox>
            {errors["agree"] && (
              <div className="loginContainer__loginDialog__errorContainer">
                {errors["agree"]}
              </div>
            )}
          </div>
          <button
            type="submit"
            className="loginContainer__loginDialog__submitButton"
          >
            {t("register.creatAccount")}
          </button>
          <div className="loginContainer__loginDialog__registerLabel">
            {t("register.alreadyAMember")}
          </div>
          <button
            onClick={() => {
              handleGoToLogin();
            }}
            type="button"
            className="loginContainer__loginDialog__registerButton"
          >
            {t("register.login")}
          </button>
          <div className="loginContainer__loginDialog__loginOptionsTitle">
            {t("register.orYouCan")}
          </div>
          <button
            onClick={() => {
              handleFacebookAuth();
            }}
            type="button"
            className="loginContainer__loginDialog__facebookLoginBtn"
          >
            {t("register.withFacebook")}
          </button>
          <button
            onClick={() => {
              handleGoogleAuth();
            }}
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
