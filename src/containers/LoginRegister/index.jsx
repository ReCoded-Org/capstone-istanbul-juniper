import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Alert, Spin } from "antd";
import firebase from "firebase";
import Login from "../../components/userauth/Login";
import Register from "../../components/userauth/Register";
import ResetPassword from "../../components/userauth/ResetPassword";
import firestore, { auth } from "../../firebaseConfig";
import "./index.css";
import kids from "../../images/LoginKids.svg";

const LoginRegisterPage = ({ history }) => {
  const [t] = useTranslation();
  const [active, setActive] = useState("login");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const resetErrorAndMessage = () => {
    setError("");
    setMessage(<></>);
  };
  const addUserToHistory = () => {
    history.push("/");
  };
  const failedAction = (e) => {
    setLoading(() => false);
    setError(e.message);
  };

  const fetchAction = async (func) => {
    resetErrorAndMessage();
    try {
      setLoading(true);
      func();
      setLoading(() => false);
      history.push("/");
    } catch (e) {
      setLoading(() => false);
      setError(e.message);
    }
  };
  const login = async (email, password) => {
    const action = async () => {
      await auth.signInWithEmailAndPassword(email, password);
    };
    fetchAction(action);
  };
  const passwordReset = async (email) => {
    const action = async () => {
      await auth.sendPasswordResetEmail(email);
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
    };
    fetchAction(action);
  };
  const loginWithFacebook = async () => {
    const action = () => {
      const provider = new firebase.auth.FacebookAuthProvider();
      provider.setCustomParameters({
        display: "popup",
      });
    };
    fetchAction(action);
  };
  const loginWithGoogle = async () => {
    const action = async () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
      addUserToHistory();
    };
    fetchAction(action);
  };
  const register = async (fullName, email, age, password) => {
    const action = async () => {
      const registeredUser = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await firestore.collection("users").doc(registeredUser.user.uid).set({
        uid: registeredUser.user.uid,
        fullName,
        age,
      });
      await auth.signInWithEmailAndPassword(email, password);
    };
    fetchAction(action);
  };
  const handleLogin = () => {
    resetErrorAndMessage();
    setActive("login");
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
            resetErrorAndMessage();
            setActive("register");
          }}
          handlePasswordReset={() => {
            resetErrorAndMessage();
            setActive("reset");
          }}
          handleFacebookAuth={loginWithFacebook}
          handleGoogleAuth={loginWithGoogle}
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
          handleLogin={handleLogin}
          handleFacebookAuth={loginWithFacebook}
          handleGoogleAuth={loginWithGoogle}
        />
      );
      break;
    case "reset":
      component = (
        <ResetPassword
          error={error}
          message={message}
          onSubmit={({ email }) => {
            resetErrorAndMessage();
            passwordReset(email);
          }}
          handleLogin={handleLogin}
          handleFacebookAuth={loginWithFacebook}
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
