import conexao from '../config/conexao.js'

const Usuario = new conexao.Schema({
    nome: 'String',
    email: {
        type: 'String',
        require: true
    },
    senha: 'String',
    foto: 'String',
    datanasc: {
        type: 'Date',
    }
})
export default conexao.model('Usuario',Usuario)