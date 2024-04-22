import mongoose from "mongoose";

const ChatModel=new mongoose.Schema({
    members:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    message:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Message"
    }]
},{timestamps:true})

export const Chat=mongoose.model("Chat",ChatModel)