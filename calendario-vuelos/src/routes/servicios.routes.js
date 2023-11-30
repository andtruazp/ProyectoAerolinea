import { Router } from 'express'
import { agregarServicio, getServicios, getServiciosAll } from '../controller/servicio.controller.js'

const router = Router()

router.get('/servicio', getServicios)
router.get('/servicio/all',getServiciosAll)
router.post('/servicio',agregarServicio)

export default router