import {Router} from 'express'
import { addDectionary, deleteDectionary, getAllDectionaries } from './dectionary.controller.js'
import { Validate } from '../../middlewares/validate.js'
import { addDectionaryVal, deleteDectionaryVal } from './dectionary.validation.js'
const  dectionaryRouter =Router()


dectionaryRouter.post('/',Validate(addDectionaryVal),addDectionary)
dectionaryRouter.get('/',getAllDectionaries)
dectionaryRouter.delete('/:id',Validate(deleteDectionaryVal),deleteDectionary)







export default dectionaryRouter