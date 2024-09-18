import express from 'express'
import { dbConnection } from './DB/db.connection.js'
import dectionaryRouter from './src/modules/dectionary/dectionary.router.js'
import resultRouter from './src/modules/result/result.router.js'
const app = express()
const port = 5000

app.use(express.json())
app.use('/dectionary',dectionaryRouter)
app.use('/result',resultRouter)










app.listen(port ,()=>{
    console.log("Server is running ...");
    
})