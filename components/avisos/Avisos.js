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
    return db.select("*").from("avisos").orderBy("data","asc")
    .then(avisos =>{
        return avisos
    })

    .catch(err => {
        return { tipo: "erro", corpo: "Erro" + err }
    })
}

function excluir(id){
    return db.del().from('avisos').where('ID_avisos',id)
}

function selecionarAviso(id){
    return db.select('*').from('avisos').where('ID_avisos',id).first()
    .then(aviso => { return aviso })
    .catch(err => {
        return { tipo: "erro", corpo: "Erro" + err }
    })
}

function editar(aviso, id){
    return db('avisos').where('ID-avisos', id).update(aviso)
    .then(avisos =>{
        return { tipo: "sucesso", corpo: "Aviso alterado com sucesso" }
    })

    .catch(err => {
        return { tipo: "erro", corpo: "Erro" + err }
    })
}

module.exports = { salvar, selecionarTodos, excluir, selecionarAviso, editar }
