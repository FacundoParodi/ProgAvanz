
function cuadradoPromise(num) { //esta funcion nos retorna una promesa

    if (typeof num !== "number") {
        console.log("solo ingresar numeros positivos")
    } 

    return new Promise((resolve, reject) => {   //entonces, aca definimos la promesa

        setTimeout(() => {  //si ya entramos al setTimeout, la promesa se esta ejecutando
            resolve({
                valor: num,         //aca ya arrancamos a resolver el return "positivo" (resolve) creamos un objeto
                resultado: num*num  //y le pasamos el num del cual queremos calcular el cuadrado    
            })
            
        }, 100);
        
    })
}
                  


/*aca cuando llamamos a la funcion se esta ejecutando lo que definimos arriba y lo que pasa arriba es lo siguiente:
se ejecuta con el parametro 2, entra y ya esta dentro del setTimeout y ahi en caso de ser exitoso entra en el resolve
un objeto con el valor q queremos calcular y el resultado de calcular el cuadrado*/

cuadradoPromise(2) 
.then((obj) => {   ////el .then es lo que se ejecuta dsp que se satisface la funcion inicial

    console.log("inicia ejecucion de la promise")
    console.log(obj)                                //aca leemos lo que recibe el objeto

                   //el .then recibe como parametros lo q sale del resolve (un objeto con 2 metodos)
})                 //el parametro obj lo usamos para indicar que tambien va a devolver un objeto               
.catch((error) => {
    console.log(error)
})








                   
