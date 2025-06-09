
const Acount = ({ isOpen, onClose, info }) => {
    if (!isOpen) return null;
    const userData = JSON.parse(sessionStorage.getItem('user'));

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
                    <button onClick={onClose} className="close-button">Cerrar</button>
                </div>
            </div>

        </div>
    )
}

export default Acount
