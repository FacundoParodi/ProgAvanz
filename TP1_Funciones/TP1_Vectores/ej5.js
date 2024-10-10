/*Uso de filter:
Crea una función llamada filtrarMayoresDe que tome un array de
números y un valor de referencia, y devuelva un nuevo array solo con
los números mayores que ese valor. Usa filter.*/

let numeros= [2,6,7,11,12,18,22]

function filtrarMayoresDe(array, mayorq) { //mayorq es el valor de referencia
    return array.filter(function(a) {      //esta linea llama al filter y le pasamos la funcion como argumento
        return a > mayorq              //al usar filter preguntamos si hay algun valor dentro del array mayor que a
    }  
    )}


console.log(filtrarMayoresDe(numeros,10))

