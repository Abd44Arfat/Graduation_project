import {Router} from 'express'
import { changeUserPassword, getallUsers, getUser, signin, signup, updateUser } from './user.controller.js'
import { checkEmail } from '../../middlewares/checkemail.js'
import { Validate } from '../../middlewares/validate.js'
import { changePasswordVal, signinVal, signupVal } from './user.validation.js'

const userRouter=Router()

userRouter.post('/signup',Validate(signupVal),checkEmail,signup)
userRouter.post('/signin',Validate(signinVal),signin)
userRouter.patch('/changepassword',Validate(changePasswordVal),changeUserPassword)
userRouter.get('/users',getallUsers)
userRouter.get('/user/:id',getUser)
userRouter.put('/user/:id',updateUser)







export default userRouter 