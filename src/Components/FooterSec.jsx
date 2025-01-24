// import React from 'react'

// const FooterSec = () => {
//   return (
//     <div className='w-full relative bottom-0 bg-green-600 text-white flex flex-col justify-center items-center p-5'>

//       <div className='flex flex-col sm:flex-row justify-center sm:justify-between items-center w-full sm:px-10'>
//         <div className='flex flex-col justify-center items-center sm:items-start'>
//           <img src="Logo-text.svg" alt="logo-text" width={200} />
//           <h3 className='text-green-200 font-medium text-lg text-left'>Dynamic Data Insight Access Tool for Developers.</h3>
//         </div>
//         <div className='text-center my-5 font-medium text-green-200 sm:text-left'>
//           <ul className='flex flex-col sm:flex-row justify-center items-center sm:items-start gap-5'>
//             <li className='text-xl hover:translate-x-2 transition-all cursor-pointer hover:underline hover:text-white text-black'>Home
//               <p className='text-sm sm:w-40 text-green-200'>Explore what we are offering.</p></li>
//             <li className='text-xl hover:translate-x-2 transition-all cursor-pointer hover:underline hover:text-white text-black'>Documentation
//               <p className='text-sm sm:w-40 text-green-200'>Dive into the Technical part of QueryLens.</p></li>
//             <li className='text-xl hover:translate-x-2 transition-all cursor-pointer hover:underline hover:text-white text-black'>About Us
//               <p className='text-sm sm:w-40 text-green-200'>Find out who we are.</p></li>
//             <li className='text-xl hover:translate-x-2 transition-all cursor-pointer hover:underline hover:text-white text-black'>QueryLens Demo
//               <p className='text-sm sm:w-40 text-green-200'>Try out QueryLens and boost productivity.</p></li>
//           </ul>
//         </div>
//       </div>
      
//       <div><p className='text-center mt-5 font-normal'>© 2025 QueryLens AI. All Rights Reserved.</p></div>
//     </div>
//   )
// }

// export default FooterSec

import React from 'react'
import { Link } from 'react-router-dom';

const FooterSec = () => {
  return (
    <div className='w-full relative bottom-0 bg-green-600 text-white flex flex-col justify-center items-center p-5'>
      <div className='flex flex-col sm:flex-row justify-center sm:justify-between items-center w-full sm:px-10'>
        <div className='flex flex-col justify-center items-center sm:items-start'>
          <img src="Logo-text.svg" alt="logo-text" width={200} />
          <h3 className='text-green-200 font-medium text-lg text-left'>Dynamic Data Insight Access Tool for Developers.</h3>
        </div>
        <div className='text-center my-5 font-medium text-green-200 sm:text-left'>
          <ul className='flex flex-col sm:flex-row justify-center items-center sm:items-start gap-5'>
            <li className='text-xl hover:translate-x-2 transition-all cursor-pointer hover:underline hover:text-white text-black'>
              <Link to="/">Home</Link>
              <p className='text-sm sm:w-40 text-green-200'>Explore what we are offering.</p>
            </li>
            <li className='text-xl hover:translate-x-2 transition-all cursor-pointer hover:underline hover:text-white text-black'>
              <Link to="/docs">Documentation</Link>
              <p className='text-sm sm:w-40 text-green-200'>Dive into the Technical part of QueryLens.</p>
            </li>
            <li className='text-xl hover:translate-x-2 transition-all cursor-pointer hover:underline hover:text-white text-black'>
              <Link to="/about">About Us</Link>
              <p className='text-sm sm:w-40 text-green-200'>Find out who we are.</p>
            </li>
            <li className='text-xl hover:translate-x-2 transition-all cursor-pointer hover:underline hover:text-white text-black'>
              QueryLens Demo
              <p className='text-sm sm:w-40 text-green-200'>Try out QueryLens and boost productivity.</p>
            </li>
          </ul>
        </div>
      </div>
      <div><p className='text-center mt-5 font-normal'>© 2025 QueryLens AI. All Rights Reserved.</p></div>
    </div>
  )
}

export default FooterSec