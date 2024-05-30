import React from 'react'
import { BsSendFill } from "react-icons/bs"

function SendInput() {
  return (
    <form action='' className='relative'>
        <div className='absolute flex w-full p-0'>
            <input type="text" placeholder='Send a message...' 
            className='block w-full p-3 bg-white border-2 border-black border-solid rounded-lg text-md'/>
            <button className='relative inset-y-0 flex items-center end-11'><BsSendFill size="20px"/></button>
        </div>
        </form> 
  )
}

export default SendInput
