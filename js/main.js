import { PessoaController } from "./controller/PessoaController.js"

const pessoaController = new PessoaController()

const form = document.querySelector("form")

form.addEventListener("submit", (event) => {
    pessoaController.addPessoa(event)

    pessoaController.cleanForm()
})
