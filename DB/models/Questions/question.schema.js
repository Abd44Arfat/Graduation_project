import  mongoose,{Schema , model} from 'mongoose'


const schema = new Schema ({
name:String,
category:mongoose.Types.ObjectId
},{
    timestamps:{updatedAt:false},
    versionKey:false
})

export const Questions = model('Questions',schema)

