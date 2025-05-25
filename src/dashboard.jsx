import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./App.css";
import MapaGoogle from './MapaGoogle';

const dashboard = () => {
    const navigate = useNavigate(); // 🚀 Hook para redirigir
    const userData = JSON.parse(sessionStorage.getItem('user'));
    console.log(userData.displayName);
    const handleOnClick = () => {
        console.log("click en desconectar");
        sessionStorage.removeItem('user')
        navigate("/login", { replace: true })
        window.location.reload()
    };
    if (!userData) {
        navigate('/login', { replace: true });
        return null;
    }
    return (
        <>
            <div className="main-container">
                <div className='info-container'>
                    {userData && (
                        <div className='info-user'>

                            <div><img
                                src={userData.photoURL}
                                alt="Foto de perfil"
                                width="100"
                                style={{ borderRadius: "50%" }}
                            /></div>
                            <div><p>Bienvenido {userData.displayName}</p>

                                <button
                                    onClick={handleOnClick}
                                    className="logout-btn"
                                >
                                    Cerrar sesión
                                </button></div>
                        </div>

                    )}
                </div>

                <div className="content-wrapper">
                    <div className="map-container">
                        <div >
                            <MapaGoogle />
                        </div>
                    </div>

                    <div className="form-container">
                        <div className="form-solicitud">
                            <select id="tipo-carga">
                                <option value="muebles">Tipo de carga - Muebles</option>
                                <option value="paquetes">Paquetes pequeños</option>
                                <option value="herramientas">Herramientas</option>
                            </select>
                            <button className="button" id="solicitar-btn">
                                Solicitar Servicio ($15,000 COP)
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <p>Creado por Fernando Pachon</p>
        </>
    )
}

export default dashboard
