import React from 'react'
import bannerImg from '../../images/milkyWay.jpg';
import './banner.css';

const Banner = () => {
    return (
        <div className='container'>
            <div className={`banner`}
                style={{
                    backgroundSize:'cover',
                    backgroundImage: `url(${bannerImg})`,
                    backgroundPosition: 'center center',
                }}
            />
        </div>
    )
}

export default Banner
