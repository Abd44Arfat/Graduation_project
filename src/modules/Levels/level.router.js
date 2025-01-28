import {Router} from 'express'
import { addLevel, deleteLevel, getAllLevels, getOnelevel, UpdateLevel } from './level.controller.js'
const  LevelRouter= Router({mergeParams:true})



LevelRouter.route('/').post(addLevel).get(getAllLevels)
LevelRouter.route('/:id').delete(deleteLevel).get(getOnelevel).put(UpdateLevel)





        





export default LevelRouter