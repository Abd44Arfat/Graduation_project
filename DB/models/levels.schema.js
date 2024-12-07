import mongoose , {Schema,model} from "mongoose";


const schema =new Schema({
name:{type:String , required:true},
category:{type:mongoose.Types.ObjectId,
    ref:"Category"
}
},{
    timestamps:false,
    versionKey:false,
    toJSON:{virtuals:true}
})


schema.virtual('Questions', {
    ref:"Question",
    localField:"_id",
    foreignField:"level"
})

schema.pre(/^findOne/,function (){
    this.populate('Questions')
    })

export const Level =model('Level',schema)