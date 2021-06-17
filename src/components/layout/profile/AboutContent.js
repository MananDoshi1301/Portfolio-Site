import React from 'react';
import './AboutContent.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const AboutContent = () => {
  return (
    <div
      className='fs-4 d-flex justify-content-end h-75'
      data-aos='fade-right'
      data-aos-delay='900'
      data-aos-duration='1000'
    >
      <div className='w-80 about-content d-flex flex-column justify-content-around'>
        <div>
          Enthusiastic about Web Architectures, Machine Learning, and Blockchain
          Technologies, I am currently pursuing a Bachelor's of Technology in
          Information Technology. Looking forward to gaining industry-level
          experience.
        </div>
        <div className='about-technologies'>
          <div>Here are a few technologies I've been working with recently:</div>
          <div className='d-flex gap-3'>
            <ul>
              <li>JavaScript (ES6+)</li>
              <li>Node.js</li>
            </ul>
            <ul>
              <li>React.js</li>
              <li>UI Libraries</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
