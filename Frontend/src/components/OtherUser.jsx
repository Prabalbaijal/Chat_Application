import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedUser } from '../redux/userslice'

function OtherUser({ user }) {
  const dispatch=useDispatch()
  const {selectedUser}=useSelector(store=>store.user)
  const {onlineUsers}=useSelector(store=>store.user)
  const isOnline =onlineUsers?.includes(user?._id)

  const selectedUserFunction=(user)=>{
    console.log(user)
    dispatch(setSelectedUser(user))
  }
  return (
    <div>
      <div onClick={()=>selectedUserFunction(user)} className={`${selectedUser?._id===user?._id ? 'bg-[#646EE4] text-white':''} flex items-center gap-2 p-2 rounded-lg hover:bg-[#646EE4]`}>
                <div className={`avatar ${isOnline ? 'online' : '' }`}>
                    <div className='w-10 rounded-full'>
                        <img alt="userprofile" src={user?.profilepic} />
                    </div>
                </div>
                <div className='flex flex-col '>
                    <div className='flex justify-center flex-1 gap-2'>
                        <p>{user?.name}</p>
                    </div>
                </div>
            </div>
            <div className='h-[1px] py-0 my-0 divider bg-slate-500'></div>
    </div>
  )
}

export default OtherUser
