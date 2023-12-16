// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYfwR5BUFZGwfEQavsDgXC56GIVUp1xNs",
  authDomain: "klinik-straarup.firebaseapp.com",
  projectId: "klinik-straarup",
  storageBucket: "klinik-straarup.appspot.com",
  messagingSenderId: "1088852793249",
  appId: "1:1088852793249:web:188f5ffd2dc3d81ce0dde0",
  measurementId: "G-5FMRDQ670D",
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth(app);
export const database = firebase.firestore(app);

export const { serverTimestamp } = firebase.firestore;
