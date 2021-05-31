import React from 'react';
import './AboutImage.css';
import myImg from '../../images/myImgCropped.jpeg';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const AboutImage = () => {
    return (
        <div className='aboutImage d-flex justify-content-center align-items-center p-3' data-aos='fade-left' data-aos-delay='500' data-aos-duration='1000'>
            <img src={myImg} className='img-fluid w-75' alt="" />
        </div>
    )
}

export default AboutImage
