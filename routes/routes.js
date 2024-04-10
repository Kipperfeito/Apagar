import express from 'express';
const router = express.Router();

import passport from '../config/passport.js';

//import { upload,helloworld,hellonome,abrecalculadora,calculadora,abretabela,tabela,qualquernome,nomesobrenome,soma,pesquisar, abrirupload } from '../controllers/controllers.js';

import {
    abretela,
    cadastrausuario,
    deletarusuario,
    mostrausuarios,
    buscarusuarios,
    abretelaeditar,
    editarusuario,
    abrelogin,
    abrepostadd,
    postadd,
    listapost,
    filtrapost
} from '../controllers/controllers.js';

import multer from 'multer';
const foto = multer({
    dest: './public'
})

router.get('/usuario', abretela)
router.post('/usuario', foto.single('foto'), cadastrausuario)

router.get('/mostrausuarios', mostrausuarios)
router.post('/mostrausuarios', buscarusuarios)

router.get('/editarusuario/:id', abretelaeditar)
router.post('/editarusuario/:id', editarusuario)

router.get('/deletarusuario/:id', deletarusuario)

router.get('/', abrelogin)

router.post('/', passport.authenticate('local', {
    successRedirect: '/usuario',
    failureRedirect: '/'
}));

router.get('/postadd', abrepostadd)
router.post('/postadd', postadd)

router.get('/postlist', listapost)
router.post('/postlist', filtrapost)

export default router;