import conexao from '../config/conexao.js'

const postH = conexao.Schema({
    titulo:{ type:'String',
             required: true,
    },
    texto:'String',
    tags: ['String'],
    foto: 'String',
    datanasc: {
        type: 'Date',
    },
    status: {
        type:'String',
    }
})

export default conexao.model('postH',postH)