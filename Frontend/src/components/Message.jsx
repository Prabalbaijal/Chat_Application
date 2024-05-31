import React, { useEffect,useRef } from 'react'
import { useSelector } from 'react-redux'

function Message({message}) {
    const scroll=useRef()
    useEffect(()=>{
        scroll.current?.scrollIntoView({behavior:"smooth"})
    },[message])
    const {loggedUser}=useSelector(store=>store.user)
    console.log(loggedUser)
    return (
        <div>
            <div ref={scroll} className={`chat ${message?.senderId === loggedUser?._id ? 'chat-end' : 'chat-start'}`}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS chat bubble component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div className="chat-header">
                    <time className="text-xs opacity-50">12:45</time>
                </div>
                <div className="bg-[#1ABCFD] chat-bubble text-white">{message?.message}</div>
                <div className="opacity-50 chat-footer">
                </div>
            </div>
        </div>
    )
}

export default Message
