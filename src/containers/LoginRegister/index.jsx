import React, { useContext, useState } from "react";
import { withRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Alert, Spin } from "antd";
import firebase from "firebase";
import Login from "../../components/userauth/Login";
import Register from "../../components/userauth/Register";
import PasswordReset from "../../components/userauth/PasswordReset";
import firestore, { auth } from "../../firebaseConfig";
// import { AuthContext } from '../../components/userauth/authContext';
import "./index.css";
import kids from "../../images/LoginKids.svg";

const LoginRegisterPage = ({ history }) => {
  const [t] = useTranslation();
  const [active, setActive] = useState("login");
  const [error, setError] = useState("");
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(false);
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
  const passwordReset = async (email) => {
    setError("");
    setMessage(<></>);
    try {
      setLoading(true);
      await auth.sendPasswordResetEmail(email);
      setLoading(false);
      setMessage(
        <Alert
          className="authAlert"
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
      const provider = new firebase.auth.FacebookAuthProvider();
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
  // Loogin with GOOGLE
  const loginWithGoogle = async () => {
    setError("");
    setMessage(<></>);
    try {
      setLoading(true);
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
      // const u = await auth.signInWithPopup(provider);
      setLoading(false);
      history.push("/");
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
  };

  const register = async (fullname, email, age, password) => {
    setError("");
    setMessage(<></>);
    try {
      setLoading(true);
      const registeredUser = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await firestore.collection("users").doc(registeredUser.user.uid).set({
        uid: registeredUser.user.uid,
        fullname: fullname,
        age: age,
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
          handlePasswordReset={() => {
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
          onFacebookAuth={() => {
            setError("");
            setMessage(<></>);
            loginWithFacebook();
          }}
          onGoogleAuth={() => {
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
            passwordReset(email);
          }}
          handleLogin={() => {
            setError("");
            setMessage(<></>);
            setActive("login");
          }}
          onFacebookAuth={() => {
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
      <div className="loginRegister__footerContainer">
        <img
          alt="footerKids"
          src={kids}
          className="loginRegister__footerContainer__kidsImage"
        />
      </div>
    </>
  );
};

export default withRouter(LoginRegisterPage);
