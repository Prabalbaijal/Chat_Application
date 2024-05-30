import React from 'react'
import { FaSearch } from "react-icons/fa"
import OtherUsers from './OtherUsers'

function SideBar() {
  return (
    <div className='flex flex-col p-5 border-slate-500 border-r min-[100px]:p-0 md:w-[360px] sm:w-[170px] min-[100px]:w-[150px]'>
      <form action='' className='flex items-center sm:w-[250px] md:w-[250px]'>
        <input type='text' className='bg-white border-none rounded-r-none md:w-[400px] sm:w-[120px] min-[100px]:w-[110px] rounded-l-2xl input input-bordered' placeholder='Search...'/>
        <button type='submit' className='bg-black min-[100px]:w-[10px] border-none rounded-none sm:w-[40px] md:w-[50px] btn'>
        <FaSearch size='40px'/>
        </button>
      </form>
      <div className='px-3 divider'></div>
      <OtherUsers/>
      <div className='mt-2'>
      <button className="btn btn-primary">Logout</button>
      </div>
    </div>
  )
}

export default SideBar
