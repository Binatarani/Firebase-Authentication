// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDoP4LPSs92h9Cf0Ho3GEC_wb_FRK9aADI",
  authDomain: "new-app-8b580.firebaseapp.com",
  projectId: "new-app-8b580",
  storageBucket: "new-app-8b580.appspot.com",
  messagingSenderId: "703761344466",
  appId: "1:703761344466:web:3632c38cd18ec31258ca0b",
  measurementId: "G-3SP68E0C9E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
