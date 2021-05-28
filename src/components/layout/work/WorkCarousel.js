import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import './WorkCarousel.css';

const WorkCarousel = () => {
  const carouselProps = {
    showThumbs: false,
    swipeable: true,
    autoPlay: true,
    interval: 8000,
    transitionTime: 800,
    infiniteLoop: true,
    stopOnHover: true,
    showStatus: false,
    showIndicators: false,
    // centerMode: true,
  };

  const arrowSyles = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 5px)',
    height: 100,
    width: 120, 
    cursor: 'pointer',
  };

  const rightArrow = (onClickHandler, label) => {
    return (
      <div
        style={{ ...arrowSyles, right: 15 }}
        onClick={onClickHandler}
        title={label}
      >        
        <img src='https://img.icons8.com/ios/50/4a90e2/long-arrow-right.png' alt=''/>
      </div>
    );
  };

  const leftArrow = (onClickHandler, label) => {
    return (
      <div
        style={{ ...arrowSyles, left: 15}}
        onClick={onClickHandler}
        title={label}
      >        
        <img src="https://img.icons8.com/ios/50/4a90e2/long-arrow-left.png"/>
      </div>
    );
  };

  const slideChange = (current) => {
    console.log(current);
  };

  return (
    <div>
      <div>
        <Carousel
          className=''
          {...carouselProps}
          renderArrowNext={rightArrow}
          renderArrowPrev={leftArrow}
          onChange={(current) => {
            slideChange(current);
          }}
        >


          <div className='carouselDiv p-5 d-flex justify-content-between align-items-around'>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              quia dicta voluptatum ipsum corrupti repudiandae inventore
              perspiciatis. Vel, laudantium obcaecati. Hic soluta saepe quisquam
              non doloribus facere inventore quasi? Sunt?
            </div>
          </div>
          {/* <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quia dicta voluptatum ipsum corrupti repudiandae inventore perspiciatis. Vel, laudantium obcaecati. Hic soluta saepe quisquam non doloribus facere inventore quasi? Sunt?</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quia dicta voluptatum ipsum corrupti repudiandae inventore perspiciatis. Vel, laudantium obcaecati. Hic soluta saepe quisquam non doloribus facere inventore quasi? Sunt?</div>           */}
        </Carousel>
      </div>
    </div>
  );
};

export default WorkCarousel;
