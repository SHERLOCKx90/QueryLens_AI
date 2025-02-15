import React, { useState } from 'react';
import { useUser } from "@clerk/clerk-react";
import DatabaseAnimation from '../../Components/Animations/DatabaseAnimation';
import { Link } from 'react-router-dom';
import { MoveRight } from 'lucide-react';
import DashSession from './DashSession';
import { Sparkles } from 'lucide-react';

const DashScreen = () => {
  const { user } = useUser();
  const [open, setOpen] = useState(false);

  return (
    <div className='w-full flex flex-col text-black my-5 px-5 md:px-20 md:items-center md:justify-center'>
      {/* Container for content */}
      {!open ?
        <div className='flex flex-col md:flex-row items-center justify-center gap-5 w-full md:w-3/4 md:mx-auto'>
          {/* Text Section */}
          <div className='flex flex-col gap-5 text-left md:w-3/4 p-5'>
            <Sparkles className='md:w-20 md:h-20 w-10 h-10 text-green-600 hover:transition-transform hover:translate-x-1 cursor-pointer hover:text-blue-600'/>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold font-poppins'>
              Hi There! {user?.firstName}
            </h1>
            <h3 className='text-xl md:text-2xl lg:text-3xl text-gray-500 font-normal md:w-3/4'>
              Type your query into the prompt-box after selecting the database to interact with. All the best!
            </h3>
            <button className='mt-5 bg-black px-4 py-2 text-white rounded-full font-medium transition-all flex gap-2 hover:gap-5 w-fit' onClick={() => { setOpen(!open) }}>Get Started <span><MoveRight /></span></button>
          </div>

          {/* Animation Section */}
          <DatabaseAnimation />
        </div>
        :
        <DashSession />}


    </div>
  );
};

export default DashScreen;
