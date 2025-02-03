process.on('uncaughtException',(err)=>{  //!for errors in code
    console.log("Error",err);
})
import express from 'express'
import cors from 'cors'
import { dbConnection } from './DB/db.connection.js'
import { AppError } from './src/utils/appError.js'
import { globalError } from './src/middlewares/globalError.js'
import { bootstrap } from './src/modules/bootstrap.js';
import dotenv from 'dotenv'
dotenv.config()
const app = express()
const port =process.env.PORT ||  3000
app.use(express.json())
app.use('/uploads', express.static('uploads'));
app.use(cors())
bootstrap(app)


//! for unfound Routes 
app.use('*',(req,res,next)=>{
    next(new AppError (`route not found ${req.originalUrl}`, 404))
})

app.use(globalError)

    
process.on('unhandledRejection',(err)=>{   //! for errors outside express 
    console.log("Error",err);
    
})


app.listen(port ,()=>{
    console.log(`Server is running on port ${port} ...`);
    
})