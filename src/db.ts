import mongoose from 'mongoose';
import {model,Schema} from "mongoose";


mongoose.connect("mongodb+srv://yashsingh151105_db_user:VkkpBxxBHOsimwGh@cluster0.cjvwdm8.mongodb.net/secondbrain")

const UserSchema = new Schema({
    username :{type: String,unique:true},
    password:{type: String}
})


export const UserModel =  model("User",UserSchema);


const ContentSchema = new Schema({
    title :String,
    link:String,
    tags:[{type:mongoose.Types.ObjectId,ref:"Tag"}],
    type: String,
    userId:{type:mongoose.Types.ObjectId,ref: "User",required:true}
})

export const ContentModel = model("Content",ContentSchema);


const LinkSchema = new Schema({

    hash:String,
    userId:{type:mongoose.Types.ObjectId,ref:"User",required:true,unique:true},

})

export const LinkModel = model("Link",LinkSchema);