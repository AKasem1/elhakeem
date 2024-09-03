import React, { useEffect } from "react";

const VirusAnimation = () => {
    useEffect(() => {
        const scriptUrl = "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";
        
        if (!document.querySelector(`script[src="${scriptUrl}"]`)) {
          const script = document.createElement("script");
          script.src = scriptUrl;
          script.async = true;
          document.body.appendChild(script);
    
          script.onload = () => {
            console.log("Lottie player script loaded successfully.");
          };
    
          script.onerror = () => {
            console.error("Failed to load the Lottie player script.");
          };
    
          return () => {
            // Cleanup the script when the component unmounts (optional)
            document.body.removeChild(script);
          };
        }
      }, []);
    
      return (
        <div className="virus-container" style={{top:"-10%", right: "5%"}}>
        <lottie-player
          src="https://lottie.host/ba3029aa-05e8-4d7f-a3a3-4d75ffeb80f9/MA5WJUdBty.json"
          background="transparent"
          className="divide-animation"
          speed="2"
          style={{ width: "200px", height: "200px" }}
          loop
          autoplay
          direction="1"
          mode="normal"
        ></lottie-player>
        </div>
      );
    };

export default VirusAnimation;
