/*Copiar Objetos:
Crea una copia profunda del objeto estudiante utilizando el método
JSON.parse y JSON.stringify. Modifica la copia y verifica que el objeto
original no haya sido alterado*/


const estudiante = {
    nombre: "Facundo",
    carrera: "Lic en sistemas",
    año: "3ro",
}

const ObjCadenaJSON = JSON.stringify(estudiante); //convertimos el objeto original "estudiante" en una cadena con "JSON.stringify"
                                                  //y lo almacenamos en la variable ObjCadenaJSON

console.log("Salida del objeto convertido en cadena: ", ObjCadenaJSON);


const copiaEstudiante = JSON.parse(ObjCadenaJSON); //a la variable le asignamos el nuevo objeto, q obtenemos de convertir
                                                   //la cadena nuevamente en un objeto con JSON.parse

copiaEstudiante.nombre= "martin";  //modificamos las propiedades de la copia
copiaEstudiante.año= "2do";

console.log("original: ", estudiante) 
console.log("copia: ", copiaEstudiante)


