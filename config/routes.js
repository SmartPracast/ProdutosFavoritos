const express = require('express')
const routes = express.Router()

let db = [
    {'1':{NomeProduto:'ps1', Valor: 100}},
    {'1':{NomeProduto:'ps2', Valor: 200}},
    {'1':{NomeProduto:'ps3', Valor: 600}},
    {'1':{NomeProduto:'ps4', Valor: 2000}},
    {'1':{NomeProduto:'ps5', Valor: 5000}}
]

routes.get('/', (req, res) => {
    return res.json(db)
})

routes.post('/login', (req, res) => {
    const body = req.body
    if(!body)
        return res.status(400).end()

    db.push(body)
    return res.json(body)
})

routes.post('/favorita', (req, res) => {
    const body = req.body
    if(!body)
        return res.status(400).end()

    db.push(body)
    return res.json(body)
})

routes.post('/listaFavoritos', (req, res) => {
    const body = req.body
    if(!body)
        return res.status(400).end()

    db.push(body)
    return res.json(body)
})


module.exports = routes
