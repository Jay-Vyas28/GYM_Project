import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <img src="./images/logo.png" alt='logo_img' />
      </div>
      <ul className='menu'>
        <li ><Link className='links' to="/" smooth={true} duration={1000}>Home</Link></li>
        <li><Link className='links' to="/Features" smooth={true} duration={1000}>Features</Link></li>
        <li><Link className='links' to="/Offer" smooth={true} duration={1000}>Offer</Link></li>
        <li><Link className='links' to="/About" smooth={true} duration={1000}>About Us</Link></li>
      </ul>
    </div>
  );
};

export default Header;
