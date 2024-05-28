// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBREduQKybjBemhe0GTxmsneNf-YSogoN0",
  authDomain: "authentication-db931.firebaseapp.com",
  projectId: "authentication-db931",
  storageBucket: "authentication-db931.appspot.com",
  messagingSenderId: "880325275124",
  appId: "1:880325275124:web:7cc6b4292e9eda27a2dda1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)