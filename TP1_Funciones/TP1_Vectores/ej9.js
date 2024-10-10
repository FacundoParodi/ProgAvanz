/*Uso de find:
○ Crea un array de objetos llamados personas donde cada objeto
tenga nombre y edad. Usa find para encontrar a la primera persona
mayor de 30 años.*/

let personas= [
    {nombre: "pedro", 
        edad: 36
    },

    {nombre: "facundo",
        edad: 21
    },

    {nombre: "santiago",
        edad: 22

    }

];

function mayor30(array) {
    return array.find(function(persona) {
        return persona.edad > 30;
    });
}


console.log(mayor30(personas));