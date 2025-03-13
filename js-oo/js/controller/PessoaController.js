import { Pessoa } from '../classes/Pessoa.js'

export class PessoaController {
    _inputName
    _inputAge
    _inputHeight
    _inputWeight

    constructor() {
        this._inputName = document.querySelector('#name')
        this._inputAge = document.querySelector('#age')
        this._inputHeight = document.querySelector('#height')
        this._inputWeight = document.querySelector('#weight')
    }

    addPessoa(event) {
        event.preventDefault()

        this._getPessoa()
        console.log(this._getPessoa())
    }

    _getPessoa() {
        return new Pessoa(
            this._inputName.value,
            this._inputAge.value,
            this._inputHeight.value,
            this._inputWeight.value
        )
    }

    cleanForm() {
        this._inputName.value = ''
        this._inputAge.value = ''
        this._inputHeight.value = ''
        this._inputWeight.value = ''
    }
}
