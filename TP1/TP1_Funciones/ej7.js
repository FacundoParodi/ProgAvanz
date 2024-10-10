/*Función con Función Interna:
Crea una función llamada despedir que contenga una función
interna adios. despedir debe devolver el resultado de llamar a adios*/

function despedir() {

    function adios() {
        return `adioss`;
    }

    return adios(); //dentro de despedir retornamos la funcion interna adios
}

console.log(despedir());