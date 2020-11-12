import { Alert, Button, Checkbox, Input } from "antd";
import Modal from "antd/lib/modal/Modal";
import React, { useState } from "react";
import { validateEmail } from "../../functions";
import "./index.css";

const Register = (props) => {
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
      errors["fullname"] = "Please enter youur full name";
    }
    if (email.trim() === "") {
      errors["email"] = "Please enter a valid email";
    }
    if (age.trim() === "") {
      errors["age"] = "Please enter your age";
    }
    if (password.trim().length < 6) {
      errors["password"] = "Password must be at least 6 characters long";
    }
    if (password.trim() === "") {
      errors["password"] = "Please enter your password";
    }
    if (!validateEmail(email)) {
      errors["email"] = "Email format error, please enter a valid email";
    }
    if (!agree) {
      errors["agree"] = "Please agree to the terms and conditions";
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
      <Modal title="Terms Of Service" 
      visible={termsOpen} 
      onOk={handleOkTerms} 
      onCancel={handleCancelTerms}
      footer={[
        <Button key="back" onClick={handleCancelTerms}>Close</Button>,
        <Button key="submit" type="primary" onClick={handleOkTerms}>I Agree</Button>,
      ]}
      >
        <ul>
          <li>term1 </li>
          <li>term2 </li>
          <li>term3 </li>
          <li>term4 </li>
          <li>term5 </li>
          <li>term6 </li>
        </ul>
      </Modal>
      <div className="loginContainer">
        <div className="loginContainer__loginTitle">Create new account</div>
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
            Fullname
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
          <div className="loginContainer__loginDialog__inputLabel">Age</div>
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
          <div className="loginContainer__loginDialog__inputLabel">Email</div>
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
            Password
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
              I agree to <a href="/#" onClick={(e)=>{ e.preventDefault(); setTermsOpen(true);}}>terms and conditions</a>
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
            Create new account{" "}
          </button>

          <div className="loginContainer__loginDialog__registerLabel">
            {" "}
            Already a member? Log in now{" "}
          </div>

          <button
            onClick={() => {
              handleGoToLogin();
            }}
            type="button"
            className="loginContainer__loginDialog__registerButton"
          >
            Log in{" "}
          </button>

          <div className="loginContainer__loginDialog__loginOptionsTitle">
            Or you can
          </div>
          <button
            onClick={() => {
              handleFacebookAuth();
            }}
            type="button"
            className="loginContainer__loginDialog__facebookLoginBtn"
          > Login With Facebook
          </button>
          <button
            onClick={() => {
              handleGoogleAuth();
            }}
            type="button"
            className="loginContainer__loginDialog__googleLoginBtn"
          >
            Login With Google
          </button>
        </div>
      </div>
    </form>
  );
};
export default Register;
