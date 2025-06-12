import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Acount = ({ isOpen, onClose, info }) => {
    if (!isOpen) return null;
    const navigate = useNavigate(); // 🚀 Hook para redirigir
    const userData = JSON.parse(sessionStorage.getItem('user'));
    const handleOnClick = () => {
        console.log("click en desconectar");
        sessionStorage.removeItem('user')
        navigate("/login", { replace: true })
        window.location.reload()
    };
    return (
        <div className='acount-modal'>
            <div className='modal-container--acount'>
                <div className='acount'>
                    <h1>Mi cuenta</h1>
                    <img
                        src={userData.photoURL}
                        alt="Foto de perfil"
                        width="100"
                        style={{ borderRadius: "50%" }}
                    />
                    <p >{userData.displayName}</p>
                    <p>{userData.email}</p>
                    <button
                        onClick={handleOnClick}
                        className="logout-btn"
                    >
                        Cerrar sesión
                    </button>
                    <button onClick={onClose} className="close-button">Cerrar</button>

                </div>
            </div>

        </div>
    )
}

export default Acount
