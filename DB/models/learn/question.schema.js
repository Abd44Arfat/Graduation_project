import mongoose, { Schema, model } from 'mongoose'


const schema = new Schema ({
category:{type:mongoose.Types.ObjectId , ref:"Category" },
question:{type:String, required:true},
correctAnswer:{type:String, required:true},
incorrectAnswer:[
    {type:String,
        required: true
    }
]

},{
    timestamps:false,
    versionKey:false
})

export const Learn = model('Learn',schema)

