
import express from 'express';
import * as usuarioController from '../controller/usuario.controller.js';

const router = express.Router();

router.get('/getAll', usuarioController.getAll);
router.get('/getOne/:id', usuarioController.getOne);
router.post('/create', usuarioController.create);





export default router;