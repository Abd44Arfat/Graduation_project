import { Level } from '../../../DB/models/Categories/levels.schema.js'
import { catchError } from "../../middlewares/catchError.js"


const addLevel =catchError(  async(req,res)=>{
    let level =await Level.insertMany(req.body)
    res.status(200).json({message:"Created..", level })
    
    })
    

    const getAllLevels =catchError( async (req,res,next)=>{
        let filterObj = {}  
        if(req.params.category) filterObj.category = req.params.category
        let levels =await Level.find(filterObj)
        res.status(200).json({message:"All Levels : ", levels })
        })



        const getOnelevel =catchError(  async (req,res,next)=>{
            let level = await Level.findById(req.params.id)
            level || next(new AppError('level Not Found' , 404))
            !level ||  res.status(200).json({message:"Success: ", level })
                })


        const deleteLevel =catchError(  async (req,res)=>{
            let level =await Level.findByIdAndDelete(req.params.id)
            res.status(200).json({message:"Deleted : ", level })
            
            })






    
export {
    addLevel,
    deleteLevel, 
    getAllLevels,
    getOnelevel
}
