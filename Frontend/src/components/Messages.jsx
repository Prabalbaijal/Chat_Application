import React from 'react'
import Message from './Message'
import useGetMessages from '../hooks/UseGetMessages'
import { useSelector } from 'react-redux'

function Messages() {
  useGetMessages()
  const {messages}=useSelector(store=>store.message)
  if(!messages) return
  return (
    <div className='flex-1 px-4 overflow-auto felx-col'>
      {
        messages?.map((message)=>{
          return(
            <Message key={message._id} message={message}/>
          )
        })
      }
      
    </div>
  )
}

export default Messages
