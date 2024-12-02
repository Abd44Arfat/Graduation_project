import {Router} from 'express'
import { addCategory, deleteCategory, getAllCategorys, getOneCategory } from './categories.controller.js'
const  CategoryRouter= Router()



CategoryRouter.post('/',addCategory)
CategoryRouter.get('/',getAllCategorys)
CategoryRouter.delete('/:id',deleteCategory)
CategoryRouter.get('/:id',getOneCategory)




        





export default CategoryRouter