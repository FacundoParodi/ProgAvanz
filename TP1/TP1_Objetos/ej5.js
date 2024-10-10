/*Función que Modifica un Objeto:
Crea una función llamada actualizarEdad que tome un objeto
persona y un número nuevaEdad, y actualice la propiedad edad del
objeto*/

const persona = {
    edad: 21,
}


function actualizarEdad(persona, nuevaEdad) {
    persona.edad = nuevaEdad;
}

actualizarEdad(persona, 35);

console.log(persona) // print resultado