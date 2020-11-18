import React, { useEffect, useState } from "react";
import firestore, { auth } from "../firebaseConfig";

export const AuthContext = React.createContext({
  user: null,
  setUser: null,
});

const AuthProvider = (props) => {
  const [user, setUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((auth) => {
      processAuth(auth, setUser);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const processAuth = async (auth, setUser) => {
  if (!auth) {
    return setUser(null);
  }
  // A unique user ID, assigned to the requesting user, we're calling/maticing this ID from our server.
  let firestoreResult = await firestore
    .doc("users/" + auth.uid) 
    .get();
  if (!firestoreResult.data()) {
    await firestore.collection("users").doc(auth.uid).set({
      uid: auth.uid,
      fullname: auth.displayName,
      age: null,
    });
    firestoreResult = await firestore.doc("users/" + auth.uid).get();
  }
  let user = {
    isLoggedin: true,
    uid: auth.uid,
    email: auth.email,
    fullname: firestoreResult.data().fullname ?? auth.displayName,
    age: firestoreResult.data().age ?? null,
  };
  await setUser(user);
  return;
};

export default AuthProvider;
