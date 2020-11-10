import { Alert, Checkbox, Input } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { validateEmail } from "../../functions";
import "./index.css";

const Register = (props) => {
  const [values, setValues] = useState({
    fullname: "",
    age: "",
    email: "",
    password: "",
    agree: false,
  });
  const [errors, setErrors] = useState({});
  const handleChange = (key, value) => {
    let newValues = Object.assign({}, values);
    newValues[key] = value;
    setValues(newValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let { fullname, email, age, password, agree } = values;

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
      props.onSubmit(values);
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
  return (
    <form noValidate onSubmit={handleSubmit}>
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
              value={values.fullname}
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
              value={values.age}
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
              value={values.email}
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
              value={values.password}
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
              checked={values.agree}
              onChange={(e) => {
                handleChange("agree", e.target.checked);
              }}
            >
              {" "}
              I agree to <Link to="/terms">terms and conditions</Link>
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
        </div>
      </div>
    </form>
  );
};
export default Register;
