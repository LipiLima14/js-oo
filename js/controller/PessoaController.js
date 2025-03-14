import { Pessoa } from '../classes/Pessoa.js'
import { ListaPessoas } from '../classes/ListaPessoas.js'
import { PessoaView } from '../view/PessoasView.js'

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

        this._listaPessoas = new ListaPessoas()
        
        this._pessoaView = new PessoaView(document.querySelector(".dates"))
        this._pessoaView.update(this._listaPessoas)
    }

    addPessoa(event) {
        event.preventDefault()

        this._listaPessoas.adiciona(this._getPessoa())

        this._pessoaView.update(this._listaPessoas)
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
