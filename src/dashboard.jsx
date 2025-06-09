import React ,{useState}from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./App.css";
import MapaGoogle from './MapaGoogle';
import Acount from './Acount';

const dashboard = () => {
    const [showAcount, setShowAcount] = useState(false);
    const navigate = useNavigate(); // 🚀 Hook para redirigir
    const userData = JSON.parse(sessionStorage.getItem('user'));
    console.log(userData.displayName);
    const hanbleAcount=()=>{
        console.log("click en cuenta");
        setShowAcount(true)
    }
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


                            <div id='info-user--name'>
                                <p>Bienvenido</p>
                                <p>{userData.displayName}</p>
                                <div className='button-info'>
                                    <button id='options' >Inicio</button>
                                    <button id='options'>Favoritos</button>
                                    <button onClick={hanbleAcount} id='options'>Mi cuenta</button>
                                </div>
                                <button
                                    onClick={handleOnClick}
                                    className="logout-btn"
                                >
                                    Cerrar sesión
                                </button>

                                <img
                                src={userData.photoURL}
                                alt="Foto de perfil"
                                width="100"
                                style={{ borderRadius: "50%" }}
                            />
                                </div>
                        </div>

                    )}
                </div>

                <div className="content-wrapper">
                    <div className="map-container">
                        <div >
                            <MapaGoogle />
                        </div>
                    </div>

                    <div className="carga-container">
                        <div className="form-solicitud">
                            <select id="tipo-carga">
                                <option value="muebles">-- Selecciona un tipo de carga --</option>
                                <option value="muebles">Muebles</option>
                                <option value="paquetes">Paquetes pequeños</option>
                                <option value="herramientas">Herramientas</option>
                            </select>
                            <button className="button" id="solicitar-btn">
                                Solicitar Servicio
                            </button>
                        </div>
                    </div>
                </div>
                <Acount isOpen={showAcount} onClose={() => setShowAcount(false)}/>
            </div>
            <p>Creado por Fernando Pachon</p>
        </>
    )
}

export default dashboard
