import React, { useRef, useState } from 'react'
import { BsSendFill } from "react-icons/bs"
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import { setMessages } from '../redux/messageslice'

function SendInput() {

  const [message,setMessage]=useState("")
  const dispatch=useDispatch()
  const {selectedUser} =useSelector(store=>store.user)
  const {messages}=useSelector(store=>store.message)
  const onSubmitHandler=async (e)=>{
    e.preventDefault()
    try {
        const res=await axios.post(`http://localhost:7000/api/v1/message/send/${selectedUser?._id}`,{message},{
          headers:{
            'Content-Type':'application/json'
          },
          withCredentials:true
        }
        )
        console.log(res)
        dispatch(setMessages([...messages,res?.data?.newMsg]))
    } catch (error) {
      console.log(error)
    }
    setMessage("")
  }
  return (
    <form onSubmit={onSubmitHandler} action='' className='relative'>
        <div className='absolute flex w-full p-0'>
            <input
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            type="text"
            placeholder='Send a message...' 
            className='block w-full p-3 bg-white border-2 border-black border-solid rounded-lg text-md'/>
            <button type='submit' className='relative inset-y-0 flex items-center end-11'><BsSendFill size="20px"/></button>
        </div>
        </form> 
  )
}

export default SendInput
