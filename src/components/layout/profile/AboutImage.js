import React from 'react';
import './AboutImage.css';
import myImg from '../../images/myImgCropped.jpeg';

const AboutImage = () => {
    return (
        <div className='aboutImage d-flex justify-content-center align-items-center p-3'>
            <img src={myImg} className='img-fluid w-75' alt="" />
        </div>
    )
}

export default AboutImage
