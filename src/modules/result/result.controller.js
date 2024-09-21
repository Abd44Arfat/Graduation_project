import { Result } from "../../../DB/models/result/result.schema.js"
import jwt from 'jsonwebtoken'
import { catchError } from "../../middlewares/catchError.js"
import { AppError } from "../../utils/appError.js"




const addResult =catchError(  async(req,res)=>{
    let result =await Result.insertMany(req.body)
    res.status(200).json({message:"Created..", result })
    
    })
    
    
    const getAllResults =catchError( async (req,res,next)=>{
        let {token}= req.headers
        jwt.verify(token,'3mkDarsh',async (err,decoded)=>{
            // if(err) return res.status(401).json({message:"Invalid Token.. "})
            if(err) return next(new AppError('Invalid Token.. ',401))

                let results =await Result.find()
                res.status(200).json({message:"All results : ", results })
        })
        
        })
    

        const deleteResult =catchError(  async (req,res)=>{
            let result =await Result.findByIdAndDelete(req.params.id)
            res.status(200).json({message:"Deleted : ", result })
            
            })






    
        export {
    addResult,
    getAllResults,
    deleteResult
        }