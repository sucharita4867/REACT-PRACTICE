import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import "./App.css";
import { auth } from "./firebase.init";
import { useState } from "react";
const googleProvider = new GoogleAuthProvider();
function App() {
  const [user, setUser] = useState(null);

  const handleSignInGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
      <h1>firebase practice project</h1>
      <div>
        {user ? (
          <button onClick={handleSignOut}>Sign Out</button>
        ) : (
          <button onClick={handleSignInGoogle}>sign in with Google </button>
        )}
        {user && (
          <div>
            <h3>{user.displayName}</h3>
            <h4>{user.email}</h4>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
