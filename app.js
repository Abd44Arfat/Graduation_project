import express from 'express'
import cors from 'cors'
import { dbConnection } from './DB/db.connection.js'
import dectionaryRouter from './src/modules/dectionary/dectionary.router.js'
import resultRouter from './src/modules/result/result.router.js'
import userRouter from './src/modules/user/user.router.js'
const app = express()
const port =process.env.PORT ||  3000
app.use(express.json())
app.use(cors())
app.use('/dectionary',dectionaryRouter)
app.use('/result',resultRouter)
app.use('/auth',userRouter)









app.listen(port ,()=>{
    console.log("Server is running ...");
    
})