import  mongoose,{Schema , model} from 'mongoose'


const schema = new Schema ({
type:{ type:String || Boolean
},
category:String,
videoUrl:String,
correct_answer:String,
incorrect_answer:{
    type:[String]
},
},{
    timestamps:{updatedAt:false},
    versionKey:false
})

export const Result = model('Result',schema)

