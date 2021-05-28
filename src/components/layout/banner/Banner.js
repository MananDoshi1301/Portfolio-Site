import React from 'react'
import bannerImg from '../../images/milkyWay.jpg';
import './banner.css';

const Banner = () => {
    return (
        <div>
            <header className={`banner`}
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
