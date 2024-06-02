import React, { useEffect } from 'react'
import SendInput from './SendInput'
import Messages from './Messages'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedUser } from '../redux/userslice'

function Msgcontainer() {
    const {selectedUser,onlineUsers}=useSelector(store=>store.user)
    const dispatch=useDispatch()
    
    useEffect(()=>{
        return ()=>dispatch(setSelectedUser(null))
    },[])
    
    const isOnline=onlineUsers?.includes(selectedUser?._id)
    return (
        <>
        {
            selectedUser!==null ?(
                <div className='gap-2 flex flex-col min-[100px]:w-[300px] md:w-[700px] sm:w-[800px] sm:h-[480px] min-[100px]:h-[380px]'>
            <div className='flex flex-wrap items-center gap-2 p-3 text-white bg-[#646EE4] rounded-lg'>
            <div className={`avatar ${isOnline?'online':''}`}>
                    <div className='w-10 rounded-full'>
                        <img alt="userprofile" src={selectedUser?.profilepic} />
                    </div>
                </div>
                <div className='flex flex-col '>
                    <div className='flex justify-center flex-1 gap-2'>
                        <p>{selectedUser?.name}</p>
                    </div>
                </div>
            </div>
            <div className='h-[1px] py-0 my-0 divider bg-slate-500'></div>
            <Messages/>
            <SendInput/>
        </div>
            ):(
                <div className='flex items-center text-[#646EE4] font-bold text-3xl'>Please select any user to start the chat.</div>
            )
        }
        </>
        
    )
}

export default Msgcontainer
