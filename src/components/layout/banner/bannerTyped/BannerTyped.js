import React from 'react';
import Typed from 'react-typed';
import './BannerTyped.css';

const BannerTyped = () => {
  return (
    <div className='bannertyped'>
      <div className='bannerTypedDiv'>
        <Typed
          strings={['Hey,<br>Welcome To my Website!','', '']}
          typeSpeed={70}
          backSpeed={50}
          backDelay={1}
          loop
          smartBackspace
        />
      </div>
    </div>
  );
};

export default BannerTyped;
