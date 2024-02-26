import express from 'express'
const app = express()
const port = 3000


app.listen(port)

app.get('/', (req, res) => {
    res.send("Hello World")})


app.get('/soma/:valor1/:valor2', (req, res) => {
    var valor1 = req.params.valor1
    var valor2 = req.params.valor2
    var soma = parseInt(valor1) + parseInt(valor2)
    
    res.send("O resultado da soma é: "+ soma)
})
