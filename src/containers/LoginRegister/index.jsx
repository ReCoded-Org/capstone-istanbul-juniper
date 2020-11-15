import React, { useContext, useState } from "react";
import Login from "../../components/Login";
import Register from "../../components/Register";
import PasswordReset from "../../components/PasswordReset";
import firestore, { auth } from "../../firebaseConfig";
import firebase from "firebase";
import { AuthContext } from "../../auth/authContext";
import { withRouter } from "react-router-dom";
import { Alert, Spin } from "antd";
import "./index.css";
import { useTranslation } from "react-i18next";
import kids from "../../images/LoginKids.svg";

const LoginRegisterPage = (props) => {
  const [t] = useTranslation();
  const login = async (email, password) => {
    setError("");
    setMessage(<></>);
    try {
      setLoading(true);
      await auth.signInWithEmailAndPassword(email, password);
      setLoading(false);
      props.history.push("/");
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
          style={{ marginBottom: 10 }}
          showIcon
          message={
            <div>
              {t("loginRegister.anEmailsent")}
              <b>{email}</b>
              {t("loginRegister.anEmailsentcontain")}
            </div>
          }
          type="success"
        ></Alert>
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
      let provider = new firebase.auth.FacebookAuthProvider();
      provider.setCustomParameters({
        display: "popup",
      });
      let u = await auth.signInWithPopup(provider);
      console.log("facebook user: ", u.user);
      setLoading(false);
      props.history.push("/");
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
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
      let u = await auth.signInWithPopup(provider);
      console.log("google user: ", u.user);
      setLoading(false);
      props.history.push("/");
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
  };

  const register = async (fullname, email, age, password) => {
    console.log(email, password);
    setError("");
    setMessage(<></>);
    try {
      setLoading(true);
      let registeredUser = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await firestore.collection("users").doc(registeredUser.user.uid).set({
        uid: registeredUser.user.uid,
        fullname: fullname,
        age: age,
      });
      await auth.signInWithEmailAndPassword(email, password);
      setLoading(false);
      props.history.push("/");
    } catch (e) {
      setLoading(false);
      setError(e.message);
      console.log(e.message);
    }
  };
  const [active, setActive] = useState("login");
  const [error, setError] = useState("");
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  console.log("User ", user);
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
          onGoToRegister={() => {
            setError("");
            setMessage(<></>);
            setActive("register");
          }}
          onGoToPasswordReset={() => {
            setError("");
            setMessage(<></>);
            setActive("reset");
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
    case "register":
      component = (
        <Register
          error={error}
          message={message}
          onSubmit={({ fullname, email, age, password }) => {
            register(fullname, email, age, password);
          }}
          onGoToLogin={() => {
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
          onGoToLogin={() => {
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
      component = <></>;
      break;
  }

  return (
    <>
      <Spin spinning={loading}>{component}</Spin>
      <div className="LoginRegister__footerContainer">
        <img
          alt="footerKids"
          src={kids}
          className="LoginRegister__footerContainer__kidsImage"
        />
      </div>
    </>
  );
};

export default withRouter(LoginRegisterPage);
