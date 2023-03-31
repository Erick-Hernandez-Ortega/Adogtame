import firebase from "firebase/compat/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMusXWWjaZV5rGlblBj0tSnWIDL5IN39M",
  authDomain: "adogtame-1c466.firebaseapp.com",
  projectId: "adogtame-1c466",
  storageBucket: "adogtame-1c466.appspot.com",
  messagingSenderId: "698318006963",
  appId: "1:698318006963:web:231b44c11b556db13b9ec6",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  firebaseConfig,
  app,
};
