import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import './WorkCarousel.css';
import laptop from '../../images/laptop.png';
import vlabGif from '../../images/vlab.gif';
import { projects } from '../../Data/WorkData';

const WorkCarousel = () => {

  const [currentSlide, setCurrentSlide] = useState(1);
  const [totalSlides, setTotalSlides] = useState(projects.length);
  const [progress, setProgress] = useState((1 / totalSlides) * 100);
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

  const arrowStyles = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(70%)',
    // height: 50,
    // width: 80,
    cursor: 'pointer',
  };

  const rightArrow = (onClickHandler, label) => {
    return (
      <div
        style={{ ...arrowStyles, right: '0' }}
        onClick={onClickHandler}
        title={label}
      >
        <i className='fas fa-long-arrow-alt-right fa-5x arrow-icon'></i>
      </div>
    );
  };

  const leftArrow = (onClickHandler, label) => {
    return (
      <div
        style={{ ...arrowStyles, left: '30px' }}
        onClick={onClickHandler}
        title={label}
      >
        <i className='fas fa-long-arrow-alt-left fa-5x arrow-icon'></i>
      </div>
    );
  };

  const slideChange = (current) => {
    const value = Number((current + 1) / totalSlides) * 100;
    setCurrentSlide(current + 1);
    setProgress(value);
  };

  const getGradient = (leftCol, rightCol) => {
    const gradientStyle = {
      background: `-webkit-linear-gradient(to left, ${leftCol}, ${rightCol})`,
      background: `linear-gradient(to left, ${leftCol}, ${rightCol})`,
    };
    return gradientStyle;
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
          {projects.map((project) => {
            return (
              <div
                key={project.id}
                id={project.id}
                className='carouselDiv p-5 d-flex justify-content-between'
              >
                <div className=''>
                  <div
                    id={`${project.shape}`}
                    className='shape'
                    style={getGradient(project.leftColor, project.rightColor)}
                  ></div>
                  <div className='projectDetails'>
                    <h1 className='projectDetails-title'>{project.title}</h1>
                    <h3 className='projectDetails-type'>
                      {project.type},{' '}
                      <span className='projectDetails-year'>
                        {project.year}
                      </span>
                    </h3>
                    <h6 className='projectDetails-link'>View Project</h6>
                  </div>
                  <div className='device'>
                    <img
                      src={laptop}
                      className='laptopPng'
                      alt=''
                      id='laptop'
                    />
                    <img
                      id='workGif'
                      className='workGif'
                      src={vlabGif}
                      alt=''
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>

        <div className='d-flex  justify-content-end align-items-center'>
          <div>0{currentSlide}</div>
          <div className='carouselBar mx-3 d-flex align-items-center'>
            <span
              className='carouselBar-span'
              style={{
                background: 'linear-gradient(45deg, blue, red)',
                width: `${progress}%`,
                height: '3px',
              }}
            ></span>
            <span
              className='carouselBar-span'
              style={{
                backgroundColor: 'gray',
                width: `${100 - progress}%`,
                height: '1px',
              }}
            ></span>
          </div>
          <div>0{totalSlides}</div>
        </div>
      </div>
    </div>
  );
};

export default WorkCarousel;
