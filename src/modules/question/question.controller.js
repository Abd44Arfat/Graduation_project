import { Question } from "../../../DB/models/question.schema.js";
import { catchError } from "../../middlewares/catchError.js";



const AddQuestions =catchError(async(req,res,next)=>{
let question = await Question.insertMany(req.body)
res.status(200).json({message:"Created .. ", question})
})


const getAllQuestions =catchError(async(req,res,next)=>{
    let questions = await Question.find()
    res.status(200).json({message:"all .. ", questions})
    })


    const deleteQuestions =catchError(async(req,res,next)=>{
        let questions = await Question.findByIdAndDelete(req.params.id)
        res.status(200).json({message:"all .. ", questions})
        })
    

export {
    AddQuestions,
    getAllQuestions,
    deleteQuestions
}