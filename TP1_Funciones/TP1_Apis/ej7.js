/*Envío de Datos a una API:
Crea una función llamada enviarDatos que tome un objeto data y
haga una petición POST a la API
https://jsonplaceholder.typicode.com/posts. La función debe
imprimir la respuesta de la API.*/


function enviarDatos(data) {
    fetch("https://jsonplaceholder.typicode.com/posts", {

        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)

    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la respuesta de la API')
        }
        return response.json()
    })

    .then(data => {
        console.log(data)
    })

    .catch(error => {
        console.error("Ha ocurrido un error:", error)
    })
}


const datos = {
    title: "foo",
    body: "bar",
    userId: 1
}


enviarDatos(datos)