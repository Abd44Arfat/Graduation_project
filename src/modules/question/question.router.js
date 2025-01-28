import { Router } from 'express'
import { AddQuestions, deleteQuestions, getAllQuestions, getoneQuestions, updateQuestions } from './question.controller.js'
import { uploadSinleFile } from '../../fileUpload/fileUpload.js'
const  QuestionRouter =Router()


QuestionRouter.route('/').post(uploadSinleFile("sign_Url","questions"),AddQuestions).get(getAllQuestions)

QuestionRouter.route('/:id').delete(deleteQuestions).put(uploadSinleFile("sign_Url","questions"),updateQuestions).get(getoneQuestions)




export default QuestionRouter