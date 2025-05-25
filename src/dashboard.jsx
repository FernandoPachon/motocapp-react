import React from 'react'
import { Link } from 'react-router-dom'
import "./App.css";

const dashboard = () => {
    const userData = JSON.parse(sessionStorage.getItem('user'));
    console.log(userData.displayName);

    return (
        <>

            <div className="main-container">
                <div className='info-container'>
                    {userData && (
                        <div>
                            <p>Bienvenido {userData.displayName}</p>
                            <img
                                src={userData.photoURL}
                                alt="Foto de perfil"
                                width="100"
                                style={{ borderRadius: "50%" }}
                            />
                        </div>
                    )}
                </div>
                <div className="container">
                    <div>

                
                    </div>
                    <header className="header">
                        <div id="inicios" className="div-header">Inicio</div>
                        <div id="favoritos" className="div-header">Favoritos</div>
                        <div id="saludo" className="div-header"></div>
                        <div id="salir" className="div-header">Salir</div>
                    </header>
                    <div id="saludo">

                    </div>

                    <h2>¡Solicita un acarreo! 🛵</h2>
                    <div id="cliente-map" className="cliente-map"></div>

                    <div className="form-solicitud">
                        <input type="text" placeholder='Origen' />
                        <input type="text" placeholder='Destino' />
                        {/* <input id="origen" type="text" placeholder="Origen (ej: Cra 80 #25-30)">  */}
                            {/* <input id="destino" type="text" placeholder="Destino (ej: Cl. 50 #40-20)"> */}

                                <select id="tipo-carga">
                                    <option value="muebles">Tipo de carga - Muebles</option>
                                    <option value="paquetes">Paquetes pequeños</option>
                                    <option value="herramientas">Herramientas</option>
                                </select>

                                <button className="button" id="solicitar-btn">Solicitar Servicio ($15,000 COP)</button>
                            </div>
                    </div>

                </div>

            </>
            )
}

            export default dashboard
