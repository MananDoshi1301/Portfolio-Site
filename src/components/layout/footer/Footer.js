import React from 'react';
import './Footer.css';
import logo from '../../images/logo5.png';
import star from '../../images/star.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Footer = () => {

  const linkedin = 'http://www.linkedin.com/in/manandoshi1301';
  const twitter = 'https://twitter.com/Manan_Doshi1301';
  const email = 'mailto:manandoshi1301@gmail.com';

  const linkRedirect = link => {
    window.open(link, '_blank');
  }

  return (
    <div className='container'>
      <div className='footer'>
        <div className='logoDiv row'>
          <div className='container-fluid col-lg-6 offset-lg-1'>
            <div className='display-1 footer-header'>
              <div data-aos='fade-right'>
                <div className='d-flex jusify-content-between'>
                  Manan
                  <div className='d-flex justify-content-around align-items-center'>
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
                <div className='d-flex justify-content-between align-items-center'>
                  <span className='footer-social d-flex justify-content-between gap-5'>
                    <div className='footer-social-div'>
                      <i
                        id='footer-mail'
                        className='fas fa-envelope footer-social-link'
                        onClick={() => linkRedirect(email)}
                      ></i>
                      <div className="footer-shadow footer-shadow-1"></div>
                    </div>
                    <div className='footer-social-div'>
                      <i
                        id='footer-linkedin'
                        className='fab fa-linkedin-in footer-social-link'
                        onClick={() => linkRedirect(linkedin)}
                      ></i>
                      <div className="footer-shadow footer-shadow-2"></div>
                    </div>
                    <div className='footer-social-div'>
                      <i
                        id='footer-twitter'
                        className='fab fa-twitter footer-social-link'
                        onClick={() => linkRedirect(twitter)}
                      ></i>
                      <div className="footer-shadow footer-shadow-3"></div>
                    </div>
                  </span>
                  Doshi
                </div>
              </div>
            </div>
            <div
              className='copyrightDiv text-center mb-5'              
            >
              Copyrights @ 2021 MananDoshi. All rights reserved.
              {/* <a href="https://www.vecteezy.com/"> PNGs by Vecteezy</a> */}
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
