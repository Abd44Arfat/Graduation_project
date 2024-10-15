import {Router} from 'express'
import { addDectionary, deleteDectionary, getAllDectionaries } from './dectionary.controller.js'
import { Validate } from '../../middlewares/validate.js'
import { addDectionaryVal, deleteDectionaryVal } from './dectionary.validation.js'
import { allowTo, protectedRouter } from '../auth/auth.controller.js'
const  dectionaryRouter =Router()


dectionaryRouter.post('/',protectedRouter,allowTo('admin'),Validate(addDectionaryVal),addDectionary)
dectionaryRouter.get('/',getAllDectionaries)
dectionaryRouter.delete('/:id',protectedRouter,allowTo('admin'),Validate(deleteDectionaryVal),deleteDectionary)


                




export default dectionaryRouter