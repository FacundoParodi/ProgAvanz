/*Autenticación Simulada:
○ Crea una función llamada autenticarUsuario que tome un objeto
credenciales con usuario y contraseña, y verifique si coinciden con
un usuario predefinido. La función debe devolver true si la
autenticación es exitosa y false en caso contrario.*/

const credenciales= [
{   usuario: "Samantha",
    password: "sam1234"
},

{
    usuario: "Kamren",
    password: "kam1234"

}]

const usuarioPredefinido= {
    usuario: "Facundo",
    password: "facu1234"
}


function autenticarUsuario(credenciales) {
    return new Promise((verifica, noverifica) => {
        setTimeout(() => {
            const userValido = credenciales.some(usuario =>
                usuario.usuario === usuarioPredefinido.usuario &&
                usuario.password === usuarioPredefinido.password
            )
            if (userValido) {
                verifica(true) 
            } else {
                noverifica(false)
            }
        }, 1000)
    })
}


autenticarUsuario(credenciales) 
    .then(resultado => {
        console.log(resultado)
    })  
    .catch(error => {
        console.log(error)
    })
