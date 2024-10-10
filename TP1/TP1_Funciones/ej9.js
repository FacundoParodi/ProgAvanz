/*Función que Devuelve Otra Función:
○ Crea una función llamada crearMultiplicador que tome un número x
y devuelva una nueva función que multiplique cualquier número por
x. */

function crearMultiplicador(x) {      //pasamos como parametro el numero x por el cual queremos multiplicar 
    return function multiplica(y) {   // la funcion principal retorna esta a la cual le pasamos el numero a ser multiplicado por x
        return x*y                    //como la funcion interna esta definida dentro de la funcion principal reconoce el valor x
    }
    
    }
    
const multiplica_por4 = crearMultiplicador(4)

