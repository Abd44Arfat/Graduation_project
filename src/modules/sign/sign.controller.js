import { catchError } from "../../middlewares/catchError.js";
import { Sign } from '../../../DB/models/sign.schema.js'


const AddSign =catchError(async(req,res,next)=>{
    req.body.sign_Url=req.file.filename
let sign = await Sign.insertMany(req.body)
res.status(200).json({message:"Created .. ", sign})
})


const getAllSign =catchError(async(req,res,next)=>{
    let sign = await Sign.find()
    res.status(200).json({message:"all .. ", sign})
    })


    const deleteSign =catchError(async(req,res,next)=>{
        let sign = await Sign.findByIdAndDelete(req.params.id)
        res.status(200).json({message:"all .. ", sign})
        })
    

export {
    AddSign, deleteSign, getAllSign
};
