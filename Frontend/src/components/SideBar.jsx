import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa"
import OtherUsers from './OtherUsers'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setAuthUser, setOtherUsers } from '../redux/userslice'

function SideBar() {
  const navigate = useNavigate()
  const [search,setSearch]=useState("")
  const dispatch=useDispatch()

  const logoutFunction = async () => {
    try {
      const res = await axios.get('http://localhost:7000/api/v1/user/logout')
      navigate("/login")
      toast.success(res.data.message)
      dispatch(setAuthUser(null))
    } catch (error){
      console.log(error)
    }
  }
  const { authUser } = useSelector(store => store.user)
  const {otherUsers }=useSelector(store=>store.user)
  const searchHandler=(e)=>{
    e.preventDefault()
    const user1=otherUsers?.find((user)=>user.name.toLowerCase().includes(search.toLowerCase()))
    if(user1){
      dispatch(setOtherUsers([user1]))
    }else{
      toast.error("User not found!!")
    }
  }
  return (
    <div className='text-black flex flex-col p-5 border-slate-500 border-r min-[100px]:p-0 md:w-[360px] sm:w-[170px] min-[100px]:w-[150px] gap-3'>
      <div className='flex gap-2 font-bold sm:text-sm md:text-lg text-[#646EE4] items-center'>
        <div>
          <img src={`${authUser?.profilepic}`} className='w-10 avatar' />{authUser?.name} (You)
        </div>
      </div>
      <form action='' onSubmit={searchHandler} className='flex items-center sm:w-[250px] md:w-[250px]'>
        <input 
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        className='bg-white border-black rounded-r-none md:w-[400px] sm:w-[120px] min-[100px]:w-[110px] rounded-l-2xl input input-bordered mb-0' 
        placeholder='Search...' />
        <button type='submit' className='bg-[#646EE4] min-[100px]:w-[10px] border-none rounded-none sm:w-[40px] md:w-[45px] btn'>
          <FaSearch size="40px" />
        </button>
      </form>
      {/* <div className='px-3 divider'></div> */}
      <OtherUsers />
      <div className='mt-2'>
        <button
          onClick={logoutFunction}
          className="h-4 text-white btn btn-primary">Logout</button>
      </div>
    </div>
  )
}

export default SideBar
