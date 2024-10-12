import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { User } from '../../../DB/models/user/user.schema.js'
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
    let user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
    user || next(new AppError('User Not found',404))
    !user || res.json({message:"Success ..", user})
})



const signup =catchError( async(req,res)=>{
    let user =new User(req.body)
    await user.save()
    user[0].password = undefined
    res.status(201).json({message:"User Created .." , user})
})



const signin =catchError( async(req,res,next)=>{
    let user =await User.findOne({email : req.body.email})
    if(!user) return next(new AppError('Email or Password incorrect ..',404))

    let match = bcrypt.compareSync(req.body.password , user.password )
    if(!match) return next(new AppError('Email or Password incorrect ..',404))

jwt.sign({userId:user._id , name:user.name, role:user.role }, '3mkDarsh' , (err,token)=>{
    res.status(200).json({message:"Login Successfully  ..", token}  )
})})
    

const changeUserPassword =catchError( async(req,res,next)=>{
    let user =await User.findOne({email : req.body.email})
    if(!user) return next(new AppError('Email or Password incorrect ..',404))
    let match = bcrypt.compareSync(req.body.oldPassword , user.password )
    if(!match) return next(new AppError('Email or Password incorrect ..',404))

    await User.findOneAndUpdate({email : req.body.email},{password: req.body.newPassword , passwordChangedAt:Date.now()})
    jwt.sign({userId:user._id , name:user.name, role:user.role }, '3mkDarsh' , (err,token)=>{
            res.status(200).json({message:"Login Successfully  ..", token, user}  )
        })
    })






export {
    signup,
    signin,
    changeUserPassword,
    getallUsers,
    getUser,
    updateUser
}