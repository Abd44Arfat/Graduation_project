import mongoose, { Schema, Types, model } from 'mongoose'


const schema = new Schema ({
    signs:{
    gifUrl:String,
    text:String
    },
question:{type:String, required:true},
options:[
    {
        text:{type:String, required:true}
    }
],
correctOption:{type:String},
points:{type:Number, min:0, max:10, default:0}
},{
    timestamps:true,
    versionKey:false
})

// schema.virtual('Signs', {
//     ref:"Sign",
//     localField:"_id",
//     foreignField:"level"
// })

// schema.pre(/^findOne/,function (){
//     this.populate('Questions')
//     })


export const Question = model('Question',schema)

