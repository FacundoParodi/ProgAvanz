import './style.css';
import { inicializarContador } from './counter.js';

document.querySelector('#app').innerHTML = `
    <h1>¡Lanzamientos de SpaceX!</h1>
    <div class="card">
      <button id="contador" type="button"></button>
    </div>
    Haga clic en cada ícono para obtener más detalles.
`;

inicializarContador(document.querySelector('#contador'));

const urlApi = 'https://api.spacexdata.com/v5/launches';

async function obtenerLanzamientos() {
    try {
        const respuesta = await fetch(urlApi);
        const lanzamientos = await respuesta.json();
        mostrarLanzamientos(lanzamientos);
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
}

function mostrarLanzamientos(lanzamientos) {
  const appDiv = document.getElementById('app');
  const cuadrículaLanzamientos = document.createElement('div');
  cuadrículaLanzamientos.className = 'launches-grid';

  lanzamientos.forEach(lanzamiento => {
      const tarjetaLanzamiento = document.createElement('div');
      tarjetaLanzamiento.className = 'launch-card';

      tarjetaLanzamiento.addEventListener('click', () => mostrarDetallesLanzamiento(lanzamiento));

      tarjetaLanzamiento.innerHTML = `
          <h3>${lanzamiento.name}</h3>
          <img src="${lanzamiento.links.patch.small}" alt="${lanzamiento.name}" class="launch-image">
      `;

      cuadrículaLanzamientos.appendChild(tarjetaLanzamiento);
  });

  appDiv.appendChild(cuadrículaLanzamientos);
}

function mostrarDetallesLanzamiento(lanzamiento) {
  const appDiv = document.getElementById('app');
  appDiv.innerHTML = ''; // limpiar

  const detallesDiv = document.createElement('div');
  detallesDiv.className = 'launch-details';

  detallesDiv.innerHTML = `
        <h2>${lanzamiento.name}</h2>
        <img src="${lanzamiento.links.patch.large || lanzamiento.links.patch.small}" alt="${lanzamiento.name}">
        <p><strong>Fallas:</strong> ${lanzamiento.failures.length > 0 ? lanzamiento.failures.map(falla => falla.reason).join(', ') : 'Ninguna'}</p>
        <p><strong>Número de vuelo:</strong> ${lanzamiento.flight_number}</p>
        <p><strong>Fecha y hora de despegue:</strong> ${new Date(lanzamiento.date_utc).toLocaleString()}</p>
        <button id="boton-volver">Volver</button>
    `;

  appDiv.appendChild(detallesDiv);

  document.getElementById('boton-volver').addEventListener('click', () => {
      appDiv.innerHTML = ''; // Limpiar detalles
      obtenerLanzamientos(); // Volver a cargar los lanzamientos
  });
}


obtenerLanzamientos();