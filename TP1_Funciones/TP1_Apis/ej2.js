/*Procesamiento de Datos de una API:
Usando la función obtenerUsuarios, crea otra función llamada
imprimirNombresDeUsuarios que filtre y muestre solo los nombres
de los usuarios*/

function obtenerUsuarios(callback) {
    fetch("https://jsonplaceholder.typicode.com/users")  
    .then(respuesta => {
        return respuesta.json()  
    })                           
    .then(data => {
        return callback(data)
    })

    .catch(error => {  
        return console.log("hubo problemas con la solicitud", error)
    })

};


function imprimirNombresDeUsuarios(usertag) {
    usertag.forEach(usuario => {     
    console.log(usuario.username)
    });
}


obtenerUsuarios(imprimirNombresDeUsuarios)