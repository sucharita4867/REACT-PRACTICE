import React, { useState } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase/Firebase.init";
const googleProvider = new GoogleAuthProvider();
const Login = () => {
  const [user, setUser] = useState(null);

  const handleGoogleBtnClick = () => {
    // console.log("btn clicked");
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSingOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out btn click");
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Please Login</h2>
      {/* <button onClick={handleGoogleBtnClick}>Sine In With Google</button>
      <button onClick={handleSingOut}>Sing Out</button> */}
      {user ? (
        <button onClick={handleSingOut}>Sing Out</button>
      ) : (
        <button onClick={handleGoogleBtnClick}>Sine In With Google</button>
      )}
      {user && (
        <div>
          <h2>{user?.displayName}</h2>
          <h4>Email : {user.email}</h4>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
