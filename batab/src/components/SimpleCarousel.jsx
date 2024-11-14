import React, { useState } from "react";

const CarruselSimple = () => {
    const opciones = [
        { etiqueta: "Pago Mensual", precio: "$19", descripcion: "Cuenta con nosotros", recomendado: false},
        { etiqueta: "Pago Semanal", precio: "$3", descripcion: "La mejor plataforma", recomendado: true},
        { etiqueta: "Pago Anual", precio: "$99", descripcion: "Ahorras $129", recomendado: true},
    ];

    const [indiceActual, setIndiceActual] = useState(0);

    const siguienteOpcion = () => {
        setIndiceActual((indicePrevio) => (indicePrevio + 1) % opciones.length);
    };

    const opcionAnterior = () => {
        setIndiceActual((indicePrevio) => (indicePrevio - 1 + opciones.length) % opciones.length);
    };

    return (
        <div className="contenedor-carrusel">
            <button onClick={opcionAnterior} className="boton-carrusel">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
            </button>

            <div className="item-carrusel">
                {opciones[indiceActual].recomendado && (
                    <div className="insignia-recomendada">Recomendado</div>
                )}

                <h3>{opciones[indiceActual].etiqueta}</h3>
                <div className="contenedor-precio">
                    <span className="simbolo-precio">{opciones[indiceActual].precio[0]}</span>
                    <h2 className="precio">{opciones[indiceActual].precio.slice(1)}</h2>
                </div>
                <p className="descripcion">{opciones[indiceActual].descripcion}</p>
                <button className="boton-eleccion">
                    Escoger este
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </button>
            </div>
            
            <button onClick={siguienteOpcion} className="boton-carrusel">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </button>
        </div>
    );
};

export default CarruselSimple;