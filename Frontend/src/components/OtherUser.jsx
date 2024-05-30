import React from 'react'

function OtherUser(props) {
  const user=props.user
  return (
    <div>
      <div className='flex items-center gap-2 p-2 rounded-lg hover:bg-[#646EE4]'>
                <div className='avatar online'>
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
