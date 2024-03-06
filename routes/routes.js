import express from 'express';
import {hello, calculadora, abrecalculadora, abretabela, tabela, pesquisa, pesquisado} 
from '../controllers/controller.js'

const router = express.Router();

router.get('/', hello)
router.get('/calculadora', abrecalculadora)
router.get('/tabela', abretabela)
router.post('/tabela', tabela)
router.post('/calculadora', calculadora)
router.get('/pesquisa', pesquisa)
router.post('/pesquisa', pesquisadpost)

export default router;