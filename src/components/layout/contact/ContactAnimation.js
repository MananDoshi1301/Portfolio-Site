import React from 'react'
import gifAnimation from '../../images/anime.gif'

const ContactAnimation = () => {
    return (
        <div className='d-flex align-items-center justify-content-center h-100'>
            <img src={gifAnimation} className='img-fluid' style={{borderRadius:'50%'}} alt="" />
        </div>
    )
}

export default ContactAnimation
