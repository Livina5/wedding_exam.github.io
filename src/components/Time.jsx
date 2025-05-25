import React from 'react';

function Time() {
  return (
    <div className="time-container" id="next-section">
      <div className="content-overlay">
        <h2 className="time-title">Розклад весілля</h2>
        <div className="schedule-container">
          <div className="schedule-item">
            <span className="time">13:30</span>
            <span className="event">Зустріч гостей</span>
          </div>
          <div className="schedule-item">
            <span className="time">14:00</span>
            <span className="event">Урочистий розпис</span>
          </div>
          <div className="schedule-item">
            <span className="time">15:00</span>
            <span className="event">Банкет</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Time;
