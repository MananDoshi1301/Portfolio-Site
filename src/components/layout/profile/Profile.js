import React from 'react'
import AboutContent from './AboutContent';
import AboutImage from './AboutImage';
import './Profile.css';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Profile = () => {
    return (
        <div className='container profile' style={{ marginTop: '15rem' }} id='about'>
            <div className='text-center display-1 profile-head' data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration='1000'>About Me!</div>
            <div className="row">
                <div className="col-lg-6 d-flex align-items-center profile-content">
                    <AboutContent />
                </div>
                <div className="col-lg-6">
                    <AboutImage />
                </div>
            </div>
        </div>
    )
}

export default Profile
