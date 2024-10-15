import {Router} from 'express'
import { deleteUser, getallUsers, getUser, updateUser } from './user.controller.js'


const userRouter=Router()

userRouter.get('/users',getallUsers)
userRouter.get('/user/:id',getUser)
userRouter.put('/user/:id',updateUser)
userRouter.put('/user/:id',deleteUser)







export default userRouter 