import React from 'react';
import { motion } from 'framer-motion';
import './Nav.css'
import logo from '../../images/logo5.png'

const Nav = () => {
  const initial = {
    y: '-100vw',
  }
  const animate = {
    y: '0',
  }
  return (
    <div>
      <nav className='sideNav d-flex flex-column justify-content-around align-items-center nav-icon-wrap nav-icon-effect-1 nav-icon-effect-1a'>

        <motion.div initial={initial} animate={animate} transition={{ type: "spring", stiffness: 30, delay: 0 }} className='d-flex justify-content-center align-items-center nav-logo' onClick={() => window.scrollTo(0, 0)} ><img src={logo} alt="" /></motion.div>

        <motion.a initial={initial} animate={animate} transition={{ type: "spring", stiffness: 30, delay: 0.5 }} onClick={() => window.scrollTo(0, 0)} className='d-flex justify-content-center align-items-center nav-icon'><i className="fas fa-home fa-2x"></i></motion.a>

        <motion.a initial={initial} animate={animate} transition={{ type: "spring", stiffness: 30, delay: 1 }} href="#about" className='d-flex justify-content-center align-items-center nav-icon'><i className="fas fa-user fa-2x"></i></motion.a>

        <motion.a initial={initial} animate={animate} transition={{ type: "spring", stiffness: 30, delay: 1.5 }} href="#work" className='d-flex justify-content-center align-items-center nav-icon'><i className="fas fa-briefcase fa-2x"></i></motion.a>

        <motion.a initial={initial} animate={animate} transition={{ type: "spring", stiffness: 30, delay: 2 }} href="#contact" className='d-flex justify-content-center align-items-center nav-icon'><i className="fas fa-phone-alt fa-2x"></i></motion.a>
      </nav>
    </div>
  );
};

export default Nav;
