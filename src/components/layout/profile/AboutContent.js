import React from 'react';
import './AboutContent.css'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const AboutContent = () => {
  return (
    <div className='fs-3 d-flex justify-content-end' data-aos='fade-right' data-aos-delay='900' data-aos-duration='1000'>
      <div className='w-80 about-content'>
        Enthusiastic about Web Architectures, Machine Learning, and Blockchain Technologies, I am currently pursuing a Bachelor's of Technology in Information Technology. Looking forward to gaining industry-level experience. 
      </div>
    </div>
  );
};

export default AboutContent;
