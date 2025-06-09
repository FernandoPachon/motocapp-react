import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./App.css";
import PopupGoogle from './PopupGoogle';
import TermsModal from './TermsModal';

const Register = () => {
    const navigate = useNavigate();
    const [showTerms, setShowTerms] = useState(false);
    const btnEvent = () => {
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
            <div className="main-container--register">
                <div className='main-register'>
                    <div className="container-logo">
                        <img src="src\assets\LogoMotocarro.png" alt="" width="80%" />
                    </div>
                    <div className="container-form">
                        <h2 id="h2">Crear cuenta</h2>
                        <div className="social-buttons">
                            <PopupGoogle
                                onSuccess={handleGoogleSuccess}
                                onError={handleGoogleError}
                            />
                        </div>
                        <div>
                            <form action="" className="input-form--container">
                                <label htmlFor="">
                                    <input placeholder="Tu nombre" type="text" id="input-login" className='name' required />
                                </label>
                                <label htmlFor="">
                                    <input placeholder="Tu email" type="email" id="input-login" className='email' required />
                                </label>
                                <label htmlFor="">
                                    <input placeholder="crea una contraseña" type="password" id="input-login" className='password' required />
                                </label>
                                <label htmlFor="">
                                    <input type="checkbox" id="checkbox" />
                                    Acepto los_
                                    <span className="terms-link" onClick={() => setShowTerms(true)} style={{ color: 'blue', cursor: 'pointer' }}>
                                        términos y condiciones
                                    </span>
                                </label>
                                <button id="button" onClick={btnEvent}>Registrarse</button>

                                <label htmlFor="">
                                    ¿Ya estas registrado?
                                    <Link to="/login">Ingresa</Link>
                                </label>
                            </form>
                        </div>
                    </div>
                </div>
                <TermsModal isOpen={showTerms} onClose={() => setShowTerms(false)} />
            </div >

            <p>Creado por Fernando Pachon</p>
        </>
    )
}

export default Register
