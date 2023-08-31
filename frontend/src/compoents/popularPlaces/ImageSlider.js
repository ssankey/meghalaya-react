import React from 'react';
import { Slide } from 'react-slideshow-image';
import { Link } from 'react-router-dom';
import './styles.css';

import shillong from '../../assets/images/iftekhar-nibir-XKCFg-wJx8M-unsplash.webp';
import sohra from '../../assets/images/image15.webp';
import dawki from '../../assets/images/image38.webp';
import Shnongpdeng from '../../assets/images/image31.webp';
import nongriat from '../../assets/images/image23.webp';
import jainitia from '../../assets/images/shillongImage.webp';
import assam from '../../assets/images/ashwina-kumar-MZS-QFeeVPc-unsplash.webp';
import Mawlyngbna from '../../assets/images/image29.webp';
import Mawsynram from '../../assets/images/mawsy2.webp';
import garo from '../../assets/images/garo-hills.webp';

const ImageSlider = () => {
  const responsiveSettings = [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ];

  const destinations = [
    { name: 'Jaintia Hills', imgSrc: shillong, to: '/Jaintia%20hills' },
    { name: 'Sohra', imgSrc: sohra, to: '/Sohra' },
    { name: 'Dawki (Umngot River)', imgSrc: dawki, to: '/Jaintia%20hills' },
    { name: 'Shnongpdeng', imgSrc: Shnongpdeng, to: '/Jaintia%20hills' },
    { name: 'Shillong', imgSrc: jainitia, to: '/Shillong' },
    { name: 'Assam', imgSrc: assam, to: '/Assam' },
    { name: 'Mawlyngbna', imgSrc: Mawlyngbna, to: '/Shillong' },
    { name: 'Mawsynram', imgSrc: Mawsynram, to: '/South%20West%20Khasi%20Hills' },
    { name: 'Garo Hills', imgSrc: garo, to: '/Garo%20Hills' },
    // Add other destinations in the same format
  ];

  return (
    <div>
      <Slide indicators={true} infinite responsive={responsiveSettings}>
        {destinations.map((destination, index) => (
          <Link to={destination.to} key={index}>
            <div className="each-slide-effect text-center sm:mx-10 relative">
              {destination.imgSrc && (
                <img
                  src={destination.imgSrc}
                  alt="Background"
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                  }}
                  loading="lazy"
                />
              )}
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className='text-5xl popularDestinations font-extrabold text-white rounded-lg p-1 relative top-36'>
                <h1>{destination.name}</h1>
              </div>
            </div>
          </Link>
        ))}
      </Slide>
    </div>
  );
}

export default ImageSlider;
