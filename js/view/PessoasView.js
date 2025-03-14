export class PessoaView {

    constructor(elemento) {
        this._elemento = elemento
    }

    _template(model) {
        return `
            <table>
                <thead>
                    <tr>
                        <th>Nome</th> <th>idade</th> <th>Altura</th> <th>Peso</th> <th>IMC</th> <th>Condição</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.pessoas.map(pessoa => {
                        return `
                            <tr>
                                <td>${pessoa._name}</td>
                                <td>${pessoa._age}</td>
                                <td>${pessoa._height}</td>
                                <td>${pessoa._weight}</td>
                                <td>${pessoa._imc}</td>
                                <td>${pessoa._condition}</td>
                            </tr>
                        `
                    }).join('')}
                </tbody>
            </table>
        `
    }

    update(model) {
        this._elemento.innerHTML = this._template(model)
    }
}