import mongoose from 'mongoose'

export const dbConnection =mongoose.connect('mongodb+srv://abdo:06925270@cluster0.6line1m.mongodb.net/').then(()=>{
    console.log("Database Connected Successfully ..");
}).catch((e)=>{
    console.log(`Error in Connection DB ..${e}`);
    
})