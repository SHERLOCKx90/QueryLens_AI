import React from 'react'
import { MoveRight } from 'lucide-react';
import Cards from '../../Components/Cards';
import FooterSec from '../../Components/FooterSec';
import { Link } from 'react-router';

const Landing = () => {
    return (
        <div className='h-full overflow-x-hidden flex flex-col justify-center items-center bg-white'>
            <h1 className='font-bold text-3xl md:text-5xl text-black text-center my-5 px-5 md:px-10'>
                The only Lens you need for Data Interaction.⚡
            </h1>
            <h3 className='text-center font-medium px-5 md:px-10'>Empower developers with our advanced AI-driven platform, designed to make dynamic data interaction seamless and intuitive.</h3>
            <Link to="/Dashboard"><button className='mt-5 bg-black mx-5 md:mx-10 px-4 py-2 text-white rounded-full font-medium transition-all flex gap-2 hover:gap-5'>Try Demo <span><MoveRight /></span></button></Link>
            <div className='px-5 md:px-10 flex justify-center'>
                <img src="demo-dashboard-banner.png" alt="app-snippet" className='my-10 rounded-xl w-full md:w-2.5/3 lg:w-2/3' />
            </div>
            <div className='px-5 py-10 md:px-10 w-full flex flex-col justify-center items-center bg-black mb-10'>
                <h1 className='text-3xl md:text-5xl text-white font-bold font-poppins'>How it <span className='text-green-500'>Works </span>?</h1>
                <div className='flex flex-col md:flex-row justify-center items-center gap-5 my-10 sm:flex-col'>
                    <img src="/feature-1.png" alt="feature-card-3" className='w-auto md:w-60' />
                    <img src="/feature-2.png" alt="feature-card-1" className='w-auto md:w-60'/>
                    <img src="/feature-3.png" alt="feature-card-2" className='w-auto md:w-60' />
                </div>
            </div>
            <div className='px-5 md:px-10 w-full md:w-2/3 lg:w-1/2 my-10'>
                <Cards />
            </div>


        </div>
    )
}

export default Landing