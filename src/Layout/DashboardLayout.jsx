import React from 'react'
import DashNav from '../Components/DashNav'

const DashboardLayout = ({ children }) => {
  return (
    <div className='flex flex-col h-screen w-full bg-white'>
      <div className='flex flex-col justify-center items-center sticky top-0 z-50'><DashNav /></div>
      <div>{children}</div>
      
    </div>
  )
}

export default DashboardLayout