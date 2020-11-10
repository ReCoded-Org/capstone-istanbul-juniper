import React, { useContext, useState } from "react";
import Login from "../../components/Login";
import Register from "../../components/Register";
import PasswordReset from "../../components/PasswordReset";
import firestore, { auth } from "../../firebaseConfig";
import firebase from 'firebase';
import { AuthContext, processAuth } from "../../auth/authContext";
import { withRouter } from "react-router-dom";

const LoginRegisterPage = (props) => {
  const login = async (email, password) => {
    console.log(email, password);
    setError("");
    try {
      await auth.signInWithEmailAndPassword(email, password);
      props.history.push("/");
    } catch (e) {
      setError(e.message);
    }
  };
  const passwordReset = async (email) => {
      setError("");
      try {
        await auth.sendPasswordResetEmail(email);
  
        setActive("login");
      } catch (e) {
        setError(e.message);
      }
  }
     // Loogin with FACEBOOK 
  const loginWithFacebook = async () => {
    try {
      let provider = new firebase.auth.FacebookAuthProvider();
      provider.setCustomParameters({
        'display': 'popup',
      });
      let u = await auth.signInWithPopup(provider);
      console.log('facebook user: ', u.user);
      props.history.push("/");
    } catch (e) {
      setError(e.message);
    }
  }
    // Loogin with GOOGLE 
  const loginWithGoogle = async () => {
 try {
      let provider = new firebase.auth.GoogleAuthProvider();   
      provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
      let u = await auth.signInWithPopup(provider);
      console.log('google user: ', u.user);
      props.history.push("/");
    } catch (e) {
      setError(e.message);
    }
  }

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
      await auth.signInWithEmailAndPassword(email, password);
      props.history.push("/");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };
  const [active, setActive] = useState("login");
  const [error, setError] = useState("");

  const { user, setUser } = useContext(AuthContext);
  console.log("User ", user);

  switch (active){
    case 'login':
    return ( <Login
      error={error}
      onSubmit={({ email, password }) => {
        login(email, password);
      }}
      onGoToRegister={() => {
        setError("");
        setActive("register");
      }}
      onGoToPasswordReset={() => {
        setError("");
        setActive("reset");
      }}
      onFacebookAuth={() => {
        setError("");
        loginWithFacebook();
      }}
      onGoogleAuth = {()=>{
        setError("");
        loginWithGoogle();
      }}
    />);
    break; 
    case 'register':
      return (<Register
        error={error}
        onSubmit={({ fullname, email, age, password }) => {
          register(fullname, email, age, password);
        }}
        onGoToLogin={() => {
          setError("");
          setActive("login");
        }}
        onFacebookAuth={() => {
          setError("");
          loginWithFacebook();
        }}
      />);
    break;
    case 'reset':
      return (<PasswordReset
        error={error}
        onSubmit={({email}) => {
          setError("");
          passwordReset(email);
        }}
        onGoToLogin={() => {
          setError("");
          setActive("login");
        }}
        onFacebookAuth={() => {
          setError("");
          loginWithFacebook();
        }}
      />);
    break;
    default:
return (<></>);
    break; 
  }
};

export default withRouter(LoginRegisterPage);
