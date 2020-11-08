import React, { useState } from "react";
import Login from "../../components/login";
import Register from "../../components/register";

const login = (email, password) => {
  console.log(email, password);
};
const register = (fullname, email, age, password) => {
  console.log(fullname, email, age, password);
};

const LoginRegisterPage = () => {
  const [active, setActive] = useState("login");
  return (
    <>
      {active === "login" ? (
        <Login
          onSubmit={({ email, password }) => {
            login(email, password);
          }}
          onGoToRegister={() => {
            setActive("register");
          }}
        />
      ) : (
        <Register
          onSubmit={({ fullname, email, age, password }) => {
            register({ fullname, email, age, password });
          }}
          onGoToLogin={() => {
            setActive("login");
          }}
        />
      )}
    </>
  );
};

export default LoginRegisterPage;
