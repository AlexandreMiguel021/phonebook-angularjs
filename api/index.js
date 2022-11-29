const operadoras = require('./data/operadoras')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3001

let contacts = [
  {
    name: 'Bruno da silva',
    phone: '4199992222',
    date: new Date(),
    operadora: { name: 'Oi', code: 14, category: 'Celular' }
  },
  {
    name: 'Sandra lucia',
    phone: '4199993333',
    date: new Date(),
    operadora: { name: 'Vivo', code: 15, category: 'Celular' }
  },
  {
    name: 'mariana freitas',
    phone: '4199999999',
    date: new Date(),
    operadora: { name: 'Tim', code: 41, category: 'Celular' }
  }
]

app.use(bodyParser.json())
app.listen(port)

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

app.get('/contatos', (req, res) => {
  res.json(contacts)
})

app.post('/contatos', (req, res) => {
  contacts.push({
    ...req.body,
    date: new Date()
  })
  res.json({ message: 'Contado adicionado com sucesso!' })
})

app.post('/contatos/delete', (req, res) => {
  contacts = req.body
  res.json({ message: 'Contado deletado com sucesso!' })
})

app.get('/operadoras', (req, res) => res.json(operadoras))
