import {Router} from 'express'
import { addLevel, deleteLevel, getAllLevels, getOnelevel } from './level.controller.js'
const  LevelRouter= Router({mergeParams:true})



LevelRouter.route('/').post(addLevel).get(getAllLevels)
LevelRouter.route('/:id').delete(deleteLevel).get(getOnelevel)





        





export default LevelRouter