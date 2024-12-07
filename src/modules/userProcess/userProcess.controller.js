import { Process } from "../../../DB/models/userProcess.schema.js";
import { catchError } from "../../middlewares/catchError.js";



const AddProcess =catchError(async(req,res,next)=>{
let process = await Process.insertMany(req.body)
res.status(200).json({message:"Created .. ", process})
})


const getAllProcess =catchError(async(req,res,next)=>{
    let Process = await Process.find()
    res.status(200).json({message:"all .. ", Process})
    })


    const deleteProcess =catchError(async(req,res,next)=>{
        let Process = await Process.findByIdAndDelete(req.params.id)
        res.status(200).json({message:"all .. ", Process})
        })


export {
    AddProcess, deleteProcess, getAllProcess
};
