import React from 'react'
import { Link } from 'react-router-dom'
import "./App.css";
const Login = () => {
  return (
     <>
      <div className="main-container">
        <div className="container-logo">
          <img src="src\assets\LogoMotocarro.png" alt="" width="80%"/>
        </div>
        <div className="container-form">
          <h2 id="h2">Iniciar sesion</h2>
          {/* <div className="social-buttons">
            <button id="social">f</button>
            <button id="social" >t</button>
            <button id="social" >in</button>
          </div> */}
          <div className="separator">o</div>
          <div>
            <form action="" className="input-form--container">
              <label htmlFor="">
                Correo:
                <input type="email" id="input-login"  />
              </label>
              <label htmlFor="">
                Contraseña:
                <input type="password"id="input-login"   />
              </label>
               <label htmlFor="">
              <input type="checkbox" id="checkbox"/>
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
