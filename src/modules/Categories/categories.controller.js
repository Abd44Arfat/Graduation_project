import jwt from 'jsonwebtoken'
import { catchError } from "../../middlewares/catchError.js"
import { AppError } from "../../utils/appError.js"
import { Category } from '../../../DB/models/category.schema.js'

const addCategory =catchError(  async(req,res)=>{
    let category =await Category.insertMany(req.body)
    res.status(200).json({message:"Created..", category })
    
    })
    
    
    const getAllCategorys =catchError( async (req,res,next)=>{
        let {token}= req.headers
        jwt.verify(token,'3mkDarsh',async (err,decoded)=>{
            if(err) return next(new AppError('Invalid Token.. ',401)) 
                let Categorys =await Category.find()
                res.status(200).json({message:"All Categorys : ", Categorys })
        })
        
        })

        const getOneCategory =catchError(  async (req,res,next)=>{
        let category = await Category.findById(req.params.id)
        category || next(new AppError('Category Not Found' , 404))
        !category ||  res.status(200).json({message:"Success: ", category })
            })
    

        const deleteCategory =catchError(  async (req,res)=>{
            let Category =await Category.findByIdAndDelete(req.params.id)
            res.status(200).json({message:"Deleted : ", Category })
            
            })






    
        export {
    addCategory,
    getAllCategorys,
    getOneCategory,
    deleteCategory
        }