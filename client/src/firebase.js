// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-imobile.firebaseapp.com",
  projectId: "mern-imobile",
  storageBucket: "mern-imobile.appspot.com",
  messagingSenderId: "122918614166",
  appId: "1:122918614166:web:ab7e4b0418d2bc1565beb7",
};

export const app = initializeApp(firebaseConfig);
