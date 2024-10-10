/*Paginación de Datos:
Crea una función llamada obtenerPagina que tome un array de
datos y un número de página. La función debe devolver los
elementos correspondientes a esa página, asumiendo que cada
página tiene 5 elementos.*/

function obtenerPagina(arrayDatos, numPag) {
    const elementosPorPag = 5;
    const inicio = (numPag - 1) * elementosPorPag;
    const final = inicio + elementosPorPag;
    return arrayDatos.slice(inicio, final);
}

const datos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

console.log(obtenerPagina(datos, 1)); 
console.log(obtenerPagina(datos, 2)); 
console.log(obtenerPagina(datos, 3)); 
console.log(obtenerPagina(datos, 4)); 
console.log(obtenerPagina(datos, 5)); 
