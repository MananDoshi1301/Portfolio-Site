import React from 'react';
import './Footer.css';
import logo from '../../images/logo5.png';
import star from '../../images/star.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Footer = () => {
  return (
    <div className='container'>
      <div className='footer'>
        <div className='logoDiv row'>
          <div className='container-fluid col-lg-6 offset-lg-1'>
            <div className='display-1 footer-header'>
              <div data-aos='fade-right'>
                <div className='d-flex jusify-content-between'>
                  Manan
                  <div className='d-flex justify-content-between align-items-center'>
                    <img
                      src={star}
                      className='img-fluid star star-1 w-30 align-self-start'
                      alt=''
                    />
                    <img
                      src={star}
                      className='img-fluid star star-2 w-30 align-self-center'
                      alt=''
                    />
                    <img
                      src={star}
                      className='img-fluid star star-3 w-30 align-self-start'
                      alt=''
                    />
                  </div>
                </div>
                <div className='text-end'>
                  <span>
                    {/* <i class="fab fa-twitter"></i>
                    <i class="fab fa-linkedin-in"></i> */}
                  </span>
                  Doshi
                </div>
              </div>
            </div>
            <div
              className='copyrightDiv text-center mb-5'
              data-aos='fade-down'
              data-aos-delay='900'
            >
              Copyrights @ 2021 MananDoshi. All rights reserved.
            </div>
          </div>
          {/* <div className="col-lg-2"></div> */}
          <div className='col-lg-4 offset-lg-1'>
            <img
              src={logo}
              alt=''
              className='footer-logo img-fluid'
              data-aos='fade-left'
              data-aos-delay='900'
            />
          </div>
        </div>
      </div>
    </div>    
  );
};

export default Footer;
