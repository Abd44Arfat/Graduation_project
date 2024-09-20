import { Dectionary } from "../../../DB/models/dectionary/dectionary.schema.js"
import jwt from 'jsonwebtoken'


const addDectionary =async(req,res)=>{
    let dectionary =await Dectionary.insertMany(req.body)
    res.json({message:"Created .. ", dectionary})
}



const getAllDectionaries =async(req,res)=>{
    let {token} =req.headers
    jwt.verify(token,'3mkDarsh',async (err,decoded)=>{
        if(err) return res.status(401).json({message:"Invalid Token .."})

            let dectionaries =await Dectionary.find()
            res.json({message:"all dectionaries : .. ", dectionaries})
        })
}



const deleteDectionary =async(req,res)=>{
    let dectionaries =await Dectionary.findOneAndDelete(req.params.id)
    res.json({message:"Deleted : .. ", dectionaries})
}


export{
    addDectionary,
    getAllDectionaries,
    deleteDectionary
}