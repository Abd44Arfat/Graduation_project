import {Schema,model}from 'mongoose'

const schema= new Schema({
name:String,
email:String,
password:String,
confirmEmail:{
    type:Boolean,
    default:false
}
},{
    timestamps:false,
    versionKey:false,
})

export const User =model('User',schema)