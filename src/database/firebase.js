// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "react-blog-694e9.firebaseapp.com",
  projectId: "react-blog-694e9",
  storageBucket: "react-blog-694e9.appspot.com",
  messagingSenderId: "608740892666",
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: "G-FXE1WQHFE3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// env 파일