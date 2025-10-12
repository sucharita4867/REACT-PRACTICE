// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfeAlxtyh9NTs4SK-Fy8XGln2Sx76SYxM",
  authDomain: "fir-practice-project-25b0d.firebaseapp.com",
  projectId: "fir-practice-project-25b0d",
  storageBucket: "fir-practice-project-25b0d.firebasestorage.app",
  messagingSenderId: "1015746135481",
  appId: "1:1015746135481:web:2f9c5dcfc118e2abeba268",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
