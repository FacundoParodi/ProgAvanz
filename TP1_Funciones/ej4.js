/*Función que Devuelve un Objeto:
Crea una función llamada crearPersona que tome nombre y edad
como parámetros y devuelva un objeto con esas propiedades*/

function crearPersona(nombre, edad) {
    const objeto = {};
    objeto.nombre = nombre;  //asignamos las propiedades a los parametros q pide la funcion
    objeto.edad = edad;

    return objeto
}
const persona1 = crearPersona("facundo", 21)
console.log(persona1)