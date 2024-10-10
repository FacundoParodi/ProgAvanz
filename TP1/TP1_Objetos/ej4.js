/*Iteración sobre Propiedades de un Objeto:
○ Crea un objeto producto con propiedades como nombre, precio y
disponible. Usa un bucle for...in para imprimir todas las propiedades
y sus valores.*/

const producto = { 
    nombre: "Pan",
    precio: 2500,
    disponible: true


}

for (let i in producto) {                         //i= nombre
    console.log(i + ": " + producto[i])            //    precio
}                                                 //    producto





