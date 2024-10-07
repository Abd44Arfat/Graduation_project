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

const updateUser =catchError( async(req,res)=>{
    let newUser = await User.findByIdAndUpdate(req.params.id , req.body , {new:true})
        res.status(200).json({message:"User Updated ---->", newUser})
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




    const protectRouters=catchError(async(req,res,next)=>{
let {token} =req.headers
let userPyload =null 
if(!token) return next(new AppError('Token not provided',401))
    jwt.verify(token,'3mkDarsh',(err,pyload)=>{
if(err) return next(new AppError(err,401))
    console.log(pyload);
    
userPyload=pyload
    })
let user =await User.findById(userPyload.userId)
if(!user) return next(new AppError('user not found',401))
let time = parseInt(user?.passwordChangedAt.getTime()/1000)
if(time < userPyload.iat) return next(new AppError('invalid token .. login again',401))
req.user=user
next()
    })



export {
    signup,
    signin,
    changeUserPassword,
    getallUsers,
    protectRouters,
    getUser,
    updateUser
}