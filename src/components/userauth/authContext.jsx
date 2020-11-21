import React, { useEffect, useState } from "react";
import firestore, { auth } from "../../firebaseConfig";

export const AuthContext = React.createContext({
  user: null,
  setUser: null,
});

export const processAuth = async (auth, setUser) => {
  if (!auth) {
    return setUser(null);
  }
  // A unique user ID, assigned to the requesting user, we're calling/maticing this ID from our server.
  let firestoreResult = await firestore.doc("users/" + auth.uid).get();
  if (!firestoreResult.data()) {
    await firestore.collection("users").doc(auth.uid).set({
      uid: auth.uid,
      fullname: auth.displayName,
      age: null,
      userExperiencePoints: 0,
    });
    firestoreResult = await firestore.doc("users/" + auth.uid).get();
  }
  const user = {
    isLoggedin: true,
    uid: auth.uid,
    email: auth.email,
    fullname: firestoreResult.data().fullname ?? auth.displayName,
    age: firestoreResult.data().age ?? null,
    userExperiencePoints: firestoreResult.data().userExperiencePoints ?? 0,
  };
  await setUser(user);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((auth) => {
      processAuth(auth, setUser);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
