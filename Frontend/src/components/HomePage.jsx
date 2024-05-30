import React from 'react'
import SideBar from './SideBar'
import Msgcontainer from './Msgcontainer'
import back1 from './back1.jpg'

function HomePage() {
  return (
    <div className='relative grid h-screen bg-repeat place-content-center' style={{backgroundImage: `url(${back1})`}}>
      <div className='gap-6 relative flex min-[100px]:gap-1 min-[100px]:w-[400px] min-[100px]:h-[600px] min-[100px]:w-[450px] sm:w-[650px] md:w-[800px] sm:h-[550px] md:h-[550px] overflow-hidden bg-red-500 bg-opacity-0 rounded-lg sm: bg-clip-padding backdrop-filter backdrop-blur-lg border-2 p-2'>
        <SideBar />
        <Msgcontainer />
      </div>
    </div>
  )
}

export default HomePage
