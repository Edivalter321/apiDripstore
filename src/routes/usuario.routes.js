
import express from 'express'
import * as usuarioController from '../controller/usuario.controller.js'

const router = express.Router()

router.get('./getAll', usuarioController.getAll);





export default router;