/*Uso de every:
○ Crea un array de números llamado numeros y usa every para
verificar si todos los números son positivos.*/

let numeros= [1,2,3,4,-6,-9,14,16]

function positivos(array) {
    return array.every(function(a){
        return a>0
    })


}

console.log(positivos(numeros))