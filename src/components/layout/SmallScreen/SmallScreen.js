import React from 'react';
import Typed from 'react-typed';
import "./SmallScreen.css";

const SmallScreen = () => {

    const resume = 'https://docs.google.com/document/d/1WM2S2fETjt9GTAi7ly0SVNSGkmYLJhIwMjA7NifjYY8/edit';
    const linkedin = 'http://www.linkedin.com/in/manandoshi1301';
    const github = 'https://github.com/MananDoshi1301';
    const twitter = 'https://twitter.com/Manan_Doshi1301';

    const linkRedirect = link => {
        window.open(link, '_blank');
    }

    return (
        <div className='smallScreen_div p-5'>
            <div className='smallScreen_title'>
                <Typed
                    strings={['You just need a bit <br>bigger screen to experience some magic!']}
                    typeSpeed={65}
                    backSpeed={50}
                    backDelay={1300}
                    loop
                    smartBackspace
                 />                
            </div>
            {/* <div className="row contact-form-row text-center smallScreen_links">

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

            </div> */}
        </div>
    )
}

export default SmallScreen
