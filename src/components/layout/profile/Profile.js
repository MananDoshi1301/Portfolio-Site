import React from 'react'
import AboutContent from './AboutContent';
import AboutImage from './AboutImage';

const Profile = () => {
    return (
        <div className='container' style={{marginTop: '15rem'}}>
            <h1 className='text-center display-1'>Hey I'm Manan!</h1>
            <h2 className='text-center mb-5 fs-2'>~ This is About Me ~</h2>
            <div className="row mt-5">
            <div className="col-lg-6 d-flex align-items-center">
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
