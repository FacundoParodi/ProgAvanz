/*Métodos en Objetos:
 Añade un método llamado descripción al objeto libro que devuelva
una cadena describiendo el título y el autor del libro. Invoca este
método e imprime el resultado.*/

const libro = {
    titulo: "El extranjero",
    autor: "Albert Camus",
    AñoDePublicacion: "1942",

    descripcion: function() {       //este es el metodo

        const descripcion_libro = `El titulo es: ${this.titulo}, y el autor es ${this.autor}`
        console.log(descripcion_libro);
    }
}

libro.descripcion();