import React from 'react'
import FeatureCard from './FeatureCard'

const Cards = () => {
    return (
        <div className="carousel carousel-vertical rounded-box h-96 mb-10 cursor-pointer transition-all">
            <div className="carousel-item h-full">
                <FeatureCard imgsrc={"/image-1.jpg"}/>
            </div>
            <div className="carousel-item h-full">
                <FeatureCard imgsrc={"/image-2.jpg"}/>
            </div>
        </div>
    )
}

export default Cards