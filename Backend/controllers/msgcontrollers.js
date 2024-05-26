import {Chat} from '../data_models/Chat.js'
import {Message} from '../data_models/message.js'
export const sendMsg=async(req,res)=>{
    try{
        const senderId=req.id
        const receiverId=req.params.id
        const {message}=req.body

        let conversation=await Chat.findOne({
            members:{$all: [senderId,receiverId]}
        })
        if(!conversation){
            conversation=await Chat.create({
                members:[senderId,receiverId]
            })
        }

        const newMsg=await Message.create({
            senderId,   
            receiverId,
            message
        })
        if(newMsg){
            conversation.message.push(newMsg._id)
        }
        await conversation.save()

        return res.status(201).json({
            message:"Message sent",
        })
        //Socket Io 
    }catch(error){
        console.log(error)
    }
}

export const getMsg=async(req,res)=>{
    try{
        const receiverId=req.params.id
        const senderId=req.id

        const conversation=await Chat.findOne({
            members:{$all: [senderId,receiverId]}
        }).populate("message")
        console.log(conversation?.message)
        return res.status(200).json(conversation?.message)
    }catch(error){
        console.log(error)
    }
}