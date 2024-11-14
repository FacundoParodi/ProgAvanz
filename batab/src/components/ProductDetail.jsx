import React from 'react';
import relojIcono from '../assets/icons/clock.svg';
import ojoIcono from '../assets/icons/eye.svg';
import dolarIcono from '../assets/icons/dollar-sign.svg';
import checkIcono from '../assets/icons/check-circle.svg';

const DetalleDelProducto = () => {
    return (
        <section className="detalle-principal-producto">
            <span className="logo-del-producto"></span>
            <div className="cabecera-del-producto">
                <h2>Un producto excepcional</h2>
                <p>Confiable y pensado para tu día a día.</p>
            </div>

            <div className="tarjetas-del-producto">
                <article className="tarjeta-del-producto">
                    <img src={relojIcono} alt="Tiempo Real" />
                    <p className="titulo-tarjeta">Monitoreo en Vivo</p>
                    <p className="descripcion-tarjeta">Nuestra API recopila datos minuto a minuto sobre las tasas que influyen en el mercado.</p>
                </article>
                <article className="tarjeta-del-producto">
                    <img src={ojoIcono} alt="Sin tasas ocultas" />
                    <p className="titulo-tarjeta">Total Transparencia</p>
                    <p className="descripcion-tarjeta">En Batabit, siempre verás el costo real de cada transacción, sin sorpresas.</p>
                </article>
                <article className="tarjeta-del-producto">
                    <img src={dolarIcono} alt="Comparar monedas" />
                    <p className="titulo-tarjeta">Valor Real de las Criptomonedas</p>
                    <p className="descripcion-tarjeta">Olvídate de los rumores, en Batabit sabrás el verdadero valor de cada criptomoneda.</p>
                </article>
                <article className="tarjeta-del-producto">
                    <img src={checkIcono} alt="Información verificada" />
                    <p className="titulo-tarjeta">Confianza Garantizada</p>
                    <p className="descripcion-tarjeta">Nuestra base de datos está completamente auditada, asegurando información precisa y actualizada.</p>
                </article>
            </div>
        </section>
    );
};

export default DetalleDelProducto;