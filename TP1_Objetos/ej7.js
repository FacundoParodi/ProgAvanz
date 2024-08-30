/*Eliminación de Propiedades:
Elimina la propiedad disponible del objeto producto. Imprime el
objeto antes y después de eliminar la propiedad*/

const producto = {
    nombre: "alfajor",
    disponible: true,
    precio: 1000,
}

console.log("antes de eliminar: " , producto); //antes de eliminar

delete producto.disponible; // accedemos al objeto y eliminamos el metodo q queremos

console.log("despues de eliminar: " , producto); //dsp de eliminar