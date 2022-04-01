function crearCalculadora() {
    //creo a la funcion "crearCalculadora", solo se equejuta una vez. Inicia en 0
    let inicio = 0

    let operaciones = {
        valor: function () {
            return inicio
            // el valor nos retorna el numero inicio
        },
        sumar: function (numero) {
            inicio += numero

            return inicio

            //la suma me toma más de un numero, con mi variable inicio. acomulo la sumatoria de los parametros y retorno el resulatado             
        },
        restar: function (num) {
            inicio -= num

            return inicio
            // la funcion resta me acomula la resta de los numeros, parecido a lo función suma pero con resta :)
        },
        reset: function () {
            return inicio=0
            //reset, me devuelve el valor inicio en 0, como inicio es modificado por los parametros llamados anteriorermente. no puedo llamarlo solo ya que me daria el otro resultado            
        }


    }

    return operaciones
    // si no retorno la let operaciones no me va a dar nada, obvio jaja 
}