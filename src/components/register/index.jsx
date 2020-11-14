import { Alert, Button, Checkbox, Input } from "antd";
import Modal from "antd/lib/modal/Modal";
import React, { useState } from "react";
import { validateEmail } from "../../functions";
import { useTranslation } from "react-i18next";

const Register = (props) => {
  const [t] = useTranslation();
  const [registerInformation, setRegisterInformation] = useState({
    fullname: "",
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
    let { fullname, email, age, password, agree } = registerInformation;

    let errors = {};
    if (fullname.trim() === "") {
      errors["fullname"] = t("register.fullName");
    }
    if (email.trim() === "") {
      errors["email"] = t("register.validEmail");
    }
    if (age.trim() === "") {
      errors["age"] = t("register.age");
    }
    if (password.trim().length < 6) {
      errors["password"] = t("register.passwordCharacter"); ;
    }
    if (password.trim() === "") {
      errors["password"] = t("register.enterPassword");
    }
    if (!validateEmail(email)) {
      errors["email"] = t("register.emailFormat");
    }
    if (!agree) {
      errors["agree"] = t("register.terms");
    }
    setErrors(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }
    if (typeof props.onSubmit == "function") {
      props.onSubmit(registerInformation);
    }
  };

  const handleGoToLogin = () => {
    if (typeof props.onGoToLogin == "function") {
      props.onGoToLogin();
    }
  };
  const handleFacebookAuth = () =>{ 
    if (typeof(props.onFacebookAuth) === "function"){
      props.onFacebookAuth();
    }
  }
  const handleGoogleAuth = () =>{ 
    if (typeof(props.onGoogleAuth) === "function"){
      props.onGoogleAuth();
    }
  }
  const handleOkTerms = ()=>{
    handleChange("agree",true); setTermsOpen(false)
  }
  const handleCancelTerms = ()=>{
    setTermsOpen(false);
  }
  return (
    <form noValidate onSubmit={handleSubmit}>
      <Modal title= {t("register.termsTitle")}
      visible={termsOpen} 
      onOk={handleOkTerms} 
      onCancel={handleCancelTerms}
      footer={[
        <Button key="back" onClick={handleCancelTerms}>{t("register.close")}</Button>,
        <Button key="submit" type="primary" onClick={handleOkTerms}>{t("register.iAgree")}</Button>,
      ]}
      >
        <ul>
          <li>{t("register.terms1")}</li>
          <li>{t("register.terms2")} </li>
          <li>{t("register.terms3")} </li>
          <li>{t("register.terms4")} </li>
          <li>{t("register.terms5")} </li>
          <li>{t("register.terms6")} </li>
        </ul>
      </Modal>
      <div className="loginContainer">
        <div className="loginContainer__loginTitle">{t("register.creat")}</div>
        {props.error !== "" ? (
          <Alert
            style={{ marginBottom: 10 }}
            type="error"
            showIcon
            message={props.error}
          ></Alert>
        ) : null}

        <div className="loginContainer__loginDialog">
          <div className="loginContainer__loginDialog__inputLabel">
          {t("register.name")}
          </div>

          <div className="loginContainer__loginDialog__input">
            <Input
              className={
                errors["fullname"]
                  ? "loginContainer__loginDialog__input__hasError"
                  : ""
              }
              value={registerInformation.fullname}
              onChange={(e) => {
                handleChange("fullname", e.target.value);
              }}
            />{" "}
            {errors["fullname"] ? (
              <div className="loginContainer__loginDialog__errorContainer">
                {errors["fullname"]}
              </div>
            ) : null}
          </div>
          <div className="loginContainer__loginDialog__inputLabel">{t("register.enterAge")}</div>
          <div className="loginContainer__loginDialog__input">
            <Input
              className={
                errors["age"]
                  ? "loginContainer__loginDialog__input__hasError"
                  : ""
              }
              type="number"
              value={registerInformation.age}
              onChange={(e) => {
                handleChange("age", e.target.value);
              }}
            />{" "}
            {errors["age"] ? (
              <div className="loginContainer__loginDialog__errorContainer">
                {errors["age"]}
              </div>
            ) : null}
          </div>
          <div className="loginContainer__loginDialog__inputLabel">{t("register.email")}</div>
          <div className="loginContainer__loginDialog__input">
            <Input
              className={
                errors["email"]
                  ? "loginContainer__loginDialog__input__hasError"
                  : ""
              }
              value={registerInformation.email}
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
          {t("register.password")}
          </div>

          <div className="loginContainer__loginDialog__input">
            <Input
              className={
                errors["password"]
                  ? "loginContainer__loginDialog__input__hasError"
                  : ""
              }
              type="password"
              value={registerInformation.password}
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
          <div className="loginContainer__loginDialog__input">
            <Checkbox
              checked={registerInformation.agree}
              onChange={(e) => {
                handleChange("agree", e.target.checked);
              }}
            >
              {" "}
              {t("register.iAgreeTo")}<a href="/#" onClick={(e)=>{ e.preventDefault(); setTermsOpen(true);}}>{t("register.termsandCon")}</a>
            </Checkbox>
            {errors["agree"] ? (
              <div className="loginContainer__loginDialog__errorContainer">
                {errors["agree"]}
              </div>
            ) : null}
          </div>

          <button
            type="submit"
            className="loginContainer__loginDialog__submitButton"
          >
            {" "}
            {t("register.creatAccount")}{" "}
          </button>

          <div className="loginContainer__loginDialog__registerLabel">
            {" "}
            {t("register.alreadyAMember")}{" "}
          </div>

          <button
            onClick={() => {
              handleGoToLogin();
            }}
            type="button"
            className="loginContainer__loginDialog__registerButton"
          >
           {t("register.login")}{" "}
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
          > {t("register.withFacebook")}
          </button>
          <button
            onClick={() => {
              handleGoogleAuth();
            }}
            type="button"
            className="loginContainer__loginDialog__googleLoginBtn"
          >{t("register.withGoogle")}
          </button>
        </div>
      </div>
    </form>
  );
};
export default Register;
