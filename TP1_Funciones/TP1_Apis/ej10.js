/*Actualización de Información del Usuario:
Crea una función llamada actualizarUsuario que tome un objeto
usuario y una lista de cambios a aplicar. La función debe retornar el
usuario con las propiedades actualizadas.*/

function actualizarUsuario(usuario, cambios) {
    return { ...usuario, ...cambios }
}

const usuario = {
    nombre: "Juan Pérez",
    email: "juan.perez@example.com",
    password: "contraseña123"
}

const cambios = {
    email: "nuevo.email@example.com",
    password: "nuevaContraseña456"
}

const usuarioActualizado = actualizarUsuario(usuario, cambios)

console.log(usuarioActualizado);