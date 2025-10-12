// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv3SHiluwQlOAX444GI_m59Uo8E8_nnVQ",
  authDomain: "simple-second-firebase-project.firebaseapp.com",
  projectId: "simple-second-firebase-project",
  storageBucket: "simple-second-firebase-project.firebasestorage.app",
  messagingSenderId: "257318569293",
  appId: "1:257318569293:web:3c37dc0c65f70081546304",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
