function setPropsOnObj(obj) {

    obj["p"] = 5
    obj["plataforma"] = 5
    let proximo = num => num + 1
    obj["proximo"] = proximo
    obj["la"] = { "clave": { "secreta": { "es": 404 } } }

}


function setPropsOnArr(array) {
    array.hola = () => "Hola!"
    array["river"] = "plate"
    array[0] = 5
    let doble = num => num * 2
    array["doble"] = doble
}

function setPropsOnFunc(functionObject) {

    let date = new Date()
    functionObject.year = date.getFullYear()
    functionObject.mitad = num => num / 2
    
    functionObject.prototype["helloWorld"] = function () {
        return 'Hello World'
    }
}
