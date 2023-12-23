const express = require('express')
const server = express();
const filmes = require('./src/data/filmes.json')
const pessoas = require('./src/data/pessoas.json')

//Consigo retornar os dados de uma API
server.get('/p', (req, res) => {
    return res.json(pessoas)
})
server.get('/f', (req, res) => {
    return res.json(filmes)
})

//Log do servidor
server.listen(3000, () => {
    console.log("Conectado!")
    console.log("Conectado a porta 3000")
})
