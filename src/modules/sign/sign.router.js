import { Router } from 'express'
import { AddSign, deleteSign, getAllSign } from './sign.controller.js'
const  SignRouter =Router()


SignRouter.route('/').post(AddSign).get(getAllSign)

SignRouter.route('/:id').delete(deleteSign)




export default SignRouter