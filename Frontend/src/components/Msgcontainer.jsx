import React from 'react'
import SendInput from './SendInput'
import Messages from './Messages'

function Msgcontainer() {
    return (
        <div className='gap-2 flex flex-col min-[100px]:w-[300px] md:w-[700px] sm:w-[800px] sm:h-[480px] min-[100px]:h-[380px]'>
            <div className='flex flex-wrap items-center gap-2 p-3 text-white bg-[#646EE4] rounded-lg'>
                <div className='avatar online'>
                    <div className='w-10 rounded-full'>
                        <img alt="userprofile" src="https://wallpapers.com/images/hd/cool-profile-picture-minion-13pu7815v42uvrsg.jpg" />
                    </div>
                </div>
                <div className='flex flex-col '>
                    <div className='flex justify-center flex-1 gap-2'>
                        <p>Prabal</p>
                    </div>
                </div>
            </div>
            <div className='h-[1px] py-0 my-0 divider bg-slate-500'></div>
            <Messages/>
            <SendInput/>
        </div>
    )
}

export default Msgcontainer
