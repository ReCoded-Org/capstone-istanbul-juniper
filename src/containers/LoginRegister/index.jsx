import React, { useContext, useState } from "react";
import Login from "../../components/userauth/Login";
import Register from "../../components/userauth/Register";
import ResetPassword from "../../components/userauth/ResetPassword";
import firestore, { auth } from "../../firebaseConfig";
import firebase from "firebase";
import { AuthContext } from "../../auth/authContext";
import { withRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Alert, Spin } from "antd";
import "./index.css";
import kids from "../../images/LoginKids.svg";

const LoginRegisterPage = ({ history }) => {
  const [t] = useTranslation();
  const [authAction, setAuthAction] = useState("login");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const resetErrorAndMessage = () => {
    setError("");
    setMessage(<></>);
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
    fetchAction(async () => {
      await auth.signInWithEmailAndPassword(email, password);
    });
  };

  const passwordReset = async (email) => {
    fetchAction(async () => {
      await auth.sendPasswordResetEmail(email);
      setMessage(
        <Alert
          className="authAlert"
          showIcon
          message={t("loginRegister.anEmailSent", { email })}
          type="success"
        />
      );
    });
  };

  const loginWithFacebook = async () => {
    fetchAction(() => {
      const provider = new firebase.auth.FacebookAuthProvider();
      provider.setCustomParameters({
        display: "popup",
      });
    });
  };

  const loginWithGoogle = async () => {
    fetchAction(() => {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
    });
  };

  const register = async (fullName, email, age, password) => {
    fetchAction(async () => {
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
    });
  };

  const handleLogin = () => {
    resetErrorAndMessage();
    setAuthAction("login");
  };

  let component;
  switch (authAction) {
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
            setAuthAction("register");
          }}
          handlePasswordReset={() => {
            resetErrorAndMessage();
            setAuthAction("reset");
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
          alt="kids having fun"
          src={kids}
          className="loginRegister__footerContainer__kidsImage"
        />
      </div>
    </>
  );
};

export default withRouter(LoginRegisterPage);
