export function inicializarContador(elemento) {
  let valorContador = 0;

  const actualizarContador = (cuenta) => {
    valorContador = cuenta;
    elemento.innerHTML = `El contador es: ${valorContador}`;
  };

  elemento.addEventListener('click', () => actualizarContador(valorContador + 1));
  actualizarContador(0);
}