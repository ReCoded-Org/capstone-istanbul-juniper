import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { Alert, Spin } from "antd";
import { withRouter } from "react-router-dom";
import Login from "../../components/userauth/Login";
import Register from "../../components/userauth/Register";
import PasswordReset from "../../components/userauth/PasswordReset";
import db from "../../firebaseConfig";
// import firebase from 'firebase';
import { AuthContext } from "../../components/userauth/auth";
import "./index.css";
import kids from "../../images/family.png";

const LoginRegisterPage = ({ history }) => {
  const [active, setActive] = useState("login");
  const [error, setError] = useState("");
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(false);

  const { auth } = db;
  const [t] = useTranslation();

  const login = async (email, password) => {
    setError("");
    setMessage(<></>);
    try {
      setLoading(true);
      await auth.signInWithEmailAndPassword(email, password);
      setLoading(false);
      history.push("/");
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
  };

  const resetPassword = async (email) => {
    setError("");
    setMessage(<></>);
    try {
      setLoading(true);
      await auth.sendResetPasswordEmail(email);
      setLoading(false);
      setMessage(
        <Alert
          style={{ marginBottom: 10 }}
          showIcon
          message={
            <div>
              {t("loginRegister.anEmailSent")}
              <b>{email}</b>
              {t("loginRegister.anEmailSentContain")}
            </div>
          }
          type="success"
        />
      );
      setActive("login");
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
  };
  // Login with FACEBOOK
  const loginWithFacebook = async () => {
    setError("");
    setMessage(<></>);
    try {
      setLoading(true);
      const provider = new db.auth.FacebookAuthProvider();
      provider.setCustomParameters({
        display: "popup",
      });
      // const u = await auth.signInWithPopup(provider);
      setLoading(false);
      history.push("/");
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
  };
  // Login with GOOGLE
  const loginWithGoogle = async () => {
    setError("");
    setMessage(<></>);
    try {
      setLoading(true);
      const provider = new db.auth.GoogleAuthProvider();
      provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
      // const u = await auth.signInWithPopup(provider);
      setLoading(false);
      history.push("/");
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
  };

  const register = async (fullName, email, age, password) => {
    setError("");
    setMessage(<></>);
    try {
      setLoading(true);
      const registeredUser = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await db.collection("users").doc(registeredUser.user.uid).set({
        uid: registeredUser.user.uid,
        fullName,
        age,
        userExperiencePoints: 0,
      });
      await auth.signInWithEmailAndPassword(email, password);
      setLoading(false);
      history.push("/");
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
  };
  let component;
  // const { user } = useContext(AuthContext);
  switch (active) {
    case "login":
      component = (
        <Login
          error={error}
          message={message}
          onSubmit={({ email, password }) => {
            login(email, password);
          }}
          handleRegister={() => {
            setError("");
            setMessage(<></>);
            setActive("register");
          }}
          handleResetPassword={() => {
            setError("");
            setMessage(<></>);
            setActive("reset");
          }}
          handleFacebookAuth={() => {
            setError("");
            setMessage(<></>);
            loginWithFacebook();
          }}
          handleGoogleAuth={() => {
            setError("");
            setMessage(<></>);
            loginWithGoogle();
          }}
        />
      );
      break;
    case "register":
      component = (
        <Register
          error={error}
          message={message}
          onSubmit={({ fullName, email, age, password }) => {
            register(fullName, email, age, password);
          }}
          handleLogin={() => {
            setError("");
            setMessage(<></>);
            setActive("login");
          }}
          handleFacebookAuth={() => {
            setError("");
            setMessage(<></>);
            loginWithFacebook();
          }}
          handleGoogleAuth={() => {
            setError("");
            setMessage(<></>);
            loginWithGoogle();
          }}
        />
      );
      break;
    case "reset":
      component = (
        <PasswordReset
          error={error}
          message={message}
          onSubmit={({ email }) => {
            setError("");
            setMessage(<></>);
            resetPassword(email);
          }}
          handleLogin={() => {
            setError("");
            setMessage(<></>);
            setActive("login");
          }}
          handleFacebookAuth={() => {
            setError("");
            setMessage(<></>);
            loginWithFacebook();
          }}
        />
      );
      break;
    default:
      throw new Error();
  }

  return (
    <>
      <Spin spinning={loading}>{component}</Spin>
      {/* <div className="loginRegister__footerContainer">
        <img
          alt="footerKids"
          src={kids}
          className="loginRegister__footerContainer__kidsImage"
        />
      </div> */}
    </>
  );
};

export default withRouter(LoginRegisterPage);
