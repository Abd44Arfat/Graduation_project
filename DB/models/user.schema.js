import {Schema,model}from 'mongoose'
import bcrypt from'bcrypt'
const schema= new Schema({
name:String,
email:String,
password:String,
confirmEmail:{
    type:Boolean,   
    default:false
  //const randomNumber = Math.floor(Math.random() * 10000);
// console.log(randomNumber);
}, 
passwordChangedAt: Date ,
role:{
    type:String,
    enum:['admin','user'],
    default:'user'
},
profile_Picture:String ,
user_points:{
    type:Number,
    default:0
},
isActive:{
    type:Boolean,
},
level_id:{
    type:Schema.Types.ObjectId,
    ref:'Level'
}


},{
    timestamps:true,
    versionKey:false,
})  

// schema.pre('insertMany',function(){
//     this.password=bcrypt.hashSync(this.password,8)
// })

schema.pre('findOneAndUpdate',function(){
    if(this._update.password)  this._update.password =bcrypt.hashSync(this._update.password , 8)
    })

export const User =model('User',schema)