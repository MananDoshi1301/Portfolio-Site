import React from 'react';
import './Nav.css'

const Nav = () => {
  return (
    <div>
      <nav className='sideNav d-flex flex-column justify-content-around nav-icon-wrap nav-icon-effect-1 nav-icon-effect-1a'>
        <a href="" className='d-flex justify-content-center align-items-center nav-icon'><i class="fas fa-home fa-2x"></i></a>
        <a href="" className='d-flex justify-content-center align-items-center nav-icon'><i class="fas fa-user fa-2x"></i></a>
        <a href="" className='d-flex justify-content-center align-items-center nav-icon'><i class="fas fa-briefcase fa-2x"></i></a>
        <a href="" className='d-flex justify-content-center align-items-center nav-icon'><i class="fas fa-phone-alt fa-2x"></i></a>
      </nav>
    </div>
  );
};

export default Nav;
