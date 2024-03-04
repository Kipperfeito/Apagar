import express from 'express'
const app = express()
const port = 3000
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.listen(port)

app.get('/', (req, res) => {
    res.render("index")})
    
app.get('/calculadora', (req, res) => {
    res.render('calculadora')
})
app.get('/tabela', (req, res) => {
    res.render('tabela')
})
app.post('/tabela', (req, res) => {
    var valor = parseInt(req.body.linhas)
    res.render('tabela', {linhas:valor})
})
app.post('/calculadora', (req, res) => {
   const op = req.body.op;
   var v1 = parseInt(req.body.valor1)
   var v2 = parseInt(req.body.valor2)
   let resultado;
    if(op == 'Soma'){
        resultado = (v1 + v2)
    }
    else if(op == 'Subtração'){
       resultado = (v1 - v2)
    }
    else if(op == 'Multiplicação'){
        resultado = (v1 * v2)
    }
    else if (op == 'Divisão') {
        resultado = (v1 / v2)
    }
    res.render('calculadora', {op, resultado})
})

app.post('/pesquisar', (req, res) => {
    res.send("Dados recebidos: "+ req.body.nome)
})
