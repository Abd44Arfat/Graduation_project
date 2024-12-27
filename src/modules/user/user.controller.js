
import { User } from '../../../DB/models/user.schema.js'
import { catchError } from '../../middlewares/catchError.js'
import { AppError } from '../../utils/appError.js'
import { ApiFeatures } from '../../utils/apiFeature.js'

const getallUsers =catchError( async(req,res)=>{
    let apiFeatures =new ApiFeatures(User.find(),req.query)
            let users =await apiFeatures.mongooseQuery
    res.status(201).json({message:"User Created .." , users})
})

const getUser =catchError( async(req,res)=>{
let user = await User.findById(req.params.id)
    res.status(201).json({message:"User ---->" , user})
})

const updateUser =catchError( async (req,res,next)=>{
    // if(req.body.profile_Picture) req.body.profile_Picture=req.file.filename
    let user = await User.findByIdAndUpdate(req.params.id, req.body,{new:true})
    user || next(new AppError('User Not found',404))
    !user || res.json({message:"Success ..", user})
})

const deleteUser =catchError( async (req,res,next)=>{
    let user = await User.findByIdAndDelete(req.params.id)
    user || next(new AppError('User Not found',404))
    !user || res.json({message:"Success ..", user})
})

export {
    getallUsers,
    getUser,
    updateUser,
    deleteUser
}