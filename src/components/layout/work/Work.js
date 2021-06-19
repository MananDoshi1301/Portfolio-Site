import React from 'react';
import WorkCarousel from './WorkCarousel';
import WorkIcon from './workIcon/WorkIcon';
import './Work.css';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Work = () => {
    return (
        <div className='container work' id='work'>
            <div className='position-relative'>
                <WorkIcon />
                <h1 className='display-1 text-center work-head' data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration='1000' data-aos-delay='500'>Wanna See my Work?!</h1>
            </div>
            <WorkCarousel />
        </div>
    )
}

export default Work
