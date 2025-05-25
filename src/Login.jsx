import React from 'react'
import { Link} from 'react-router-dom'
import "./App.css";
import PopupGoogle from './PopupGoogle';

const Login = () => {
  const btnEvent=()=>{
    alert("Esta funcion esta desabilitada, ingresa con google")
  }
  const handleGoogleSuccess = (data) => {
    console.log("Usuario autenticado:", data.user.displayName);
    sessionStorage.setItem('user', JSON.stringify(data.user));
    navigate("/dashboard");
  };

  const handleGoogleError = (error) => {
    console.error("Error en autenticación:", error.message);
    alert(`Error al iniciar sesión: ${error.message}`);
  };


  return (
    <>
      <div className="main-container--login">
        <div className="container-logo">
          <img src="src/assets/LogoMotocarro.png" alt="" width="80%" />
        </div>
        <div className="container-form">
          <h2 id="h2">Iniciar sesión</h2>
          <div className="social-buttons">
            <PopupGoogle
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleError}
            />
          </div>
          <div className='container-input'>
            <form action="" className="input-form--container">
              <label >
                <input type="email" id="input-login" placeholder='Ingresa un correo' />
              </label>
              <label >
                <input type="password" id="input-login" placeholder='Ingresa la contraseña'/>
              </label>
              <label >
                <input type="checkbox" id="checkbox" />
                Recordarme
                <a href=""> ¿Olvidaste tu contraseña?</a>
              </label>
              <button id="button" onClick={btnEvent}>Conectarse</button>
              <label htmlFor="">
                ¿No tienes cuenta?
                <Link to="/Register">Registrarse</Link>
              </label>
            </form>
          </div>
        </div>
      </div>
<p>Creado por Fernando Pachon</p>
    </>
  )
}

export default Login
