import jwt from 'jsonwebtoken'
import { catchError } from "../../middlewares/catchError.js"
import { AppError } from "../../utils/appError.js"
import { ApiFeatures } from "../../utils/apiFeature.js"
import { Dectionary } from '../../../DB/models/dectionary.schema.js'


const addDectionary = catchError( async(req,res,next)=>{
    let dectionary =await Dectionary.insertMany(req.body)
    res.json({message:"Created .. ", dectionary})
})


const getAllDectionaries = catchError( async(req,res,next)=>{
    let {token} =req.headers
    jwt.verify(token,'3mkDarsh',async (err,decoded)=>{
        if(err) return next(new AppError('Invalid Token ..',401))
            let apiFeatures =new ApiFeatures(Dectionary.find(),req.query).pagination()
            let dectionaries =await apiFeatures.mongooseQuery
            res.json({message:"all dectionaries : .. ",page:apiFeatures.pageNumber,dectionaries})
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