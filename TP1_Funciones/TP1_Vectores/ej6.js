/*Uso de reduce:
Crea una función llamada sumarElementos que tome un array de
números y devuelva la suma de todos los elementos del array
usando reduce.*/

let numeros= [1,4,5,9,11,13];

function sumarElementos(array) {
    return array.reduce(function(acumulador, valorActual) {
        return acumulador+valorActual;  ////el reduce recorre el bucle solo, no es necesario usar un while
    }, 0);  //inicializamos acumulador en 0
}

console.log(sumarElementos(numeros));

