import React from 'react'
import AboutContent from './AboutContent';
import AboutImage from './AboutImage';
import './Profile.css'

const Profile = () => {
    return (
        <div className='container profile' style={{ marginTop: '15rem' }}>
            <div className='text-center display-1 profile-head'>About Me!</div>
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
