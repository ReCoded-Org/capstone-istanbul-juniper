import { Checkbox, Input } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Register = (props) => {
  const [values, setValues] = useState({
    fullname: "",
    age: "",
    email: "",
    password: "",
    agree: false,
  });

  const handleChange = (key, value) => {
    let newValues = Object.assign({}, values);
    newValues[key] = value;
    setValues(newValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (typeof props.onSubmit == "function") {
      props.onSubmit(values);
    }
  };

  const handleGoToLogin = () => {
    if (typeof props.onGoToLogin == "function") {
      props.onGoToLogin();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="loginContainer">
        <div className="loginContainer__loginTitle">Create new account</div>
        <div className="loginContainer__loginDialog">
          <div className="loginContainer__loginDialog__inputLabel">
            Fullname
          </div>
          <div className="loginContainer__loginDialog__input">
            <Input
              value={values.fullname}
              onChange={(e) => {
                handleChange("fullname", e.target.value);
              }}
            />
          </div>

          <div className="loginContainer__loginDialog__inputLabel">Age</div>
          <div className="loginContainer__loginDialog__input">
            <Input
              type="number"
              value={values.age}
              onChange={(e) => {
                handleChange("age", e.target.value);
              }}
            />
          </div>
          <div className="loginContainer__loginDialog__inputLabel">Email</div>
          <div className="loginContainer__loginDialog__input">
            <Input
              value={values.email}
              onChange={(e) => {
                handleChange("email", e.target.value);
              }}
            />
          </div>
          <div className="loginContainer__loginDialog__inputLabel">
            Password
          </div>
          <div className="loginContainer__loginDialog__input">
            <Input
              type="password"
              value={values.password}
              onChange={(e) => {
                handleChange("password", e.target.value);
              }}
            />
          </div>
          <div className="loginContainer__loginDialog__input">
            <Checkbox
              checked={values.agree}
              onChange={(e) => {
                handleChange("agree", e.target.checked);
              }}
            >
              I agree to <Link to="/terms">terms and conditions</Link>
            </Checkbox>
          </div>
          <button
            type="submit"
            className="loginContainer__loginDialog__submitButton"
          >
            Create new account
          </button>
          <div className="loginContainer__loginDialog__registerLabel">
            Already a member? Log in now
          </div>
          <button
            onClick={() => {
              handleGoToLogin();
            }}
            type="button"
            className="loginContainer__loginDialog__registerButton"
          >
            Log in
          </button>
        </div>
      </div>
    </form>
  );
};

export default Register;
