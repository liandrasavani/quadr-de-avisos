const db = require('../../knexfile.js')

function salvar(aviso) {

    return db.insert(aviso).into('avisos')
        .then(id => {
            return { tipo: "sucesso", corpo: "Aviso cadastrado com sucesso! ID " }
        })

        .catch(err => {
            return { tipo: "erro", corpo: "Erro" + err }
        })
}

function selecionarTodos(){
    return db.select("*").from("avisos")
    .then(avisos =>{
        return avisos
    })

    .catch(err => {
        return { tipo: "erro", corpo: "Erro" + err }
    })
}

module.exports = { salvar, selecionarTodos }