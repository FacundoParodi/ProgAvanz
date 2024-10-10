function cuadradoCallback(num, callback) {    // callback es otra función que se pasará como argumento
    setTimeout(() => {
                                  // Llama a la función callback con el número y su cuadrado (num * num)
        callback(num, num * num); // Aquí estamos pasando num y el resultado de num * num a la función callback
    }, 100);                      // Espera 100 ms antes de ejecutar la callback
}



// Llamamos a cuadradoCallback con el número 2 y una función callback

cuadradoCallback(2, (valor, resultado) => { // aca estamos pasando la función callback: (valor, resultado)
                        // Esta función será ejecutada dentro de cuadradoCallback una vez que el cálculo esté listo
    
     console.log("inicia callback");           
          
    // Imprimimos el valor recibido (2) y su cuadrado (4)
    console.log(`El valor es ${valor} y su cuadrado es ${resultado}`); // Aquí se ejecuta la función callback y se muestran los resultados
    
    console.log("terminó el callback"); 
});




//Un callback es una función que se pasa 
//como argumento a otra función y se ejecuta después de que se completa alguna operación 
//dentro de la funcion principal 