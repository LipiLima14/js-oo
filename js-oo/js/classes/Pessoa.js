export class Pessoa {
    _name
    _age
    _height
    _weight
    _imc

    constructor(name, age, height, weight) {
        this._name = name
        this._age = age
        this._height = height
        this._weight = weight
        this._imc = (this._weight / (this._height * this._height)).toFixed(2)
    }
}
