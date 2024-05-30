import React from 'react'
import OtherUser from './OtherUser'
import useOtherUsers from '../hooks/UseOtherUsers'
import {useSelector} from 'react-redux'

function OtherUsers() {
    useOtherUsers()
    const {otherUsers}=useSelector(store=>store.user)
    if(!otherUsers) return

    return (
        <div className='overflow-auto mt-0 sm:w-[160px] md:w-[260px] flex-1'>
            {
                otherUsers?.map((user)=>{
                    return (
                        <OtherUser key={user._id} user={user}/>
                    )
                })
            }
            
        </div>
    )
}

export default OtherUsers
