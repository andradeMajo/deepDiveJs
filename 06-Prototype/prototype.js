//creo un constructror mamifero, con nombre como parametro que recibe y decendecia como let intenran del contructro 

function Mamifero(nombre) {
    this.nombre = nombre
    this.descendencia = []
}

//creo una propiedad que salude

Mamifero.prototype.saludar = function () {
    return "Hola, mi nombre es " + this.nombre
}
//el hijo de mamifero, da igual que el parametro interno sea el mimso del spec??
//lo use con una nueva y con la creada, no tiro ningun error :)
Mamifero.prototype.nuevoHijo = function () {
    hijo = new Mamifero((this.nombre + " Jr"))
    this.descendencia.push(hijo)
    return hijo
}
//creo mi nuevo contructor gato, llamo lo mismo que Manifero, ypara que pueda utilizar la propiedad de manifero tmb igualo gato.prototype a un objeto nuevo ce manifero y luego el prototipo contructor lo igualo a Gato
function Gato(nombre, color, descendencia) {
    Mamifero.call(this, nombre, descendencia)
    this.color = color
}
Gato.prototype = Object.create(Mamifero.prototype)
Gato.prototype.constructor = Gato
//ahora creo un nuevo prototipo, de gato. Mi nuevo hijo, con los mismos parametros de gato o el hijo de mamifero
Gato.prototype.nuevoHijo = function (color) {
    batman= new Gato(this.nombre + " Jr", color)
    this.descendencia.push(batman)
    return batman
}








