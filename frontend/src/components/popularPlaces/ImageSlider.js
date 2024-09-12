import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="max-w-full sm:max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 py-8 sm:py-16">
      <h2 className="text-2xl sm:text-3xl font-serif text-center text-gray-800 mb-6 sm:mb-12 px-4">
        Popular Destinations
      </h2>
      <Slider {...settings} className="slide-container">
        {destinations.map((destination, index) => (
          <div key={index} className="px-0 sm:px-4">
            <Link to={destination.to} className="block">
              <div className="relative overflow-hidden sm:rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
                <img
                  src={destination.imgSrc}
                  alt={destination.name}
                  className="w-full h-64 sm:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent transition-opacity duration-300 hover:bg-opacity-30" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl sm:text-2xl font-serif text-white tracking-wide">
                    {destination.name}
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;