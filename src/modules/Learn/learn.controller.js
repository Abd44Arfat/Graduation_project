import { Learn } from "../../../DB/models/learn/question.schema.js";
import { catchError } from "../../middlewares/catchError.js";



const AddQuestions =catchError(async(req,res,next)=>{
let question = await Learn.insertMany(req.body)
res.status(200).json({message:"Created .. ", question})
})


const getAllQuestions =catchError(async(req,res,next)=>{
    let questions = await Learn.find()
    res.status(200).json({message:"all .. ", questions})
    })


    const deleteQuestions =catchError(async(req,res,next)=>{
        let questions = await Learn.findByIdAndDelete(req.params.id)
        res.status(200).json({message:"all .. ", questions})
        })
    

export {
    AddQuestions,
    getAllQuestions,
    deleteQuestions
}