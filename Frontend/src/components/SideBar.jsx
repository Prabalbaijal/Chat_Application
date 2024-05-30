import React from 'react'
import { FaSearch } from "react-icons/fa"
import OtherUsers from './OtherUsers'
import axios from 'axios'
import toast from 'react-hot-toast'
import {useNavigate,Link} from 'react-router-dom'

function SideBar() {
  const navigate=useNavigate()
  const logoutFunction=async ()=>{
    try{
      const res=await axios.get('http://localhost:7000/api/v1/user/logout')
      navigate("/login")
      toast.success(res.data.message)
    }catch(error){
      console.log(error)
    }
  }
  return (
    <div className='text-black flex flex-col p-5 border-slate-500 border-r min-[100px]:p-0 md:w-[360px] sm:w-[170px] min-[100px]:w-[150px] gap-3'>
      <form action='' className='flex items-center sm:w-[250px] md:w-[250px]'>
        <input type='text' className='bg-white border-black rounded-r-none md:w-[400px] sm:w-[120px] min-[100px]:w-[110px] rounded-l-2xl input input-bordered mb-0' placeholder='Search...'/>
        <button type='submit' className='bg-[#646EE4] min-[100px]:w-[10px] border-none rounded-none sm:w-[40px] md:w-[45px] btn'>
        <FaSearch size='40px'/>
        </button>
      </form>
      {/* <div className='px-3 divider'></div> */}
      <OtherUsers/>
      <div className='mt-2'>
      <button 
      onClick={logoutFunction}
      className="h-4 text-white btn btn-primary">Logout</button>
      </div>
    </div>
  )
}

export default SideBar
