import React from 'react';
import './Nav.css'

const Nav = () => {
  return (
    <div>
      <nav className='sideNav d-flex flex-column justify-content-around'>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
      </nav>
    </div>
  );
};

export default Nav;
