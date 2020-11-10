import React, { useEffect, useState } from "react";
import firestore, { auth } from '../firebaseConfig';

export const AuthContext = React.createContext({
  user: {},
  setUser: () => { },
});

const AuthProvider = (props) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    auth.onAuthStateChanged((auth) => {
      console.log('AUTHSTATECHANGE ', auth);
      processAuth(auth,setUser);
    });
    return () => {
      // cleanup
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const processAuth = async (auth,setUser) => {

  if (!auth){
    return setUser({});
  }

  let firestoreResult = await firestore
    .doc("users/" + auth.uid)
    .get();
  if (typeof(firestoreResult.data()) === "undefined"){
    await firestore.collection("users").doc(auth.uid).set({
      uid: auth.uid,
      fullname: auth.displayName,
      age: '0',
    });
     firestoreResult = await firestore
    .doc("users/" + auth.uid)
    .get();
  }
  console.log(firestoreResult.data());

  let user = {
    isLoggedin: true,
    uid: auth.uid,
    email: auth.email,
    fullname: firestoreResult.data().fullname ?? auth.displayName,
    age: firestoreResult.data().age ?? 0,
  };
  await setUser(user);
  return;
}


export default AuthProvider;
