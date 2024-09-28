import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { User } from '../../../DB/models/user/user.schema.js'
import { catchError } from '../../middlewares/catchError.js'
import { AppError } from '../../utils/appError.js'



const signup =catchError( async(req,res)=>{
    let user =await User.insertMany(req.body)
    user[0].password = undefined1
    res.status(201).json({message:"User Created ..",user})
})


const signin =catchError( async(req,res,next)=>{
    let user =await User.findOne({email : req.body.email})
    // if(!user) return res.json({message:"Email or Password incorrect .."})
    if(!user) return next(new AppError('Email or Password incorrect ..',404))

    let match = bcrypt.compareSync(req.body.password , user.password )
    // if(!match) return res.json({message:"Email or Password incorrect .."})
    if(!match) return next(new AppError('Email or Password incorrect ..',404))


jwt.sign({userId:user._id , name:user.name }, '3mkDarsh' , (err,token)=>{

    res.status(200).json({message:"Login Successfully  ..", token}  )
})

})







export {
    signup,
    signin
}