import React from 'react';
import Typed from 'react-typed';
// import 'react-typed/dist/animatedCursor.css';
import './BannerTyped.css';

const BannerTyped = () => {
  return (
    <div className='bannertyped'>
      <div className='bannerTypedDiv w-75 text-center'>
        <Typed
          strings={['Hey, I Am Manan!', 'Do You Know Me?', 'No?', 'Then It\'s Just A Matter<br> Of Scroll!']}
          typeSpeed={70}
          backSpeed={50}
          backDelay={2000}
          // loop
          smartBackspace
        />
      </div>
    </div>
  );
};

export default BannerTyped;
