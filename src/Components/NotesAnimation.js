import React, { useEffect } from 'react';

const NotesAnimation = () => {

  return (
    <lottie-player 
      className="notes-animation"
      src="https://lottie.host/8593bd7a-a847-486d-a70a-43346a55d789/uj8l8A8tYJ.json"
      background="##FFFFFF"
      speed="1"
      style={{ width: '300px', height: '300px' }}
      loop
      autoplay
      direction="1"
      mode="normal"
    ></lottie-player>
  );
};

export default NotesAnimation;