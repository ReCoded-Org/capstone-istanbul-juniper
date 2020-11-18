import * as firebase from "firebase";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJFjwL1UPdxhndd2GUh2J6KMZvuYHkQVc",
  authDomain: "capstone-istanbul-juniper.firebaseapp.com",
  databaseURL: "https://capstone-istanbul-juniper.firebaseio.com",
  projectId: "capstone-istanbul-juniper",
  storageBucket: "capstone-istanbul-juniper.appspot.com",
  messagingSenderId: "1033960864371",
  appId: "1:1033960864371:web:d298c334d19ce7fc960806",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const storage = firebase.storage();
export default firebase.firestore();
