import mongoose from "mongoose";

const user=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum:["male","female"],
        required:true
    },
    profilepic:{
        type:String,
        default:""
    }
},{timestamps:true})

export const User=mongoose.model("User",user)