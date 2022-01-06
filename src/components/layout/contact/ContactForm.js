import React from 'react'
import './ContactForm.css'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const ContactForm = () => {
    const resume = 'https://docs.google.com/document/d/1WM2S2fETjt9GTAi7ly0SVNSGkmYLJhIwMjA7NifjYY8/edit';
    const linkedin = 'http://www.linkedin.com/in/manandoshi1301';
    const github = 'https://github.com/MananDoshi1301';
    const twitter = 'https://twitter.com/Manan_Doshi1301';

    const linkRedirect = link => {
        window.open(link, '_blank');
    }

    return (
        <div className='container-fluid contact-form'>
            <div className="contact-form-email-title text-end text-wrap">
                <div className="row">
                    <div className="col-lg-12 contact-form-email-link">
                        <a href="mailto:manandoshi1301@gmail.com" className='text-reset' target='_blank' rel='noreferrer'>
                            manandoshi1301<br />@gmail.com
                        </a>
                    </div>
                </div>
            </div>
            <div className="contact-form-content">
                <span className='contact-form-content-hi'>Say Hi!<span className="loader__dot">.</span><span className="loader__dot">.</span><span className="loader__dot">.</span></span><br />
                I love working on Web and Data Architectures. I have the ability to teach. I spend my remaining time in music, sports, personal fitness and outdoors!
            </div>
            <div className="contact-form-divider d-flex justify-content-center"><div></div></div>
            <div className="row contact-form-row text-center">

                <div className="col-lg-3 connect-icon-wrap connect-icon-effect-7 connect-icon-effect-7b connect-icon-effect-resume">
                    <span className='connect-icon' onClick={() => linkRedirect(resume)}><i className="fas fa-file-alt"></i></span>
                </div>

                <div className="col-lg-3 connect-icon-wrap connect-icon-effect-7 connect-icon-effect-7b connect-icon-effect-linkedin">
                    <span className='connect-icon' onClick={() => linkRedirect(linkedin)}><i className="fab fa-linkedin-in"></i></span>
                </div>

                <div className="col-lg-3 connect-icon-wrap connect-icon-effect-7 connect-icon-effect-7b connect-icon-effect-github">
                    <span className='connect-icon' onClick={() => linkRedirect(github)}><i className="fab fa-github"></i></span>
                </div>

                <div className="col-lg-3 connect-icon-wrap connect-icon-effect-7 connect-icon-effect-7b connect-icon-effect-twitter">
                    <span className='connect-icon' onClick={() => linkRedirect(twitter)}><i className="fab fa-twitter"></i></span>
                </div>

            </div>
        </div>
    )
}

export default ContactForm
