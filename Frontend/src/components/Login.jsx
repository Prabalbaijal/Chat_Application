import React, { useState } from 'react'
import back1 from './back1.jpg'
import { Link,useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setAuthUser } from '../redux/userslice'

function Login() {
  const navigate=useNavigate()
  const [user,setUser]=useState({
    username:"",
    password:""
  })
  const dispatch=useDispatch();
  const onSubmitHandler=async (e)=>{
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:7000/api/v1/user/login', user, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      })
        navigate("/")
        toast.success("Logged in Successfully.")
      dispatch(setAuthUser(res.data))
    } catch (error) {
      toast.error(error.response.data.message)
      console.log(error)
    }
    console.log(user)
    setUser({
      username:"",
      password:"",
    })
  }
  return (
    <div className='relative grid h-screen bg-repeat place-content-center' style={{backgroundImage: `url(${back1})`}}>
      <div className='relative z-30 flex flex-col content-center justify-center text-black bg-no-repeat border shadow-lg rounded-3xl p-14 gap-9 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10'>
        <div className='h-14'>
          <h1 className='text-5xl italic font-bold text-center underline'>
            Login
          </h1>
        </div>
        <div>
          <form action="" onSubmit={onSubmitHandler} className='flex flex-col gap-5'>
            <div className='flex justify-around gap-11'>
              <label className='text-lg font-semibold'>
                Username:
              </label>
              <input
              type="text" 
              placeholder='Username' 
              value={user.username}
              onChange={(e)=>setUser({...user,username:e.target.value})}
              className='h-8 p-3 text-black bg-white border-2 border-black border-solid rounded-lg input-bordered w-60'></input>
            </div>
            <div className='flex justify-around gap-11'>
              <label className='text-lg font-semibold'>
                Password:
              </label>
              <input 
              type="password" 
              placeholder='Password' 
              value={user.password}
              onChange={(e)=>setUser({...user,password:e.target.value})}
              className='h-8 p-3 text-black bg-white border-2 border-black border-solid rounded-lg input-bordered w-60'></input>
            </div>
            
            <div className='text-center underline'>
              <Link to="/register">
            Don't have an account? Signup
            </Link>
            </div>
            <div className='flex justify-center'>
            <button type="submit" className="text-white btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
