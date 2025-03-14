export class Pessoa {
    _name
    _age
    _height
    _weight
    _imc
    _condition

    constructor(name, age, height, weight) {
        this._name = name
        this._age = age
        this._height = height
        this._weight = weight
        this._imc = (this._weight / (this._height * this._height)).toFixed(2)
        this._condition = this.conditions()
    }

    conditions() {
        if (this._imc < 18.5) {
            return "Abaixo do peso."
        } else if (this._imc <= 25) {
            return "Peso ideal."
        } else if (this._imc <= 30) {
            return "Acima do peso."
        } else if (this._imc <= 35) {
            return "Obesidade I"
        } else if (this._imc < 40) {
            return "Obesidade II"
        } else if (this._imc >= 40) {
            return "Obesidade III"
        } else {
            return "Digite suas informaçoes."
        }
    }
}
