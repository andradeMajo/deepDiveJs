function concatenar() {
  //la idea es unit los strings enviados por parametros, utilizo arguments para poder permitir el ingreso de cualquier cantidad de valores, los guardo en una variable para poder unirlos con la  propiedad join (exclusiva para arreglos)
  let arr = Array.from(arguments)
  return arr.join("")

}





function invocarFunciones() {
  //invocarFunciones me recibe mas de dos funciones, la idea es, concatenar el resultado de estos por eso se creo la let union con un str vacio.
  let union = ""
  //recorro mis argumentos para que pare en las funciones pasadas por parametros
  for (let i = 0; i < arguments.length; i++) {
    union += arguments[i]()
    //concateno los argumentos ( las funciones, en i, y las ejecuto) para guardarlas en union 
  }
  return union
}



function creadorDeIncrementos(n) {
  //crea una funcion y devuelve una, el parametro enviado en la primera funcion, va ser el la let que nos pasan el en espect, y la funcion creada a continuacion; me tomara el valor del resulatado de la pasada y asi se suman para retirnar el resulatado 
  return function incrementar(nu) {
    return nu + n
  }

}



function invocacionUnica(fun) {
  //invacacion unica, la idea es que solo se ejecute una vez

  let result

  return function () {
    //creo una funcion en donde si funcion es verdadero, la iguale a una variable que solo sera llamada una vez. y luego el parametro es null para que asi no se repita este if 
    if (fun) {
      result = fun()
      fun = null
    }
    return result
  }
}





function objetoConClousure() {
  let num = 1;
  // creo un objeto con lo que me piden en el spec 
  let obj = {
    incremento: firtClass = num => num++
    ,
    incrementoPor10: () => num += 10,
    pedirValor: () => num,
    cambiarValor: (val) => num = val

  }

  return obj
}








function ListaDeFuncionesInvitados(arr, num) {
  //me dan  un arreglo y el num secreto, creo un arr vacio para poder retornarlo, el arreglo deve tener lo mismo que el de parametro
  let array = []
  //para que sean iguales lo recorro
  for (let i = 0; i < arr.length; i++) {
    // para que la funcion sea pusheada devo verificar que la clave sea igual, si no retorno el mensaje 


    array.push(function (code) {
      if (code === num) return arr[i];
      
      else return `código secreto: invalido`


    })


  }

  return array

}


function armarListaDeInvitados(str, code) {
  //ahora solo devo retornar el nombre que me contiene el arreglo de funciones creado anteriormente, deve ser retornado como un  arreglo
  arr = []
  //regcorro el arreglo de las funciones, y en cada una ejecuto, no olvidar que para poder tener la funcion de arriba devo pasar el codigo
  for (let i = 0; i < str.length; i++) {
    arr.push(str[i](code))

  }
  return arr

}










