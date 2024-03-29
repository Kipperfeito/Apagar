import Usuario from '../modelos/usuario.js'

export function abriupload(req, res) {
    res.render('upload')
}

export function upload(req, res) {
    res.send("<img src='/" + req.file.filename + "'>")
}
export function hello(req, res) {
    res.send("Hello")
}

export function abrecalculadora(req, res) {
    res.render('calculadora')
}

export function calculadora(req, res) {
    const op = req.body.op;
    var v1 = parseInt(req.body.valor1)
    var v2 = parseInt(req.body.valor2)
    let resultado;
    if (op == 'Soma') {
        resultado = (v1 + v2)
    }
    else if (op == 'Subtração') {
        resultado = (v1 - v2)
    }
    else if (op == 'Multiplicação') {
        resultado = (v1 * v2)
    }
    else if (op == 'Divisão') {
        resultado = (v1 / v2)
    }
    res.render('calculadora', { op, resultado })
}

export function abretabela(req, res) {
    res.render('tabela')
}

export function tabela(req, res) {
    var valor = parseInt(req.body.linhas)
    res.render('tabela', { linhas: valor, colunas: req.body.colunas })
}

export function pesquisa(req, res) {
    res.render('index')
}

export function pesquisado(req, res) {
    res.send("Dados Recebidos de " + req.body.nome)
}

export function abretela(req, res) {
    res.render('usuario')
}

export async function cadastro(req, res) {
    const usuario = new Usuario({
        nome: req.params.nome,
        email: req.params.email,
        senha: req.params.senha,
        foto: req.file.filename,
        datanasc: req.params.datanasc
    })

    console.log(usuario);

    await usuario.save();
    res.render('usuario')
}
export async function mostrausuarios(req, res) {
    let usuarios = await Usuario.find({})
    res.render('mostrausuarios', { Usuarios: usuarios })
}
export async function buscarusuarios(req, res) {
    let usuarios = await Usuario.find({ nome: req.body.pesquisar })
    res.render('mostrausuarios', { Usuarios: usuarios })
}
export async function abretelaeditar(req, res) {
    let usuario = await Usuario.findById(req.params.id);
    res.render('editarusuario', { Usuario: usuario });
}
export async function editarusuario(req, res) {
    let usuario = await Usuario.findById(req.params.id)
    usuario.nome = req.body.nome;
    usuario.email = req.body.email;
    usuario.senha = req.body.senha;
    usuario.datanasc = req.body.datanasc;
    await usuario.save();
    res.redirect('/mostrausuarios')
}