import React from 'react'
import DashboardLayout from '../../Layout/DashboardLayout'
import DashScreen from './DashScreen'
// import DashSession from './DashSession'

const Dashboard = () => {
  return (
    <DashboardLayout>
      <DashScreen />
      <div className='text-center mt-5 mb-10 absolute bottom-0 w-full'>
        <h1 className='text-md text-gray-400'>© 2025 QueryLens AI. All Rights Reserved.</h1>
      </div>
    </DashboardLayout>

  )
}

export default Dashboard