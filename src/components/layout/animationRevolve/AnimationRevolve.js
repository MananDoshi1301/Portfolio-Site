import React,{useState, useEffect} from 'react';
import "./AnimationRevolve.css";
import img from '../../images/revolve8.png';
import useScrollStatus from '../../hooks/useScrollStatus';


const AnimationRevolve = () => {  

  const scrollPosition = useScrollStatus();
  return (
    <div>
      <div className='revolve-mainDiv'>
        <div className='revolve-subDiv'>
          <img src={img} className='img-fluid' style={{transform:`rotate(${(scrollPosition)%360}deg)`}} alt='' />          
        </div>
      </div>
    </div>
  );
};

export default AnimationRevolve;
