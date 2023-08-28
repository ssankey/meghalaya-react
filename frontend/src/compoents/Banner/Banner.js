import React, { useState } from 'react';
import { Fade } from 'react-slideshow-image';
import './Banner.css';
import 'react-slideshow-image/dist/styles.css';
import image1 from '../../assets/images/image23.jpg';
import image2 from '../../assets/images/chirayu-sharma-KAXnXl_S6K4-unsplash.jpg';
import image3 from '../../assets/images/umiam-lake.jpg';
import image4 from '../../assets/images/Mawlynnong-The-cleanest-city-in-Asia-soulveda.jpg';
import image5 from '../../assets/images/Laitlum_Canyons.jpg';
import image6 from '../../assets/images/image38.jpg';
import image7 from '../../assets/images/image5.jpg';
import image8 from '../../assets/images/mawsy.jpeg';
import image9 from '../../assets/images/garoHillls.jpg';
import image10 from '../../assets/images/seven-sisters.jpg';
import image11 from '../../assets/images/siju-cave.jpg';
import image12 from '../../assets/images/image5.jpg';
import image13 from '../../assets/images/nonkrekad.jpg';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideImages = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13
  ];

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideImages.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideImages.length - 1 : currentSlide - 1);
  };

  return (
    <div className='relative'>
      <Fade duration={2000}>
        {slideImages.map((image, index) => (
          <div
            key={index}
            className={`each-slide-effects-ban ${index === currentSlide ? 'active' : ''}`}
          >
            <div
              className='bannerImage'
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%'
              }}
            >
              <div className='overlay'></div>
              <span className='text-[40px] text-white z-50 sm:text-[65px]'>
                {index === 0 && 'Double Decker Living Root Bridge'}
                {index === 1 && 'Nohkalikai Waterfalls'}
                {index === 2 && 'Umiam Lake'}
                {index === 3 && 'Mawlynnong Village'}
                {index === 4 && 'Laitlum Canyon'}
                {index === 5 && 'Dawki - Umngot River'}
                {index === 6 && 'Sohra'}
                {index === 7 && 'Mawsynram'}
                {index === 8 && 'Garo Hills'}
                {index === 9 && 'Seven Sisters Falls'}
                {index === 10 && 'Siju Cave'}
                {index === 11 && 'Balpakram National Park'}
                {index === 12 && 'Nokrek National Park'}
              </span>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Banner;
