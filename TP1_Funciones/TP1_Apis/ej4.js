/*Transformación de Datos:
Crea una función llamada mapearUsuarios que tome un array de
usuarios obtenidos de la API y devuelva un nuevo array con solo las
propiedades nombre y email de cada usuario.*/

function obtenerUsuarios() {
    return fetch("https://jsonplaceholder.typicode.com/users")
    .then(respuesta => {
        return respuesta.json() 
    })

    .then(leerRespuesta => {
        return (leerRespuesta) //devuelve los datos de la api, NO los lee
    })

    .catch(error => {
        return console.log("ha habido un erroor", error)

    })
}

const usuarios = obtenerUsuarios()


function devolverModificado(users) {
    return new Promise((resolve, reject) => {

        const nuevoArray= users.map(usuario => {
            return {
            nombre: usuario.name,
            email: usuario.email
            }
        })

    resolve(nuevoArray) //devolvemos el array modificado

    reject("ha habido un error") //en caso de error retorna el mensaje
        
    })
}


obtenerUsuarios() 
    .then(usuarios => { //usuarios es el resultado de la promesa una vez que se resuelve
        return devolverModificado(usuarios) 
    })

    .then(array => {
        console.log(array)
    })

    .catch(error => {
        console.log(error)
    });



