//se utiliza la programción funcional en este modulo
//Map 
//me pasan como parametro, un arr y una funcion. la idea es llenar un arreglo modificada por la funcion dada como parametro. Similar a lo que nos hace Map, modificar todos los elementos de un arra segun la funcion dada como callback
function map(arr, fn) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i]))
    }
    return newArr
}

//duplicar, devolver el doble


function duplicar(num) {
    return num * 2
}
//Filter
//nos dan un arreglo como parametro y una funcion, filter nos dice cual cumple la condicion pasada como funcion en los parametros :) 

function filter(arr, fn) {
    let newArray = []
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i])) newArray.push(arr[i])


    }
    return newArray

}

//contains
// coleccion puede ser un arr o un objeto, por eso los "clasifico" y asi tratar a cada uno como es devido xd 
function contains(col, num) {
    if (Array.isArray(col) == true) {
        //si es arr, lo recorro, la idea es verificar que todos sea iguales al mismo por eso el
        for (let i = 0; i < col.length; i++) {
            if (col[i] == num || col[i + 1] == num) {

                return true


            } else return false
        }
        //ahora si col es un objeto, lo recorro con un for in y verifico que los valores sean iguales al num pasado por parametro 
    } if (typeof col == "object") {

        for (const key in col) {
            if (col[key] == num) return true
        }

    }

}



function cuentaPalabras(str) {
    //condiciono en dos partes, si es un str solito para que solo me lo splite
    if (typeof (str) == "string") return str.split(" ").length
    //si es un objeto (arr) me lo junte para que no tenga las comas que me lo divide, y lo separo pero como un str y lo cuento 
    else if (typeof (str) == "object") return str.join(" ").split(" ").length



}


function reduce(arr, val, fn) {
    //reduce
    //recorro el arreglo pasado por parametro, y el valor que fue pasado por parametro va ser igual a la funcion tambien pasada como parametro con paramtro de el valor y el valor que sea en ese momento de arr


    for (let i = 0; i < arr.length; i++) val = fn(val, arr[i])
    // expliacion grafica lol 
    //0=suma(0,3)
    //la funcion suma que hace ¿?.. suma a y b osea 0+3 y asic on todo el arreglo 



    return val


}


function cuentaPalabrasReduce(n, str) {
    //esta es armada por mi xd
    //cuando muestro por consola str me sale  "y acá hay otra linea más" y n es 0, cuentaPalabras solo me revise palabras y un str pero si paso como parametro n me da el valor de 5 y con str 6 la suma de estos me da 11 :)
    return n + cuentaPalabras(str)

}


function suma(arr) {
    //suma solo me recive un arr pero devo usar reduce para ejercutarla
    //reduce me recivira el mismo parametro, un 0 como valor para que no me modifique internamte y solo sea una suma y como funcion, la suma de a y b
    return reduce(arr, 0, (a, b) =>  a + b)
}


function every(arr, fn) {
    //con esto todo me tiene que dar true. 
    //retorno reduce para asi pasar el mismo arreglo, como valor true se viendolo desde adentro de reduce seria algo así;
    return reduce(arr, true, (a, b) => fn(b) == a)

    //true=fn(b)==a


}

function any(arr, fn) {
    //ahora any, tambien retornamos reduce
    return reduce(arr, false, (a, b) => fn(b) != a)

    //false=fn(b)!=a
}