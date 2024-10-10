/*Uso de some:
Crea un array de números llamado numeros y usa some para
verificar si algún número es mayor que 10*/

let numeros= [1,2,6,7,11,16]

let mayor10= numeros.some(function(valorActual) {
    return valorActual > 10
})

console.log(mayor10)