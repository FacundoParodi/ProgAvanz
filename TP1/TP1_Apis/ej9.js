/*Generación de Token de Autenticación:
Crea una función llamada generarToken que tome un objeto usuario
y devuelva un token JWT simulado como una cadena. Puedes usar
una función como btoa (Base64) para simular la generación del
token*/

function generarToken(usuario) {
    const header = {
        alg: "HS256",
        typ: "JWT"
    }

    const payload = {
        nombre: usuario.nombre,
        email: usuario.email
    }

                                                
    const base64Header = btoa(JSON.stringify(header)) // Codificamos el header y el payload en Base64
    const base64Payload = btoa(JSON.stringify(payload))

    const token = `${base64Header}.${base64Payload}`   // Simulamos la generación del token concatenando las partes

    return token;
}


const usuario = {
    nombre: "facu",
    email: "facu@gmail.com"
}

const token = generarToken(usuario)
console.log(token)