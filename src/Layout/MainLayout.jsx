import React from 'react'
import NavBar from '../Components/NavBar'
import FooterSec from '../Components/FooterSec'

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div>{children}</div>
      <div className='w-full'>
        <FooterSec />
      </div>
    </div>
  )
}

export default MainLayout
