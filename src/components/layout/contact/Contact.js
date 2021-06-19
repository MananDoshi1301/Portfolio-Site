import React from 'react';
import ContactForm from './ContactForm';
import './Contact.css';
import ContactAnimation from './ContactAnimation';
import ConnectAnimation from './connectAnimation/ConnectAnimation';

const Contact = () => {
  return (
    <div className='container contact' style={{marginTop:'7rem'}}  id='contact'>
      <ConnectAnimation />
      <div className='display-1 h1 text-end contact-title'>
        Connect!
      </div>
      <div className='row'>
        <div className='col-lg-5'>
          <ContactAnimation />
        </div>
        <div className='col-lg-7'>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
