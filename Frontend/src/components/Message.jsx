import React, { useEffect,useRef } from 'react'
import { useSelector } from 'react-redux'

function Message({message}) {
    const scroll=useRef()
    const {authUser,selectedUser}=useSelector(store=>store.user)
    console.log(authUser)
    console.log(message)
    console.log(selectedUser)
    useEffect(()=>{
        scroll.current?.scrollIntoView({behavior:"smooth"})
    },[message])
    return(
            <div ref={scroll} className={`chat ${message?.senderId === authUser?._id ? 'chat-end' : 'chat-start'}`}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS chat bubble component" src={message?.senderId === authUser?._id ? authUser?.profilepic  : selectedUser?.profilepic } />
                    </div>
                </div>
                <div className={`chat-bubble ${message?.senderId !== authUser?._id ? 'bg-gray-200 text-black' : ''} `}>{message?.message}</div>
                <div className="opacity-50 chat-footer">
                </div>
            </div>
    )
}

export default Message
