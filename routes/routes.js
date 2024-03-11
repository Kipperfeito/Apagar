import multer from 'multer';
const foto = multer({ dest: './public' })
import express from 'express';
import {hello, calculadora, abrecalculadora, abretabela, tabela, pesquisa, pesquisado, abriupload, upload} 
from '../controllers/controller.js'

const router = express.Router();

router.get('/', hello)
router.get('/calculadora', abrecalculadora)
router.get('/tabela', abretabela)
router.post('/tabela', tabela)
router.post('/calculadora', calculadora)
router.get('/pesquisa', pesquisa)
router.post('/pesquisa', pesquisado)
router.get('/upload', abriupload)
router.post('/upload', foto.single('foto'), upload)
export default router;