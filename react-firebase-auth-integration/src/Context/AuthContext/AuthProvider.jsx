import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthCOntext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../Firebase/Firebase.init";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // useEffect(()=>{
  // step 1. observer set
  // step 2. ser in a variable
  // seep 3. return and call the variable so that you can clear the ref
  // },[])
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current user in auth state change", currentUser);
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const signOutUser = () => {
    return signOut(auth);
  };

  const authInfo = {
    // createUser: createUser
    user,
    createUser,
    signInUser,
    signOutUser,
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
