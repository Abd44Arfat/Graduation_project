import { Router } from 'express'
import { AddMistake, deleteMistake, getAllMistake } from './mistake.controller.js'
const  MistakeRouter =Router()


MistakeRouter.route('/').post(AddMistake).get(getAllMistake)

MistakeRouter.route('/:id').delete(deleteMistake)




export default MistakeRouter