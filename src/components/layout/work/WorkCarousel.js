import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import { projects } from '../../Data/WorkData';
import './WorkCarousel.css';
import laptop from '../../images/laptop.png';
import vlabGif from '../../images/vlab.gif';
import WorkModal from './workmodal/WorkModal';

const WorkCarousel = () => {

  const [currentSlide, setCurrentSlide] = useState(1);
  const [totalSlides, setTotalSlides] = useState(projects.length);
  const [progress, setProgress] = useState((1 / totalSlides) * 100);
  const [showModal, setShowModal] = useState(false);
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
    // zIndex: 2,
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
        style={{ ...arrowStyles, left: '30px', zIndex: 1 }}
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

  const linkRedirect = (link) => {
    window.open(link, '_blank');
  }

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
                    {project.link &&
                      <h4 className='projectDetails-link' onClick={() => linkRedirect(project.link)}>View Project</h4>}
                    {project.repo &&
                      <h5 className='projectDetails-link' onClick={() => linkRedirect(project.repo)}>Watch Code</h5>}
                  </div>
                  <div className='device'>
                    <img
                      src={laptop}
                      className='laptopPng'
                      alt=''
                      id='laptop'
                    />
                    <video id='workGif' autoplay='true' controls className='bg-dark'
                      preload="auto" src="https://awevideo.s3.amazonaws.com/video-4152421-1a4327c158f8e4feaa2ac5ad902f0ec7.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20210616%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20210616T150121Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=6b4362dfce28ef6b135792ea6d22f424b2cbdf0081bdb069825cc31d358294f8"></video>
                    {/* <img
                      id='workGif'
                      className='workGif'
                      src={vlabGif}
                      alt=''
                    /> */}
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>

        <WorkModal showModal={showModal} setShowModal={setShowModal} />

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
