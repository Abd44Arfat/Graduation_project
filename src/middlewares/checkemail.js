import bcrypt from "bcrypt"
import { User } from "../../DB/models/user.schema.js"

export const checkEmail=async(req,res,next)=>{
    let isFound =await User.findOne({email:req.body.email})
    if (isFound) return res.json({message:"Email is Already Exist ..."})
        req.body.password=bcrypt.hashSync(req.body.password,8)
        next()
} 