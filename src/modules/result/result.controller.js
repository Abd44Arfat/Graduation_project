import { Result } from "../../../DB/models/result/result.schema.js"





const addResult =async(req,res)=>{
    let result =await Result.insertMany(req.body)
    res.status(200).json({message:"Created..", result })
    
    }
    
    
    const getAllResults =async (req,res)=>{
        let results =await Result.find()
        res.status(200).json({message:"All results : ", results })
        
        }
    

        const deleteResult =async (req,res)=>{
            let result =await Result.findByIdAndDelete(req.params.id)
            res.status(200).json({message:"Deleted : ", result })
            
            }






    
        export {
    addResult,
    getAllResults,
    deleteResult
        }