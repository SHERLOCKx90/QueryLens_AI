// import React, { useState } from 'react'
// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
// import { AlignJustify } from 'lucide-react';

// const NavBar = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <div className='flex justify-between items-center px-10 py-5 border-2 border-gray-200 m-10 rounded-badge'>
//       <img src="Logo-text.svg" alt="logo-text" width={200} />
//       <div className='relative'>
//         <button className='sm:hidden' onClick={toggleDropdown}>
//           <AlignJustify size={24} />
//         </button>
//         <ul className={`absolute top-full right-0 w-[200px] sm:left-0 sm:w-full sm:static sm:flex sm:flex-row sm:justify-center sm:items-center sm:gap-10 ${isDropdownOpen ? 'block' : 'hidden'} sm:block bg-white z-10 px-2`}>
//           <li className='p-3 hover:bg-gray-200 transition-all hover:translate-y-2 rounded-btn hover:font-medium cursor-pointer'><a href="#home">Home</a></li>
//           <li className='p-3 hover:bg-gray-200  transition-all hover:translate-y-2 rounded-btn hover:font-medium cursor-pointer'><a href="#docs">Docs</a></li>
//           <li className='p-3 hover:bg-gray-200  transition-all hover:translate-y-2 rounded-btn hover:font-medium cursor-pointer'><a href="#about">About Us</a></li>
//           <li className='text-center transition-all hover:translate-x-2 cursor-pointer'>
//             <div className='bg-black hover:bg-green-700 text-white px-5 py-2 rounded-full transition-all flex justify-center items-center font-medium'>
//               <SignedOut>
//                 <SignInButton />
//               </SignedOut>
//               <SignedIn>
//                 <UserButton />
//               </SignedIn>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </div>
//   )
// }

// export default NavBar

import React, { useState } from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { AlignJustify } from 'lucide-react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='flex justify-between items-center px-5 py-5 border-2 border-gray-200 m-5 rounded-badge md:px-10 md:py-5 md:m-10'>
      <img src="Logo-text.svg" alt="logo-text" width={150} className='md:w-200' />
      <div className='relative'>
        <button className='md:hidden' onClick={toggleDropdown}>
          <AlignJustify size={24} />
        </button>
        <ul className={`absolute top-full right-0 w-[200px] md:w-[300px] md:left-0 md:w-full md:static md:flex md:flex-row md:justify-center md:items-center md:gap-10 ${isDropdownOpen ? 'block p-4 rounded-3xl shadow-lg' : 'hidden'} md:block bg-white z-10 px-2 `}>
          <Link to="/"><li className='p-3 hover:bg-gray-200 transition-all hover:translate-y-2 rounded-btn hover:font-medium cursor-pointer'>Home</li></Link>
          <Link to="/Docs"><li className='p-3 hover:bg-gray-200 transition-all hover:translate-y-2 rounded-btn hover:font-medium cursor-pointer'>Docs</li></Link>
          <Link to="/About"><li className='p-3 hover:bg-gray-200 transition-all hover:translate-y-2 rounded-btn hover:font-medium cursor-pointer'>About Us</li></Link>
          <li className='text-center transition-all hover:translate-x-2 cursor-pointer'>
            <div className='bg-black hover:bg-green-700 text-white px-5 py-2 rounded-full transition-all flex justify-center items-center font-medium'>
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar