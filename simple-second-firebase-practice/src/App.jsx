import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import "./App.css";
import { auth } from "./firebase.init";
import { useState } from "react";

const googleProvider = new GoogleAuthProvider();
function App() {
  const [user, setUser] = useState(null);
  const handleGoogleSignIn = () => {
    // console.log("signin btn clicked");
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })

      .catch((error) => {
        console.log(error);
      });
  };

const handleGithubSignin =()=>{
  
}



  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <h2>Simple Second Firebase project</h2>
      {/* <button onClick={handleGoogleSignIn}>Sign in With Google</button>
      <button onClick={handleSignOut}> Sign out</button> */}
      {user ? (
        <button onClick={handleSignOut}> Sign out</button>
      ) : (
        <>
        <button onClick={handleGoogleSignIn}>Sign in With Google</button>
        <button onClick={handleGithubSignin}>Sign in Github</button>
        </>
      )}
      {user && (
        <div>
          <h3>{user.displayName}</h3>
          <h3>{user.email}</h3>
        </div>
      )}
    </>
  );
}

export default App;
