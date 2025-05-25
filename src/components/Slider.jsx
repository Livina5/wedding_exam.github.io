import React, { useState, useEffect } from 'react';

import photo1 from '../img/photo_slider (1).jpg';
import photo2 from '../img/photo_slider (2).jpg';
import photo3 from '../img/photo_slider (3).jpg';
import photo4 from '../img/photo_slider(4).jpg';
import photo5 from '../img/photo_slider (5).jpg';

const images = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
];

function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <img
        src={images[current]}
        alt={`slide-${current + 1}`}
      />
    </div>
  );
}

export default Slider; 