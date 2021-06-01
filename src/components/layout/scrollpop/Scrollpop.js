import React from 'react';
import './Scrollpop.css';

const Scrollpop = () => {
  return (
    <div>
      <div className='scrollpop' onClick={()=>{window.scrollTo(0,0)}}>
        <div>
          <i class='fas fa-chevron-up fa-2x'></i>
        </div>
      </div>
    </div>
  );
};

export default Scrollpop;
