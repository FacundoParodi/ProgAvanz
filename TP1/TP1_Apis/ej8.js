/*Búsqueda de Usuarios:
Crea una función llamada buscarUsuarioPorEmail que tome un array
de usuarios y un email como parámetros, y devuelva el usuario que
coincida con el email proporcionado. Usa el método find para
implementarlo.*/

const usuarios = [
    { nombre: "Juan Pérez", email: "juan.perez@example.com", password: "contraseña123" },
    { nombre: "María López", email: "maria.lopez@example.com", password: "12345678" },
    { nombre: "Pedro García", email: "pedro.garcia@example.com", password: "ss" }
]


function buscarUsuarioPorEmail(usuarios, email) {
    return usuarios.find(usuario => usuario.email === email)
}

const resultado = buscarUsuarioPorEmail(usuarios, "maria.lopez@example.com")

console.log(resultado)

