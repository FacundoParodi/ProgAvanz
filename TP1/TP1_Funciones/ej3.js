/*Función con Parámetro por Defecto:
Crea una función llamada saludar que tome un parámetro nombre
con un valor por defecto de "Invitado". La función debe devolver
"Hola, [nombre]"  */

function saludar(nombre="invitado") {
    return `hola ${nombre}`;
}

console.log(saludar()); 
console.log(saludar("facundo"));

