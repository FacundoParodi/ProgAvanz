/*Consumo de Datos desde una API:
Crea una función llamada obtenerUsuarios que haga una petición
HTTP a la API https://jsonplaceholder.typicode.com/users usando
fetch. Luego, imprime en la consola la lista de usuarios obtenida.*/

function obtenerUsuarios() {
    fetch("https://jsonplaceholder.typicode.com/users") //hacemos la solicitud a la api 
    .then(respuesta => {
        return respuesta.json()  //en caso de ser aceptada la promise, convertimos los datos en formato .json para
    })                           //q js pueda trabajar con ellos convirtiendolo en un objeto
    .then(data => {
        return console.log(data) //leemos los datos
    })

    .catch(error => { //en caso de que la promise sea rechazada 
        return console.log("hubo problemas con la solicitud", error)
    })
};

obtenerUsuarios();

//respuesta: es el resultado de lo que nos devuelve la api
//data: es lo q obtenemos luego de convertirlos en formato .json
//error: es el argumento para el catch, en caso de error envia un mensaje