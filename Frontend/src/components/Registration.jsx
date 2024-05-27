import React from 'react'
import back1 from './back1.jpg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Registration() {

  const [user,setUser]=useState({
    name:"",
    username:"",
    password:"",
    confirmpassword:"",
    gender:"",
  })
  const onSubmitHandler=(e)=>{
    e.preventDefault()
    console.log(user)
    setUser({
      name:"",
      username:"",
      password:"",
      confirmpassword:"",
      gender:"",
    })
  }

  const handleGender=(gender)=>{
    setUser({...user,gender})
  }
  
  return (
    <div className='relative grid h-screen bg-repeat place-content-center' style={{ backgroundImage: `url(${back1})` }}>
      <div className='relative flex flex-col content-center justify-center text-white bg-no-repeat border border-gray-100 shadow-lg z-16 rounded-2xl p-14 gap-9 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10'>
        <div className='h-14'>
          <h1 className='text-5xl font-bold text-center'>
            Signup
          </h1>
        </div>
        <div>
          <form onSubmit={onSubmitHandler} action="" className='flex flex-col gap-5'>
            <div className='flex justify-around gap-11'>
              <label className='text-lg font-semibold'>
                Full Name:
              </label>
              <input 
              type="text" 
              placeholder='Name' 
              value={user.name}
              onChange={(e)=>setUser({...user,name:e.target.value})}
              className='h-8 p-3 text-black bg-white rounded-lg input-bordered w-60'></input>
            </div>
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
              value={user.password}
              onChange={(e)=>setUser({...user,password:e.target.value})}
              placeholder='Password' 
              className='h-8 p-3 text-black bg-white rounded-lg input-bordered w-60'></input>
            </div>
            <div className='flex justify-around gap-3'>
              <label className='text-lg font-semibold'>
                Confirm Password:
              </label>
              <input 
              type="password" 
              placeholder='Confirm Password'
              value={user.confirmpassword} 
              onChange={(e)=>setUser({...user,confirmpassword:e.target.value})}
              className='h-8 p-3 text-black bg-white rounded-lg input-bordered w-60'></input>
            </div>
            <div className='flex items-center justify-around'>
              <span className='text-lg font-semibold'>Gender:</span>
              <div className='flex gap-2 w-60'>
                <label className="cursor-pointer label">
                  <span className="text-white label-text">Male</span>
                  <input 
                  checked={user.gender==="male"}
                  onChange={()=>handleGender("male")}
                  type="checkbox"
                  className="checkbox checkbox-primary" />
                </label>
                <label className="cursor-pointer label">
                  <span className="text-white label-text">Female</span>
                  <input
                  checked={user.gender==="female"}
                  onChange={()=>handleGender("female")}
                  type="checkbox"
                  className="checkbox checkbox-secondary" />
                </label>
              </div>
            </div>
            <div className='text-center underline'>
              <Link to="/login">
                Already have an account?Login
              </Link>
            </div>
            <div className='flex justify-center'>
              <button type="submit" className="btn btn-neutral">Signup</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Registration
