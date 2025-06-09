import React from 'react';
import './App.css';

const TermsModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className='terminos'>
                    <h2>Términos y Condiciones</h2>
                    <p>Última actualización: 5 de Junio de 2025

                    </p>
                    <p>Bienvenido/a a MotocApp, una plataforma que conecta usuarios con conductores de motocarros para el transporte de carga. Al utilizar esta aplicación, aceptas los siguientes Términos y Condiciones. Si no estás de acuerdo con alguno de ellos, por favor no utilices nuestros servicios.</p>
                    <p>1. Definiciones
                        MotocApp: Aplicación móvil y plataforma web que facilita la contratación de servicios de transporte de carga en motocarro.

                        Usuario: Persona natural o jurídica que solicita un servicio de transporte.

                        Conductor: Persona autorizada para ofrecer servicios de transporte de carga mediante la aplicación.

                        Servicio: Traslado de objetos, paquetes o mercancías mediante motocarro, solicitado a través de la plataforma.
                    </p>
                    <p>2. Uso del Servicio
                        El usuario debe proporcionar información veraz, completa y actualizada al registrarse.

                        El servicio debe usarse únicamente para fines legales.

                        MotocApp se reserva el derecho de suspender o cancelar cuentas por mal uso, conducta inapropiada o incumplimiento de estos términos.
                    </p>
                    <p>
                        3. Responsabilidades
                        MotocApp no es transportista; actuamos únicamente como intermediario entre usuarios y conductores independientes.

                        Los conductores son responsables del cumplimiento de normas de tránsito, seguridad y entrega del servicio.

                        Los usuarios deben garantizar que los objetos a transportar no están prohibidos por la ley y que están debidamente empacados.

                    </p>
                    <p>
                        4. Pagos
                        El costo del servicio será determinado en función de la distancia, peso estimado y otros factores definidos por la app.

                        El usuario se compromete a pagar el monto indicado antes o después del servicio según la modalidad seleccionada.

                    </p>
                    <p> 5. Cancelaciones
                        El usuario puede cancelar un servicio antes de que el conductor inicie el viaje sin penalización.

                        Cancelaciones reiteradas o después del inicio del viaje pueden generar cargos o suspensión del usuario.
                    </p>
                    <p>
                        6. Limitación de responsabilidad
                        MotocApp no se responsabiliza por pérdidas, daños o robos de objetos durante el servicio, pero colaborará con las autoridades en caso de reporte.

                        La empresa no garantiza disponibilidad continua del servicio.

                    </p>
                    <p>
                        7. Privacidad
                        La información del usuario será tratada conforme a nuestra Política de Privacidad.

                        No compartiremos datos personales sin consentimiento, salvo requerimiento legal.

                    </p>
                    <p>
                        8. Modificaciones
                        MotocApp se reserva el derecho de modificar estos términos en cualquier momento. Los cambios serán notificados por la aplicación o vía correo electrónico.

                    </p>
                    <p>
                        9. Jurisdicción
                        Este acuerdo se rige por las leyes del país donde opera el servicio. Cualquier disputa será resuelta ante las autoridades competentes de dicho país.

                    </p>
                    <p>
                        10. Contacto
                        Si tienes dudas sobre estos términos, puedes escribirnos a:
                        📧 contacto@motocapp.com

                    </p>
                </div>

                <button onClick={onClose} className="close-button">Cerrar</button>
            </div>
        </div>
    );
};

export default TermsModal;