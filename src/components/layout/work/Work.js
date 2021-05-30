import React from 'react';
import WorkCarousel from './WorkCarousel';
import './Work.css';

const Work = () => {
    return (
        <div className='container work'>
            <h1 className='display-1 text-center work-head'>Wanna See my Work?!</h1>
            <WorkCarousel />
        </div>
    )
}

export default Work
