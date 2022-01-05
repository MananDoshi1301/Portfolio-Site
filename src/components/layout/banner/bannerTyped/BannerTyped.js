import React from 'react';
import Typed from 'react-typed';
// import 'react-typed/dist/animatedCursor.css';
import './BannerTyped.css';

const BannerTyped = () => {
  return (
    <div className='bannertyped'>
      <div className='bannerTypedDiv w-75 text-center'>
        <Typed
          strings={['Hey, I Am Manan!', 'I am a Data Science Enthusisast!', 'I also Master Front Ends!', 'Just Scroll To Know<br /> More!']}
          typeSpeed={65}
          backSpeed={50}
          backDelay={1300}
          loop
          smartBackspace
        />
      </div>
    </div>
  );
};

export default BannerTyped;
