import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../Firebase/Firebase.init";


const Login = () => {
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn=()=>{
        // console.log('cliked google sign in')
        signInWithPopup(auth, provider)
        .then(result=>{
            console.log(result)
        }) 
        .catch(error=>{
            console.log('ERROR',error)
        })
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn}>Login with Google</button>
        </div>
    );
};

export default Login;