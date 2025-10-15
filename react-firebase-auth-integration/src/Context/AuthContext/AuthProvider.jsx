import React from "react";
import { AuthContext } from "./AuthCOntext";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../Firebase/Firebase.init";

const AuthProvider = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const authInfo = {
    // createUser: createUser
    createUser,
    signInUser,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;

/**
 * 1.create a context and export
 * 2.create a provider -- so that you can reuse the context in different places
 * 3.ensure you use the children prop
 * 4. make sure use the auth provider in the router
 * **********/
