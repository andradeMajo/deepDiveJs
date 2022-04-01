function CalculadoraNPI() {
    this.list = []
    this.array = []
    this.log = 0
    this.resultado = 0
    this.resta = 0
    this.suma = 0
}
CalculadoraNPI.prototype.agregar = function (num) {

    this.list.push(num)
    this.log = this.list.length
}

CalculadoraNPI.prototype.restar = function () {
    let resta = 0

    if (this.log < 2) {
        throw 'La calculadoraNPI necesita por lo menos 2 números'

    }
    if (this.log == 2) {
        resta = this.list[0] - this.list[1]
        this.resultado = resta
    } if (this.log == 3) {

        resta = this.list[1] - this.list[2]
        this.resta = resta
        this.resultado = resta

    }

}


CalculadoraNPI.prototype.sumar = function () {


    if (this.log < 2) {
        throw 'La calculadoraNPI necesita por lo menos 2 números'

    } else {
        if (this.log == 2) {
            this.resultado = this.list[0] + this.list[1]
        }
        if (this.log >= 3) {
            if (this.resta) {
                this.resultado = this.list[0] + this.resta
            } else { this.array.push(this.list.pop())
                if (this.array.length == 2) {

                    this.resultado = this.list[0] + (this.array[0] + this.array[1])
                } else this.resultado = this.list[1] + this.array[0]
            }
        }
    }
}

CalculadoraNPI.prototype.dividir = function () {
    if (this.log < 2) {
        throw 'La calculadoraNPI necesita por lo menos 2 números'

    } else {
        this.resultado = 0
        let div = 0
        div = this.list[1] / this.list[2]
        this.resultado = div

    }
}
CalculadoraNPI.prototype.multiplicar = function () {
    if (this.log < 2) {
        throw 'La calculadoraNPI necesita por lo menos 2 números'

    } else {
        this.resultado = this.list[0] * this.resultado
    }
}
CalculadoraNPI.prototype.valor = function () {

    return this.resultado
}