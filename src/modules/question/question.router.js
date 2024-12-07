import { Router } from 'express'
import { AddQuestions, deleteQuestions, getAllQuestions } from './question.controller.js'
const  QuestionRouter =Router()


QuestionRouter.route('/').post(AddQuestions).get(getAllQuestions)

QuestionRouter.route('/:id').delete(deleteQuestions)




export default QuestionRouter