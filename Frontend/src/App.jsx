import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Registration from './components/Registration'
import HomePage from './components/HomePage'
import Login from './components/Login'

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
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
