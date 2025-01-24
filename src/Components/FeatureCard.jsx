import { MoveRight } from 'lucide-react';

const FeatureCard = ({imgsrc}) => {
    return (
        <div className='flex flex-col sm:flex-row sm:items-start justify-center items-center bg-white rounded-xl'>
            <div className='w-full sm:w-1/2 sm:h-full h-[50%] object-fill rounded-xl overflow-hidden'>
                <img src={imgsrc} alt="image#1" className='w-full h-full object-cover' />
            </div>
            <div className='flex flex-col justify-start items-start p-5 sm:w-1/2'>
                <h1 className='text-3xl font-semibold text-black'>Get Data Insights Effortlessly.</h1>
                <p className='font-medium text-gray-500'>Access data insights using via query search and domain selection, seamlessly.</p>
                <button className='mt-5 bg-black px-4 py-2 text-white rounded-full font-medium transition-all flex items-center gap-2 hover:gap-3'>
                    Read More <span><MoveRight /></span>
                </button>
            </div>
        </div>
    )
}

export default FeatureCard