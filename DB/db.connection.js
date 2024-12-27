import mongoose from 'mongoose'

export const dbConnection =mongoose.connect('mongodb+srv://abdelrahman:06925270@cluster0.6line1m.mongodb.net/').then(()=>{
    console.log("Database Connected Successfully ..");
}).catch(()=>{
    console.log("Error in Connection DB ..");
    
})

//! mongodb+srv://abdelrahman:06925270@cluster0.6line1m.mongodb.net/
// mongodb://127.0.0.1:27017/gproject
