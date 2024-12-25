import {Router} from 'express'
import { deleteUser, getallUsers, getUser, updateUser } from './user.controller.js'
import { uploadSinleFile } from '../../fileUpload/fileUpload.js'

const userRouter=Router()

userRouter.get('/',getallUsers)
userRouter.get('/:id',getUser)
userRouter.put('/:id',uploadSinleFile('image','user'),updateUser)
userRouter.delete('/:id',deleteUser)

export default userRouter 