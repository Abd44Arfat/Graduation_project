import {Router} from 'express'
import { addDectionary, deleteDectionary, getAllDectionaries } from './dectionary.controller.js'
const  dectionaryRouter =Router()


dectionaryRouter.post('/',addDectionary)
dectionaryRouter.get('/',getAllDectionaries)
dectionaryRouter.delete('/:id',deleteDectionary)








export default dectionaryRouter