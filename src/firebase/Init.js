// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCs7XqUbhX7chunee6LIAeDm4GcORntqr0",
  authDomain: "nav-bar-54cbd.firebaseapp.com",
  projectId: "nav-bar-54cbd",
  storageBucket: "nav-bar-54cbd.appspot.com",
  messagingSenderId: "779975121520",
  appId: "1:779975121520:web:3a3f45ce579389002a72b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()