/*Validación de Formularios:
Crea una función llamada validarFormulario que tome un objeto con
los campos nombre, email y password. La función debe devolver true
si todos los campos están presentes y no están vacíos, y false en caso contrario.*/


const usuarios = [
    {
        nombre: "Juan Pérez",
        email: "juan.perez@example.com",
        password: "contraseña123"
    },
    {
        nombre: "", // Campo vacío
        email: "maria.lopez@example.com",
        password: "12345678"
    },
    {
        nombre: "Pedro García",
        email: "pedro.garcia@example.com",
        password: "ssgfdfdg"
    }
];


function validarFormulario(users) {
    for (let i=0; i < users.length; i++) {
        if (users[i].nombre == "" || users[i].email == "" || users[i].password == "") {     // || = OR
        return false 

        } 
    }

    return true
}

console.log(validarFormulario(usuarios))


