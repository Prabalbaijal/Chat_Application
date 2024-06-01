import {Chat} from '../data_models/Chat.js'
import {Message} from '../data_models/message.js'
import { getReceiverSocketId, io } from '../socket/socket.js'

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
        await Promise.all([conversation.save(),newMsg.save()])

        const receiverSocketId=getReceiverSocketId(receiverId)
        if(receiverSocketId){
            io.to(receiverSocketId).emit("newMsg",newMsg)
        }

        return res.status(201).json({
            newMsg
        })

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
        return res.status(200).json(conversation?.message)
    }catch(error){
        console.log(error)
    }
}