import React, { useState } from 'react'
import back1 from './back1.jpg'
import { Link } from 'react-router-dom'

function Login() {
  const [user,setUser]=useState({
    username:"",
    password:""
  })
  const onSubmitHandler=(e)=>{
    e.preventDefault()
    console.log(user)
    setUser({
      username:"",
      password:"",
    })
  }
  return (
    <div className='relative grid h-screen bg-repeat place-content-center' style={{backgroundImage: `url(${back1})`}}>
      <div className='relative flex flex-col content-center justify-center text-white bg-no-repeat border border-gray-100 shadow-lg z-16 rounded-2xl p-14 gap-9 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10'>
        <div className='h-14'>
          <h1 className='text-5xl font-bold text-center'>
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
              className='h-8 p-3 text-black bg-white rounded-lg input-bordered w-60'></input>
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
              className='h-8 p-3 text-black bg-white rounded-lg input-bordered w-60'></input>
            </div>
            
            <div className='text-center underline'>
              <Link to="/register">
            Don't have an account?Signup
            </Link>
            </div>
            <div className='flex justify-center'>
            <button type="submit" className="btn btn-neutral">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
