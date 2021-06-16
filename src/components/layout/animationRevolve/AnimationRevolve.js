import React,{useState, useEffect} from 'react';
import "./AnimationRevolve.css";
import img from '../../images/revolve2.png';


const AnimationRevolve = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
  }

  const calculateScrollDistance = () => {
    const scrollTop = window.pageYOffset; // how much the user has scrolled by
    const winHeight = window.innerHeight;
    const docHeight = getDocHeight();
    const totalDocScrollLength = docHeight - winHeight;    
    const scrollValue = Math.floor(scrollTop / totalDocScrollLength * 100);
    
    setScrollPosition(scrollValue); 
  }

  const listenToScrollEvent = () => {
    document.addEventListener("scroll", () => {
      requestAnimationFrame(() => {
        // this.calculateScrollDistance();
        calculateScrollDistance();
      });
    });
  }

  useEffect(()=>{
    listenToScrollEvent();
  },[scrollPosition])

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
