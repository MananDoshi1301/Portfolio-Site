import React from 'react';
import './AboutContent.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const AboutContent = () => {
  return (
    <div
      className='fs-4 d-flex justify-content-end h-85'
      data-aos='fade-right'
      data-aos-delay='900'
      data-aos-duration='1000'
    >
      <div className='w-90 about-content d-flex flex-column justify-content-around'>
        <div className='about-content-main'>
          Enthusiastic about Data analysis, its feature branches, Machine Learning and Statistics, I am currently pursuing a Bachelor's of Technology in
          Information Technology. Looking forward to gaining industry-level
          experience in a Data Driven field.
          I also expertise in web development primarily with React!
        </div>
        <br />
        <div className='about-technologies'>
          <div>Here are a few technologies I've been working with recently:</div>
          <div className='d-flex gap-5 fs-5'>
            <ul className='about-technologies-ul'>
              <li>R & Python</li>
              <li>IBM SPSS</li>
            </ul>
            <ul className='about-technologies-ul'>
              <li>React.js</li>
              <li>ML/DS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
