import React from 'react'
import FeatureCard from './FeatureCard'

const Cards = () => {
    return (
        <div className="carousel carousel-vertical rounded-box h-96 mb-10 cursor-pointer transition-all">
            <div className="carousel-item h-full sm:max-w-full">
                <FeatureCard imgsrc={"/image-1.jpg"} headline="💡 Ask Questions, Get Answers Instantly" details="Leverage our advanced conversational AI to interact with your data naturally. No more writing complex queries—simply ask, and QueryLensAI transforms your intent into actionable insights." />
            </div>
            <div className="carousel-item h-full sm:max-w-full">
                <FeatureCard imgsrc={"/image-5.jpg"} headline="⚙️ Stay Ahead with Real-Time Analytics" details="Monitor trends and track performance instantly with real-time data analysis. QueryLensAI empowers you with growth metrics like week-over-week and month-over-month comparisons to make timely, informed decisions." />
            </div>
            <div className="carousel-item h-full sm:max-w-full">
                <FeatureCard imgsrc={"/image-2.jpg"} headline="✅ Your Data, Any Source, Unified Insights" details="Seamlessly connect to CSVs, relational databases, or live data streams. QueryLensAI adapts to your data ecosystem, providing a unified platform to analyze diverse datasets effortlessly." />
            </div>
        </div>
    )
}

export default Cards