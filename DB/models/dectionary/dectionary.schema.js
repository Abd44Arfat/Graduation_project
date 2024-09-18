import mongoose ,{Schema,model} from 'mongoose'

const schema = new Schema ({
    videoUrl:String,
    title:String
},{
    timestamps:false,
    versionKey:false
})


export const Dectionary=model('Dectionary',schema)