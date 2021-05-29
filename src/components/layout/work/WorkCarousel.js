import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import './WorkCarousel.css';

const WorkCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [totalSlides, setTotalSlides] = useState(3);
  const [progress, setProgress] = useState((1/totalSlides) * 100);
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
        <img
          src='https://img.icons8.com/ios/50/4a90e2/long-arrow-right.png'
          alt=''
        />
      </div>
    );
  };

  const leftArrow = (onClickHandler, label) => {
    return (
      <div
        style={{ ...arrowSyles, left: 15 }}
        onClick={onClickHandler}
        title={label}
      >
        <img src='https://img.icons8.com/ios/50/4a90e2/long-arrow-left.png' />
      </div>
    );
  };

  const slideChange = (current) => {
    const value = Number((current+1)/totalSlides)*100;
    setCurrentSlide(current+1);
    setProgress(value);
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
              non doloribus facere inventore quasi? Sunt?Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Itaque quia dicta voluptatum
              ipsum corrupti repudiandae inventore perspiciatis. Vel, laudantium                            
            </div>            
          </div>
          <div className='carouselDiv p-5 d-flex justify-content-between align-items-around'>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              quia dicta voluptatum ipsum corrupti repudiandae inventore
              perspiciatis. Vel, laudantium obcaecati. Hic soluta saepe quisquam
              non doloribus facere inventore quasi? Sunt?Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Itaque quia dicta voluptatum
              ipsum corrupti repudiandae inventore perspiciatis. Vel, laudantium                            
            </div>            
          </div>
          <div className='carouselDiv p-5 d-flex justify-content-between align-items-around'>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              quia dicta voluptatum ipsum corrupti repudiandae inventore
              perspiciatis. Vel, laudantium obcaecati. Hic soluta saepe quisquam
              non doloribus facere inventore quasi? Sunt?Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Itaque quia dicta voluptatum
              ipsum corrupti repudiandae inventore perspiciatis. Vel, laudantium                            
            </div>            
          </div>
        </Carousel>

        <div className='d-flex  justify-content-end align-items-center' >
          <div>0{currentSlide}</div>          
          <div className='carouselBar mx-3 d-flex align-items-center'>
            <span className='carouselBar-span' style={{background:'linear-gradient(45deg, blue, red)', width:`${progress}%`, height:'3px'}}></span>
            <span className='carouselBar-span' style={{backgroundColor:'gray', width:`${100 - progress}%`, height:'1px'}}></span>
          </div>
          <div>0{totalSlides}</div>
        </div>
      </div>
    </div>
  );
};

export default WorkCarousel;
