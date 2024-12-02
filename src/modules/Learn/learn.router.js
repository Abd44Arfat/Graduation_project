import { Router } from 'express'
import { AddQuestions, deleteQuestions, getAllQuestions } from './learn.controller.js'
const  LearnRouter =Router()


LearnRouter.route('/').post(AddQuestions).get(getAllQuestions)

LearnRouter.route('/:id').delete(deleteQuestions)




export default LearnRouter