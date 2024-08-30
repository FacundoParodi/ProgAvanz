/*Función que Modifica un Objeto:
Crea una función llamada actualizarEdad que tome un objeto
persona y un número nuevaEdad, y actualice la propiedad edad del
objeto*/

const persona= {
nombre: "facundo",
edad: 21,
}

function actualizarEdad(sujeto, nuevaEdad) {
    sujeto.edad = nuevaEdad
}

console.log("antes de actualizar: ",persona) 

actualizarEdad(persona, 22) //actualizamos
console.log("despues de actualizar: ",persona)