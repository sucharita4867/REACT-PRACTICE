// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdGSjxrj0lHbVZdO_GhRI2vLh7AtgS5pg",
  authDomain: "email-password-auth-f18af.firebaseapp.com",
  projectId: "email-password-auth-f18af",
  storageBucket: "email-password-auth-f18af.firebasestorage.app",
  messagingSenderId: "503830811911",
  appId: "1:503830811911:web:38a2a0700a3cac171921a2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
