//importar as dependencias
const express = require('express')
const bodyParser = require('body-parser')

// importando as rotas do aviso
const routerAvisos = require('./components/avisos/AvisosController')

//inicializando o express
const app = express()

//configurar a view engine e a pasta pública
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.locals.moment = require('moment')

//configurar o bodyparser
app.use(routerAvisos)

//rotas
app.get("/", (req,res)=>{
    res.send("Vai etim!!!")
})

//escutar a porta
app.listen(3000)