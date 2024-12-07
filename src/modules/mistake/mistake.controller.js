import { catchError } from "../../middlewares/catchError.js";
import { Mistake } from '../../../DB/models/mistakes.scema.js'


const AddMistake =catchError(async(req,res,next)=>{
let mistake = await Mistake.insertMany(req.body)
res.status(200).json({message:"Created .. ", mistake})
})


const getAllMistake =catchError(async(req,res,next)=>{
    let mistake = await Mistake.find()
    res.status(200).json({message:"all .. ", mistake})
    })


    const deleteMistake =catchError(async(req,res,next)=>{
        let mistake = await Mistake.findByIdAndDelete(req.params.id)
        res.status(200).json({message:"all .. ", mistake})
        })


export {
    AddMistake, deleteMistake, getAllMistake
};

