import React from 'react'

const AboutCard = () => {
    return (
        <div
            className="hero min-h-fit-content p-10 sm:p-10 relative bg-opacity-50 rounded-badge"
            style={{
                backgroundImage: "url(/image-3.jpg)",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
            {/* <div className="absolute inset-0 bg-black opacity-50 rounded-badge"></div> */}
            <div className="relative flex flex-col justify-center items-center text-center px-5 sm:px-10 md:px-20">
                <div className="max-w-md">
                    <h1 className="mb-5 text-3xl sm:text-4xl md:text-6xl font-bold text-white">Wanna Know More?</h1>
                    <p className="mb-5 text-base sm:text-lg md:text-xl text-white">
                        Let’s revolutionize data interaction, together. 💪
                    </p>
                    <button className="py-2 px-6 text-base sm:text-lg md:text-xl font-medium font-poppins rounded-full transition-all hover:translate-x-2 hover:bg-green-600 bg-black text-white">Let&apos;s Connect</button>
                </div>
            </div>
        </div>
    )
}

export default AboutCard