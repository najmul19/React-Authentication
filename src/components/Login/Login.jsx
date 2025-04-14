import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../../Firebase/Firebase.init";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);

  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const handleGoogleSignIn = () => {
    // console.log('cliked google sign in')
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result);
        setUser(result.user);
      })
      .catch((error) => {
        console.log("ERROR", error);
        setUser(null);
      });
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("User Sign Out");
        setUser(null);
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };
  const handleGitHubSignIn = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        console.log(result);
        setUser(result.user);
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };
  return (
    <div>
      {user ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <>
          <button onClick={handleGoogleSignIn}>Login with Google</button>
          <button onClick={handleGitHubSignIn}>Login with GitHub</button>
        </>
      )}
      {user && (
        <div>
          <h4>{user.displayName}</h4>
          <p>{user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
