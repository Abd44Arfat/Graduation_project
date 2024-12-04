import mongoose, { Schema, model } from 'mongoose'


const schema = new Schema ({
    signs:{
        gifUrl:String,
        title:String
    },
question:{type:String, required:true},
Answers:[
    {
        text:{type:String, required:true},
        Score:{type:Number,
            min:0, max:10 ,
            default:0
        },
    }
]
},{
    timestamps:false,
    versionKey:false
})

// schema.virtual('Signs', {
//     ref:"Sign",
//     localField:"_id",
//     foreignField:"level"
// })

// schema.pre(/^findOne/,function (){
//     this.populate('Questions')
//     })


export const Learn = model('Learn',schema)

