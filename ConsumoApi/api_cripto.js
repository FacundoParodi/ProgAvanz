const api_key = "6d781bed-f2fc-4762-b6c2-8f0381def42e";

async function obtenerCotizacion() {
    const url = "https://rest.coinapi.io/v1/exchanges";

    try {
        const response = await fetch(url, {
            headers: {
                "X-CoinAPI-Key": api_key
            }
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data);

            const primeros16 = data.slice(0, 16);

            const cotizaciones = primeros16.map(exchange => ({
                nombre: exchange.name,
                cotizacionPorHora: exchange.volume_1hrs_usd,
                cotizacionDelDia: exchange.volume_1day_usd
            }));

            const listaCotizaciones = document.getElementById("cotizaciones-list");
            cotizaciones.forEach(cotizacion => {
                const li = document.createElement("li");
                li.textContent = `${cotizacion.nombre}: Cotización por hora: ${cotizacion.cotizacionPorHora}, Cotización del día: ${cotizacion.cotizacionDelDia}`;
                listaCotizaciones.appendChild(li);
            });
        } else {
            console.log("error al obtener los datos ", response.status);
        }
    } catch (error) {
        console.error("hubo un error en la solicitud", error);
    }
}

obtenerCotizacion();