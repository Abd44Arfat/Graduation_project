import { Dectionary } from "../../../DB/models/dectionary/dectionary.schema.js"
import jwt from 'jsonwebtoken'
import { catchError } from "../../middlewares/catchError.js"
import { AppError } from "../../utils/appError.js"


const addDectionary = catchError( async(req,res)=>{
    let dectionary =await Dectionary.insertMany(req.body)
    res.json({message:"Created .. ", dectionary})
})



const getAllDectionaries = catchError( async(req,res,next)=>{
    let {token} =req.headers
    jwt.verify(token,'3mkDarsh',async (err,decoded)=>{
        // if(err) return res.status(401).json({message:"Invalid Token .."})
        if(err) return next(new AppError('Invalid Token ..',401))

            let dectionaries =await Dectionary.find()
            res.json({message:"all dectionaries : .. ", dectionaries})
        })
}
)


const deleteDectionary = catchError(  async(req,res)=>{
    let dectionaries =await Dectionary.findOneAndDelete(req.params.id)
    res.json({message:"Deleted : .. ", dectionaries})
}
)

export{
    addDectionary,
    getAllDectionaries,
    deleteDectionary
}