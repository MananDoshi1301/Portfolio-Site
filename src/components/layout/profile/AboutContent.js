import React from 'react';
import './AboutContent.css'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const AboutContent = () => {
  return (
    <div className='fs-3 d-flex justify-content-end' data-aos='fade-right' data-aos-delay='900' data-aos-duration='1000'>
      <div className='w-75 about-content'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        esse earum quasi, vitae enim dolorum repellat rem cum deleniti non nulla
        laboriosam consectetur inventore molestias consequuntur fugiat quibusdam
        beatae harum!
      </div>
    </div>
  );
};

export default AboutContent;
