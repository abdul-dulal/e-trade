// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkNnziGIRCvgK84wyuXGGXvDbJdWyWUOo",
  authDomain: "e-trade-27b70.firebaseapp.com",
  projectId: "e-trade-27b70",
  storageBucket: "e-trade-27b70.appspot.com",
  messagingSenderId: "838443652",
  appId: "1:838443652:web:aa0f47bb5c737b3deb98d1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
