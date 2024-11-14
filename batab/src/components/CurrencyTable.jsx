import React, { useState, useEffect } from 'react';
import TableDate from './TableDate';

const CurrencyTable = () => {
    const [criptomonedas, setCriptomonedas] = useState([]);
    const [error, setError] = useState(null);
    const [fechaHora, setFechaHora] = useState('');

    const criptomonedasSeleccionadas = ['Bitcoin', 'Ethereum', 'XRP', 'Stellar'];

    useEffect(() => {
        const obtenerDatos = async () => {
            const apiKEY = ''; // Reemplaza con tu API key
            const url = ''; // Reemplaza con tu URL de la API

            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'X-CMC_PRO_API_KEY': apiKEY,
                    },
                });

                if (!response.ok) {
                    throw new Error('Error al obtener los datos.');
                }

                const data = await response.json();

                if (!data.data || !data.status.timestamp) {
                    throw new Error('Faltan datos o timestamp en la respuesta.');
                }

                setCriptomonedas(data.data);

                const timestamp = new Date(data.status.timestamp);
                const fechaFormateada = timestamp.toLocaleString('es-ES', {
                    day: 'numeric',
                    month: 'long',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false,
                }).replace(',', '');
                setFechaHora(fechaFormateada);
            } catch (error) {
                setError(error.message);
            }
        };

        obtenerDatos();

        // Obtener datos cada 5 minutos
        const intervalId = setInterval(obtenerDatos, 5 * 60 * 1000);

        return () => clearInterval(intervalId); // Limpiar el intervalo cuando el componente se desmonte
    }, []);

    if (error) {
        return <p>Error: {error}</p>;
    }

    const criptomonedasFiltradas = criptomonedas.filter(crypto => criptomonedasSeleccionadas.includes(crypto.name));

    return (
        <section className="currency-table-section">
            <div className="currency-table">
                <p className="currency-table-title">Criptomonedas:</p>
                <div className="currency-table-content">
                    <table>
                        <tbody>
                            {criptomonedasFiltradas.map((crypto, index) => (
                                <tr key={crypto.id}>
                                    <td className={index === 0 ? "table-top-left" : index === criptomonedasFiltradas.length - 1 ? "table-bottom-left" : ""}>
                                        {crypto.name}
                                    </td>
                                    <td className={index === 0 ? "table-top-right" : index === criptomonedasFiltradas.length - 1 ? "table-bottom-right" : ""}>
                                        ${crypto.quote.USD.price.toFixed(2)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <TableDate fechaHora={fechaHora} />
                </div>
            </div>
        </section>
    );
};

export default CurrencyTable;