//factrorial Interativo es "normal" sin usar recursiva

function factorialIterativo(num) {
    let resultado = 1

    for (let i = 1; i <= num; i++) {
        resultado *= i

    }
    return resultado
}

//ahora factorial si es recursiva
function factorial(num, fin = 1) {
    //declrao dos variables num y fin inicializada en 1
    if (num <= 0) return fin;
    //si el numero llega a ser menor o igual a o se termina y me muestra lo acomulado en fin 
    fin *= num;
    //fin lo multiplico por el numero pasado por parametro y le resto uno en cada vuelta
    num -= 1
    //llamo a la funcion para que se repita hasta el corte de arribita 
    return factorial(num, fin)


}



function fib(num) {
    //fib me toma un numero 
    if (num <= 1) return 1;
    //ahora si el numero es menor o igual a 1 para me da 1
    return fib(num - 2) + fib(num - 1)
    //la funcion me retornara la suma entre dos funciones, como asi ?
    //el primer numero fue 2, este numero no es menor o igual a 1 asi que sigue y me retorna la misma funcion donde 2 ahora es 2-2 =0, esto si me cumple la primera condicion entonces me retorna 1. ahora este 1 lo sumo con la segunda parte de la condicion donde 2 se me convierte en 2-1=1. esto tambien me da true en la condicion por lo tanto me da 1.  1+1=2 la respuesta es 2 jeje 
}



function factores(num, dem = []) {
    //factores me recive un numero y un arreglo donde tendre mis denominadores 
    if (num <= 1) return dem
    //mi condicion principal para cuando el numero sea uno o menor a este y me devuleve lo acomulado en mi arreglo

    for (let i = 2; i <= num; i++) {
        //ahora recorro mi num pasado como parametro, desde 2. 
        if (num % i == 0) {
            //ahora si ese numero(el paramtro) su modulo con el de ese momento el valor de i es =0 lleno mi parametro con el valor de i
            dem.push(i)
            //Ahora para continuar con el siguiente valor tiene que ser el numero dividivo por la i. ejemplo un 8, 8 %2=0 pero 8/2=4. ahora num es 4 4%2=0 y 4/2=2 y asi el dem se modifica con cada puseada del los numero denomidadores :)
            return factores(num / i, dem)
        }
    }


}

//perdon el que leyo mis comentarios jajja