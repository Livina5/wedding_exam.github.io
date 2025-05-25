import React, { useState, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';

function Invitation() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('invitation-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const weddingDate = new Date('2025-07-26T00:00:00');
    
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = weddingDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="main-container" id="invitation-section">
      <div className="text-container">
        <p className="greeting animate-text">Дорогі наші рідні та друзі!</p>
        <p className="invitation animate-text">Запрошуємо Вас на наше весілля.</p>
        <p className="date animate-text">26.07.2025</p>
      </div>
      
      <div className="timer-container">
        <div className="timer-item">
          <span className="timer-number">{timeLeft.days}</span>
          <span className="timer-label">днів</span>
        </div>
        <div className="timer-item">
          <span className="timer-number">{timeLeft.hours}</span>
          <span className="timer-label">годин</span>
        </div>
        <div className="timer-item">
          <span className="timer-number">{timeLeft.minutes}</span>
          <span className="timer-label">хвилин</span>
        </div>
        <div className="timer-item">
          <span className="timer-number">{timeLeft.seconds}</span>
          <span className="timer-label">секунд</span>
        </div>
      </div>

      <button 
        className="scroll-arrow invitation-arrow" 
        onClick={scrollToNextSection}
        aria-label="Прокрутити до запрошення"
      >
        <FaChevronDown />
      </button>
    </div>
  );
}

export default Invitation;
