import  mongoose,{Schema , model} from 'mongoose'


const schema = new Schema ({
name:String
},{
    timestamps:{updatedAt:false},
    versionKey:false
})

export const Categories = model('Categories',schema)

