/*Comprobación de Propiedades:
Crea una función llamada tienePropiedad que tome un objeto y una
cadena como parámetros, y devuelva true si el objeto tiene una
propiedad con ese nombre, o false en caso contrario*/


// hasOwnProperty compara si la propiedad se encuentra o no dentro del objeto

function tienePropiedad(persona,pruebaCadena) {

    if (persona.hasOwnProperty(pruebaCadena)) { 
        return true;                  
    } else {
        return false;
    }

}

const persona = {
    nombre: "juan",
    edad: 25,
    profesion: "programador",
}

console.log(tienePropiedad(persona, "profesion")); //devuelve true
console.log(tienePropiedad(persona, "dni"));       //devuelve false

