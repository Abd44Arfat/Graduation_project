import mongoose, { Schema, Types, model } from 'mongoose'


const schema = new Schema ({
    level:{type:Types.ObjectId, ref:"Level"},
    sign_Url:String,
    sign_Text:String, 
    type: { // Question types
        type: String,
        required: true,
        enum: ['MCQ', 'True or False']},
question:{type:String, required:true},
options:[
    {
        text:String,
        score:{type:Number, min:0, max:10, default:0}
    }
],
correctOption:{ type: mongoose.Schema.Types.Mixed}
},{
    timestamps:true,
    versionKey:false
})

schema.post('init',function(doc){
    if(doc.sign_Url) doc.sign_Url = process.env.BASE_URL+"questions/" + doc.sign_Url
})


export const Question = model('Question',schema)

