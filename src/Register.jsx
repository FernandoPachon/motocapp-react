import React from 'react'
import { Link } from 'react-router-dom'
import "./App.css";

const Register = () => {
    return (
        <>
            <div className="main-container">
                <div className="container-logo">
                    <img src="src\assets\LogoMotocarro.png" alt="" width="80%" />
                </div>
                <div className="container-form">
                    <h2 id="h2">Crear cuenta</h2>

                    <div>
                        <form action="" className="input-form--container">
                            <label htmlFor="">
                                Nombre Completo:
                                <input placeholder="Tu nombre" type="text" id="input-login" />
                            </label>
                            <label htmlFor="">
                                Correo:
                                <input placeholder="Tu email" type="email" id="input-login" />
                            </label>
                            <label htmlFor="">
                                Contraseña:
                                <input placeholder="crea una contraseña" type="password" id="input-login" />
                            </label>
                            <label htmlFor="">
                                <input type="checkbox" id="checkbox" />
                                Acepto los
                                <a href=""> terminos y condiciones</a>
                            </label>
                            <button id="button">Registrarse</button>
                            <label htmlFor="">
                                ¿Ya estas registrado?
                                <Link to="/login">Ingresa</Link>
                            </label>
                        </form>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Register
