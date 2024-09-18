import {Router} from 'express'
import { addResult, deleteResult, getAllResults } from './result.controller.js'
const  resultRouter= Router()


resultRouter.post('/',addResult)
resultRouter.get('/',getAllResults)
resultRouter.delete('/:id',deleteResult)










export default resultRouter