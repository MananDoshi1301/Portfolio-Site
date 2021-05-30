import React from 'react';
import './Footer.css';
import logo from '../../images/logo5.png';

const Footer = () => {
  return (
    <div className='container'>
      <div className='footer'>
        <div className='logoDiv d-flex justify-content-between'>
          <img src={logo} alt='' />          
        </div>
      </div>
    </div>
  );
};

export default Footer;
