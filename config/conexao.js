import mongoose from 'mongoose';

//const conexao = await mongoose.connect('mongodb://localhost:27017/5info')
const conexao = await mongoose.connect('mongodb://heitorwohlmann:heitorwohlmann@ac-4ndadk7-shard-00-00.ym6qwys.mongodb.net:27017,ac-4ndadk7-shard-00-01.ym6qwys.mongodb.net:27017,ac-4ndadk7-shard-00-02.ym6qwys.mongodb.net:27017/?ssl=true&replicaSet=atlas-eak6uo-shard-0&authSource=admin&retryWrites=true&w=majority&appName=kip')

export default conexao;