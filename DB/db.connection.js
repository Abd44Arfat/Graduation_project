import mongoose from 'mongoose'

export const dbConnection =mongoose.connect('mongodb://localhost:27017/project1').then(()=>{
    console.log("Database Connected Successfully ..");
}).catch(()=>{
    console.log("Error in Connection DB ..");
    
})

// mongodb+srv://abdelrahman:06925270@cluster0.6line1m.mongodb.net/