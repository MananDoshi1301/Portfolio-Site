import React,{useEffect} from 'react';
import "./AnimationRevolve.css";
import img from '../../images/revolve2.png';


const AnimationRevolve = () => {
  return (
    <div>
      <div className='revolve-mainDiv'>
        <div className='revolve-subDiv'>
          <img src={img} className='' alt='' />
        </div>
      </div>
    </div>
  );
};

export default AnimationRevolve;
