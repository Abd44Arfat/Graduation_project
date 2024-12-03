import {Router} from 'express'
import { addCategory, deleteCategory, getAllCategorys, getOneCategory } from './categories.controller.js'
import LevelRouter from '../Levels/level.router.js'
const  CategoryRouter= Router()

CategoryRouter.use('/:category/level',LevelRouter)
CategoryRouter.post('/',addCategory)
CategoryRouter.get('/',getAllCategorys)
CategoryRouter.delete('/:id',deleteCategory)
CategoryRouter.get('/:id',getOneCategory)




export default CategoryRouter