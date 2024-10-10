/*Combinar Objetos:
Usa Object.assign para combinar dos objetos, persona1 y persona2,
en un nuevo objeto. Imprime el resultado*/

const persona1 = {
    nombre: "jorge",
    edad: 46,
    ocupacion: "programador",
}


const persona2 = {
    nombre: "juan",
    edad: 27,
    ocupacion: "arquitecto",
    dni: 44777592,
}


//Object.assing(destino, origen, origen2, origen+1) 
//las propiedades de origen se agregan a las de destino, no es necesario crear una nueva variable
//

const fusion = Object.assign({}, persona1, persona2);

console.log("la combinacion de los dos objetos es: " , fusion)