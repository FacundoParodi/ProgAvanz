/*Métodos Getters y Setters: Añade un getter y un setter al objeto libro para la propiedad
añoDePublicacion. Usa el setter para actualizar el año de publicación
y luego usa el getter para leerlo*/

const libro = {
    titulo: "El extranjero",
    autor: "Albert Camus",
    _añoDePublicacion: "1942",


//el get y set deben tener el mismo nombre q la propiedad del objeto
set añoDePublicacion(nuevoAño) {
    this._añoDePublicacion = nuevoAño;  
},

get añoDePublicacion() {
    return this._añoDePublicacion;
}

}
console.log("año actual: ", libro.añoDePublicacion);  //aca estamos llamando al getter con libro.añoDePublicacion

const AñoActualizado = prompt("ingresar año a actualizar: ")
libro.añoDePublicacion = AñoActualizado //llamamos al setter con libro.añoDePublicacion y le asignamos el valor 

console.log("se actualizo la fecha y ahora es: ", libro.añoDePublicacion)


