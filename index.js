import express from 'express'
const app = express()
const port = 3000
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.listen(port)

app.get('/', (req, res) => {
    res.render("index")})
    
app.get('/soma', (req, res) => {
    res.render('soma')
})

app.post('/calculadora', (req, res) => {
    res.send("O resultado da soma é: "+ (parseInt(req.body.valor1) + parseInt(req.body.valor2)))
})

app.post('/pesquisar', (req, res) => {
    res.send("Dados recebidos: "+ req.body.nome)
})
