import { Router } from 'express'
import { AddProcess, deleteProcess, getAllProcess } from './userProcess.controller.js'
const  ProcessRouter =Router()


ProcessRouter.route('/').post(AddProcess).get(getAllProcess)

ProcessRouter.route('/:id').delete(deleteProcess)




export default ProcessRouter