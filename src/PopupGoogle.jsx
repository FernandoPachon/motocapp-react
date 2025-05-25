import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { Link,useNavigate } from 'react-router-dom'
import { initializeApp } from "firebase/app";

const PopupGoogle = ({ onSuccess, onError }) => {
    const handleGoogleSuccess = (data) => {
    console.log("Usuario autenticado:", data.user.displayName);
    sessionStorage.setItem('user', JSON.stringify(data.user));
    navigate("/dashboard");
  };

  const handleGoogleError = (error) => {
    console.error("Error en autenticación:", error.message);
    alert(`Error al iniciar sesión: ${error.message}`);
  };
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

  // Inicializa Firebase solo si no existe
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log("nombre", result.user.displayName);
        sessionStorage.setItem('user', JSON.stringify({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          uid: user.uid
        }));
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
    <button id="social" onClick={handleLogin}>
      Ingresa con Google
    </button>
  );
};

export default PopupGoogle;