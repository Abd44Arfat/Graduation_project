import { Router } from 'express'
import { AddSign, deleteSign, getAllSign } from './sign.controller.js'
import { uploadSinleFile } from '../../fileUpload/fileUpload.js'
const  SignRouter =Router()


SignRouter.route('/').post(uploadSinleFile("sign_Url","sign"),AddSign).get(getAllSign)

SignRouter.route('/:id').delete(deleteSign)




export default SignRouter