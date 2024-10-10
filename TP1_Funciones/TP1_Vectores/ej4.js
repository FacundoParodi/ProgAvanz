/*Uso de map:
Crea una función llamada elevarAlCuadrado que tome un array de
números y devuelva un nuevo array con cada número elevado al
cuadrado. Usa map para implementar la función.*/

let numeros = [1,2,3,4,5];

let cuadrado = numeros.map(function(a) {
    return a*2  
})

console.log(cuadrado)