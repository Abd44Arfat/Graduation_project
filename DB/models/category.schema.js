import {Schema , model} from 'mongoose'


const schema = new Schema ({
name:String
},{
    timestamps:false,
    versionKey:false,
})



export const Category = model('Category',schema)

