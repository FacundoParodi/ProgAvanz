/*Función Recursiva:
Crea una función recursiva llamada factorial que calcule el factorial
de un número dado*/

function factorial(n) {
    if (n === 0) {
        return 1;  // Caso base: 0! es 1
    } else {
        return n * factorial(n - 1);  // Caso recursivo
    }
}

console.log


