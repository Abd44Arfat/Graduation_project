import {Router} from 'express'
import { addCategory, deleteCategory, getAllCategorys } from './categories.controller.js'
const  CategoryRouter= Router()



CategoryRouter.post('/',addCategory)
CategoryRouter.get('/',getAllCategorys)
CategoryRouter.delete('/:id',deleteCategory)




        





export default CategoryRouter