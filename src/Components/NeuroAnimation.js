import React from "react";

const NeuroAnimation = () => {
  return (
    <div className="neuro-container" style={{right:"10%", bottom: "10%"}}>
      <lottie-player
        src="https://lottie.host/7b1848b3-5bf4-4381-8854-96078c99bd9f/jKtp3YF7Ii.json"
        background="transparent"
        speed="1"
        style={{ width: "300px", height: "300px" }}
        
        loop
        autoplay
        direction="1"
        mode="normal"
      ></lottie-player>
    </div>
  );
};

export default NeuroAnimation;
