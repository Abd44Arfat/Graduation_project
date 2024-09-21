import {Router} from 'express'
import { signin, signup } from './user.controller.js'
import { checkEmail } from '../../middlewares/checkemail.js'
import { Validate } from '../../middlewares/validate.js'
import { signinVal, signupVal } from './user.validation.js'

const userRouter=Router()

userRouter.post('/signup',Validate(signupVal),checkEmail,signup)
userRouter.post('/signin',Validate(signinVal),signin)







export default userRouter 