
import mongoose, { Schema, model } from 'mongoose'


const schema = new Schema ({
sign_Url:String,
text:String
},{
    timestamps:true,
    versionKey:false
})

schema.post('init',function(doc){
    if(doc.sign_Url) doc.sign_Url = process.env.BASE_URL+"sign/" + doc.sign_Url
})

export const Sign = model('Sign',schema)

