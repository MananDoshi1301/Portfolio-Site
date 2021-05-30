import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
    return (
        <div className='container-fluid contact-form'>
            <div className="contact-form-email-title text-end text-wrap">
                <div className="row">
                    <div className="col-lg-4 d-flex justify-content-center align-items-center mail-icon">
                        <i class="fas fa-paper-plane fa-8x"></i>
                    </div>
                    <div className="col-lg-8 contact-form-email-link">
                        <a href="mailto:manandoshi1301@gmail.com" className='text-reset' target='_blank' rel='noreferrer'>
                            manandoshi1301<br />@gmail.com
                        </a>
                    </div>
                </div>
            </div>
            <div className="contact-form-content">
                <span className='contact-form-content-hi'>Say Hi!<span class="loader__dot">.</span><span class="loader__dot">.</span><span class="loader__dot">.</span></span><br />I love creating, designing and working on Web Architectures. I have the ability to teach. Currently I am finding myself a space in Tech Industry and exploring various technologies. Connect with me!
            </div>
            <div className="contact-form-divider d-flex justify-content-center"><div></div></div>
            <div className="row contact-form-row text-center">
                <div className="col-lg-3">
                    <i class="fas fa-file-alt fa-5x"></i>
                </div>
                <div className="col-lg-3">
                    <i class="fab fa-linkedin-in fa-5x"></i>
                </div>
                <div className="col-lg-3">
                    <i class="fab fa-github fa-5x"></i>
                </div>
                <div className="col-lg-3">
                    <i class="fab fa-twitter fa-5x"></i>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
