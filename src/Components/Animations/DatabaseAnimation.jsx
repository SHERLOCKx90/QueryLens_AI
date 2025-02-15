import React from "react";
import Lottie from "lottie-react";
import animationData from "./database-animation.json"; // Adjust path accordingly

const MyAnimation = () => {
  return (
    <div style={{ width: 300, height: 300 }}>
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default MyAnimation;
