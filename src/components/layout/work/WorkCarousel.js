import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import './WorkCarousel.css'

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
        // centerMode: true,
    }
    // onchange as a function for callback
  return (
    <div>
      <div>
        <Carousel className='' {...carouselProps}>
          <div className='carouselDiv'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quia dicta voluptatum ipsum corrupti repudiandae inventore perspiciatis. Vel, laudantium obcaecati. Hic soluta saepe quisquam non doloribus facere inventore quasi? Sunt?</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quia dicta voluptatum ipsum corrupti repudiandae inventore perspiciatis. Vel, laudantium obcaecati. Hic soluta saepe quisquam non doloribus facere inventore quasi? Sunt?</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quia dicta voluptatum ipsum corrupti repudiandae inventore perspiciatis. Vel, laudantium obcaecati. Hic soluta saepe quisquam non doloribus facere inventore quasi? Sunt?</div>          
        </Carousel>
      </div>
    </div>
  );
};

export default WorkCarousel;
