import React from 'react';
import Slider from './Slider';
import { FaChevronDown } from 'react-icons/fa';
import logo from '../logo.svg';

const Header = () => {
  const scrollToNextSection = () => {
    const mainSection = document.querySelector('main');
    if (mainSection) {
      mainSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Slider />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className='title_header'>
         Wedding day
        </h1>
        <button className="scroll-arrow" onClick={scrollToNextSection}>
          <FaChevronDown />
        </button>
      </header>
    </div>
  );
}

export default Header;