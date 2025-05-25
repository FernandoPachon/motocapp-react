import React from 'react'
import { Link, useNavigate} from 'react-router-dom'
import "./App.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, getRedirectResult, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider();
const Login = () => {
  const navigate = useNavigate(); // 🚀 Hook para redirigir
  const firebaseConfig = {
    apiKey: "AIzaSyBwKyBLW9Jcyx1TC0oT7bnP8KvgcTi7zL0",
    authDomain: "motocapp-web.firebaseapp.com",
    projectId: "motocapp-web",
    storageBucket: "motocapp-web.firebasestorage.app",
    messagingSenderId: "1000610704250",
    appId: "1:1000610704250:web:2450c83c193fa0939304c3",
    measurementId: "G-Y4MY3NY0M3"
  };
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth();
  function call_login_google() {
    console.log("click");
    
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log("nombre",result.user.displayName);
        navigate("/dashboard")
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        //const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...

      });
  }
  return (
    <>
      <div className="main-container">
        <div className="container-logo">
          <img src="src\assets\LogoMotocarro.png" alt="" width="80%" />
        </div>
        <div className="container-form">
          <h2 id="h2">Iniciar sesion</h2>
          <div className="social-buttons">
            {/* <button id="social">f</button>
            <button id="social" >t</button> */}
            <button id="social" onClick={call_login_google} >Google</button>
          </div>
          <div className="separator">o</div>
          <div>
            <form action="" className="input-form--container">
              <label >
                Correo:
                <input type="email" id="input-login" />
              </label>
              <label >
                Contraseña:
                <input type="password" id="input-login" />
              </label>
              <label >
                <input type="checkbox" id="checkbox" />
                Recordarme
                <a href=""> ¿Olvidaste tu contraseña?</a>
              </label>
              <button id="button">Conectarse</button>
              <label htmlFor="">
                ¿No tienes cuenta?
                <Link to="/Register">Registrarse</Link>
              </label>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default Login
