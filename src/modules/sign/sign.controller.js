import { Sign } from "../../../DB/models/learn/sign.schema.js";
import { catchError } from "../../middlewares/catchError.js";



const AddSign =catchError(async(req,res,next)=>{
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
