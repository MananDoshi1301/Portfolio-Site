import React from 'react';
import './Nav.css'
import logo from '../../images/logo5.png'

const Nav = () => {
  return (
    <div>
      <nav className='sideNav d-flex flex-column justify-content-around nav-icon-wrap nav-icon-effect-1 nav-icon-effect-1a'>
        <div className='d-flex justify-content-center align-items-center nav-logo'><img src={logo} alt="" /></div>
        <a href="" className='d-flex justify-content-center align-items-center nav-icon'><i class="fas fa-home fa-2x"></i></a>
        <a href="" className='d-flex justify-content-center align-items-center nav-icon'><i class="fas fa-user fa-2x"></i></a>
        <a href="" className='d-flex justify-content-center align-items-center nav-icon'><i class="fas fa-briefcase fa-2x"></i></a>
        <a href="" className='d-flex justify-content-center align-items-center nav-icon'><i class="fas fa-phone-alt fa-2x"></i></a>
      </nav>
    </div>
  );
};

export default Nav;
