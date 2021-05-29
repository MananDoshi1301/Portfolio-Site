import React from 'react'
import AboutContent from './AboutContent';
import AboutImage from './AboutImage';
import './Profile.css'

const Profile = () => {
    return (
        <div className='container profile' style={{ marginTop: '15rem' }}>
            <h1 className='text-center display-1 profile-head'>Hey I'm Manan!</h1>
            <div className="row mt-5">
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
