// Do not store config on the client side
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu8dkSl00oRlE1PrLUcvR83lwcEyORQwM",
  authDomain: "simple-firebase-auth-aa285.firebaseapp.com",
  projectId: "simple-firebase-auth-aa285",
  storageBucket: "simple-firebase-auth-aa285.firebasestorage.app",
  messagingSenderId: "681490791168",
  appId: "1:681490791168:web:38d8a849c3adfea99291e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;