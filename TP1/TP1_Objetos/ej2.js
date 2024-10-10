/*Anidación de Objetos:
○ Crea un objeto llamado estudiante con propiedades nombre, edad y
direccion. direccion debe ser otro objeto con propiedades calle,
ciudad y pais. Imprime la dirección completa del estudiante.*/

const estudiante= {   //objeto principal

    nombre: "Facundo",
    edad: "21",
    
    direccion: {            //objeto anidado
        calle: "Falsa123",
        ciudad: "Cdu",
        pais: "Arg",
    }

}

console.log(estudiante.direccion);


