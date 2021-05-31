import React from 'react';
import './Footer.css';
import logo from '../../images/logo5.png';

const Footer = () => {
  return (
    <div className='container'>
      <div className='footer'>
        <div className='logoDiv d-flex justify-content-between'>
          <div className='container-fluid d-flex flex-column justify-space-between'>
            <div className="display-1 footer-header">
              <div>
                <div className='text-start'>Manan</div>
                <div className='text-end'>Doshi</div>
              </div>
            </div>
            <div className='copyrightDiv text-center mt-5'>Copyrights @ 2021 MananDoshi. All rights reserved.</div>
          </div>
          <img src={logo} alt='' className='footer-logo' />
        </div>
      </div>
    </div >
  );
};

export default Footer;
