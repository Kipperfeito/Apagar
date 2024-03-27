import multer from 'multer';
const foto = multer({ dest: './public' })
import express from 'express';
import { cadastro, editarusuario, mostrausuarios, abretelaeditar, hello, calculadora, abrecalculadora, abretabela, tabela, pesquisa, pesquisado, abriupload, upload, abretela, buscarusuarios }
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
router.get('/usuario', abretela)
router.post('/usuario', foto.single('foto'), cadastro)

router.get('/mostrausuarios', mostrausuarios)
router.post('/mostrausuarios', buscarusuarios)

router.get('/editarusuario/:id', abretelaeditar)
router.post('/editarusuario/:id', editarusuario)
export default router;