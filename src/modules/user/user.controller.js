import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { User } from '../../../DB/models/user/user.schema.js'

function catchError(fn){
return (req,res,next)=>{
fn(req,res,next).catch((err)=>{
    res.json(err)
})
}
}



const signup =catchError( async(req,res)=>{


    let user =await User.insertMany(req.body)
    user[0].password = undefined
    res.status(201).json({message:"User Created ..",user})
})


const signin =catchError( async(req,res)=>{
    let user =await User.findOne({email : req.body.email})
    if(!user) return res.json({message:"Email or Password incorrect .."})

    let match = bcrypt.compareSync(req.body.password , user.password )
    if(!match) return res.json({message:"Email or Password incorrect .."})


jwt.sign({userId:user._id , name:user.name }, '3mkDarsh' , (err,token)=>{

    res.status(200).json({message:"Login Successfully  ..", token}  )
})

})







export {
    signup,
    signin
}