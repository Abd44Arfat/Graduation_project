
import mongoose, { Schema, model } from 'mongoose'


const schema = new Schema ({
user:{
    type:Schema.Types.ObjectId,
    ref:'User'
},
question:{
    type:Schema.Types.ObjectId,
    ref:'Question'
}

},{
    timestamps:true,
    versionKey:false
})

export const Mistake = model('Mistake',schema)

