import React, { useEffect, useState } from 'react'
import {createBrowserRouter,RouterProvider, useNavigate} from 'react-router-dom'
import Registration from './components/Registration'
import HomePage from './components/HomePage.jsx'
import Login from './components/Login'
import { useDispatch, useSelector } from 'react-redux'
import io from 'socket.io-client'
import { setSocket } from './redux/socketslice.js'
import { setOnlineUsers } from './redux/userslice.js'


const router=createBrowserRouter([
    {
        path:"/",
        element:<HomePage/>
    },
    {
        path:"/register",
        element:<Registration/>
    },
    {
        path:"/login",
        element:<Login/>
    }
])

function App() {

  const {authUser}=useSelector(store=>store.user)
  const {socket} =useSelector(store=>store.socket)
  const dispatch=useDispatch()

  useEffect(()=>{
    if(authUser){
      const socketio=io("http://localhost:7000",{
        query: {
          userId:authUser._id
        }
      })
      dispatch(setSocket(socketio))
      socketio?.on('getOnlineUsers',(onlineUsers)=>{
        dispatch(setOnlineUsers(onlineUsers))
      })
      return ()=>socket?.close()
    }
    else{
      if(socket){

        socket.close()
        dispatch(setSocket(null))
      }
    }
  },[authUser])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
