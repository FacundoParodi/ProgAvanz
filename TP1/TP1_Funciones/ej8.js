/*Función que Usa Otra Función:
Crea una función llamada procesarArray que tome un array y una
función como parámetros, y aplique la función a cada elemento del
array. Usa una función como parámetro para multiplicar cada
número por 2 */

let arrayNumeros= [1 , 2 ,3];

function multiplicar2(num) {
    return num * 2;

}


function procesarArray(array, funcion) { //pasamos como parametro el array y la funcion q multiplica
    let resultado= [];

    for (let i=0; i < array.length; i++) { //i < el largo del array i++ incrementamos
        valores = funcion(array[i]); //iteramos el array
        resultado.push(valores); //cargamos los resultados en el vector
    }
    return resultado
}


console.log(procesarArray(arrayNumeros, multiplicar2));




