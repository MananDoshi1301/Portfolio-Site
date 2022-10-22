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
          I am a Final Year IT Engineering student particularly interested in core IT subjects that include Computer systems and networks, Parallel and Distributed Computing, Data Mining and Big Data Analytics. I primarily find myself working in the tech industry for this lifetime. Always looking forward to gain new experiences.
          I also expertise in web development primarily with React!
        </div>
        <br />
        <div className='about-technologies'>
          <div>Here are a few topics and technologies I've been working with recently:</div>
          <div className='d-flex gap-5 fs-5 mt-3'>
            <ul className='about-technologies-ul'>
              <li>R & Python</li>
              <li>AWS</li>
            </ul>
            <ul className='about-technologies-ul'>
              <li>MERN Stack</li>
              <li>Computer Networks and Systems</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
