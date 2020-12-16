//importar as dependencias
const express = require('express')
const bodyParser = require('body-parser')
const moment = require('moment')

// importando as rotas do aviso
const routerAvisos = require('./components/avisos/AvisosController')

//inicializando o express
const app = express()

//configurar a view engine e a pasta pública
app.set('view engine', 'ejs')
app.use(express.static('public'))

//moment
moment.locale("pt-br")
app.locals.moment = moment

//configurar o bodyparser
app.use(routerAvisos)

//rotas
app.get("/", (req,res)=>{
    res.send("Vai etim!!!")
})

//escutar a porta
app.listen(3000)