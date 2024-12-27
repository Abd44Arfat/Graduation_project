import { Router } from 'express'
import { deleteUser, getallUsers, getUser, updateUser } from './user.controller.js'

const userRouter=Router()

userRouter.get('/',getallUsers)
userRouter.get('/:id',getUser)
userRouter.put('/:id',updateUser)
userRouter.delete('/:id',deleteUser)

export default userRouter 