import jwt from 'jsonwebtoken'
import { catchError } from "../../middlewares/catchError.js"
import { AppError } from "../../utils/appError.js"
import { Categories } from '../../../DB/models/Categories/categories.schema.js'




const addCategory =catchError(  async(req,res)=>{
    let Category =await Categories.insertMany(req.body)
    res.status(200).json({message:"Created..", Category })
    
    })
    
    
    const getAllCategorys =catchError( async (req,res,next)=>{
        let {token}= req.headers
        jwt.verify(token,'3mkDarsh',async (err,decoded)=>{
            if(err) return next(new AppError('Invalid Token.. ',401)) 
                let Categorys =await Categories.find()
                res.status(200).json({message:"All Categorys : ", Categorys })
        })
        
        })
    

        const deleteCategory =catchError(  async (req,res)=>{
            let Category =await Categories.findByIdAndDelete(req.params.id)
            res.status(200).json({message:"Deleted : ", Category })
            
            })






    
        export {
    addCategory,
    getAllCategorys,
    deleteCategory
        }