import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <lottie-player
        src="https://lottie.host/fa3f3cd9-fab3-41b1-a79e-4b57db187bf0/7TA0wFKwmS.json"
        background="transparent"
        speed="1"
        style={{ width: "170px", height: "170px" }}
        loop
        autoplay
      ></lottie-player>
    </div>
  );
};

export default Loader;