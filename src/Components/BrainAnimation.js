import React, { useEffect, useRef } from "react";

const BrainAnimation = () => {
  const lottieRef = useRef(null);


  return (
    <div className="brain-container" style={{ position: 'absolute', top: '0%', left: '0%', width: '100px', height: '100px' }}>
      <lottie-player
        ref={lottieRef}
        src="https://lottie.host/24872b31-9698-4060-bf6f-551b5cfa0c93/yuJdug1g2O.json"
        background="transparent"
        speed="1"
        style={{ width: "200px", height: "200px" }}
        loop
        autoplay
        direction="1"
        mode="normal"
      />
      {/* <dotlottie-player
        src="https://lottie.host/21e7b5cc-7acf-4fc6-85e1-77b9bac2174f/5YTuZ97WBE.json"
        background="#FFFFFF"
        speed="5"
        style={{ width: "100%", height: "100%" }}
        direction="1"
        playMode="normal"
        loop
        autoplay
      ></dotlottie-player> */}
    </div>
  );
};

export default BrainAnimation;
