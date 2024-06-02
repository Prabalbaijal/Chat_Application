import React, { useEffect,useRef } from 'react'
import { useSelector } from 'react-redux'

function Message({message}) {
    const scroll=useRef()
    useEffect(()=>{
        scroll.current?.scrollIntoView({behavior:"smooth"})
    },[message])
    const {authUser}=useSelector(store=>store.user)
    const {selectedUser}=useSelector(store=>store.user)
    return (
        <div>
            <div ref={scroll} className={`chat ${message?.senderId === authUser?._id ? 'chat-end' : 'chat-start'}`}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS chat bubble component" src={message?.senderId === authUser?._id ? authUser?.profilepic  : selectedUser?.profilepic } />
                    </div>
                </div>
                <div className="bg-[#1ABCFD] chat-bubble text-white">{message?.message}</div>
                <div className="opacity-50 chat-footer">
                </div>
            </div>
        </div>
    )
}

export default Message
