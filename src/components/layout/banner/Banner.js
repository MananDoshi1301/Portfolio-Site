import React from 'react'
import bannerImg from '../../images/milkyWay.jpg';
import BannerTyped from './bannerTyped/BannerTyped';
import './banner.css';

const Banner = () => {
    return (
        <div className='container'>
            <div className={`banner`}
                style={{
                    backgroundSize:'cover',
                    backgroundImage: `url(${bannerImg})`,
                    backgroundPosition: 'center center',
                    opacity: 0.5,
                }}
            />
            <BannerTyped />
        </div>
    )
}

export default Banner
