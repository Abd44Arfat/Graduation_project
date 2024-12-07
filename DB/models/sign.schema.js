
import mongoose, { Schema, model } from 'mongoose'


const schema = new Schema ({
sign_Url:String,
text:String
},{
    timestamps:true,
    versionKey:false
})

export const Sign = model('Sign',schema)

