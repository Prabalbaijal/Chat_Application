import React from 'react'
import SideBar from './SideBar'
import Msgcontainer from './Msgcontainer'
import back1 from './back1.jpg'

function HomePage() {
  return (
    <div className='relative grid h-screen bg-repeat place-content-center' style={{backgroundImage: `url(https://img.freepik.com/premium-vector/mail-message-pattern-design_260839-465.jpg)`}}>
      <div className='border-solid border-2 border-black gap-6 relative flex min-[100px]:gap-1 min-[525px]:w-[460px] min-[100px]:w-[360px] min-[100px]:h-[450px] sm:w-[650px] md:w-[800px] sm:h-[550px] md:h-[550px] overflow-hidden bg-red-500 bg-opacity-0 rounded-lg sm: bg-clip-padding backdrop-filter backdrop-blur-lg p-2'>
        <SideBar />
        <Msgcontainer />
      </div>
    </div>
  )
}

export default HomePage
