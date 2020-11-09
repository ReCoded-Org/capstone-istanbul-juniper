import React, { useContext, useState } from "react";
import Login from "../../components/login";
import Register from "../../components/register";

import firestore, { auth } from "../../firebaseConfig";

import { AuthContext } from "../../auth/authContext";
import { withRouter } from "react-router-dom";

const LoginRegisterPage = (props) => {
  const login = async (email, password) => {
    console.log(email, password);
    setError("");
    try {
      let result = await auth.signInWithEmailAndPassword(email, password);
      console.log(result.user);

      let firestoreResult = await firestore
        .doc("users/" + result.user.uid)
        .get();

      console.log(firestoreResult.data());

      let user = {
        isLoggedin: true,
        uid: result.user.uid,
        email: result.user.email,
        fullname: firestoreResult.data().fullname,
        age: firestoreResult.data().age,
      };
      setUser(user);

      props.history.push("/");
    } catch (e) {
      setError(e.message);
    }
  };

  const register = async (fullname, email, age, password) => {
    console.log(email, password);
    setError("");
    try {
      let registeredUser = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await firestore.collection("users").doc(registeredUser.user.uid).set({
        uid: registeredUser.user.uid,
        fullname: fullname,
        age: age,
      });

      let user = {
        isLoggedin: true,
        uid: registeredUser.user.uid,
        email: email,
        fullname: fullname,
        age: age,
      };
      setUser(user);
      props.history.push("/");
      console.log("RESULT", registeredUser.user);
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };
  const [active, setActive] = useState("login");
  const [error, setError] = useState("");

  const { user, setUser } = useContext(AuthContext);
  console.log("User ", user);
  return (
    <>
      {active === "login" ? (
        <Login
          error={error}
          onSubmit={({ email, password }) => {
            login(email, password);
          }}
          onGoToRegister={() => {
            setError("");
            setActive("register");
          }}
        />
      ) : (
        <Register
          error={error}
          onSubmit={({ fullname, email, age, password }) => {
            register(fullname, email, age, password);
          }}
          onGoToLogin={() => {
            setError("");
            setActive("login");
          }}
        />
      )}
    </>
  );
};

export default withRouter(LoginRegisterPage);
