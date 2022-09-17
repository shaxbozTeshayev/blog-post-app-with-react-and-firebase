import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-ZrvtL7zAO3t0IJC34McyDSEakyyRbIY",
  authDomain: "blog-project-a6084.firebaseapp.com",
  projectId: "blog-project-a6084",
  storageBucket: "blog-project-a6084.appspot.com",
  messagingSenderId: "741062574519",
  appId: "1:741062574519:web:9909c5ea4fd3465b5a6832",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);  //  ==> initialize database inside our project
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
