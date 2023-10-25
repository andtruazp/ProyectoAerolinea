import { Router } from 'express'
import {getEmpresa, updateEmpresa, bajaEmpresa, deleteEmpresa, newEmpresa, altaEmpresa} from '../controller/empresa.controller.js'

const router = Router()
 router.get('/empresa/:id', getEmpresa)

 router.post('/empresa/new', newEmpresa)

 router.put('/empresa/update/:id',updateEmpresa)

 router.put('/empresa/baja/:id',bajaEmpresa)

 router.put('/empresa/alta/:id',altaEmpresa)

 router.delete('/empresa/delete/:id',deleteEmpresa)

export default router