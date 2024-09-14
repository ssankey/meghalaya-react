import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import LazyImage from '../LazyImage';
const LazySlider = lazy(() => import('react-slick'));
const LazyImage = lazy(() => import('../LazyImage')); // Assume we create this component

const destinations = [
  { name: 'Jaintia Hills', imgSrc: '/assets/images/iftekhar-nibir-XKCFg-wJx8M-unsplash.webp', to: '/Jaintia%20hills' },
  { name: 'Sohra', imgSrc: '/assets/images/image15.webp', to: '/Sohra' },
  { name: 'Dawki (Umngot River)', imgSrc: '/assets/images/image38.webp', to: '/Jaintia%20hills' },
  { name: 'Shnongpdeng', imgSrc: '/assets/images/image31.webp', to: '/Jaintia%20hills' },
  { name: 'Shillong', imgSrc: '/assets/images/shillongImage.webp', to: '/Shillong' },
  { name: 'Assam', imgSrc: '/assets/images/ashwina-kumar-MZS-QFeeVPc-unsplash.webp', to: '/Assam' },
  { name: 'Mawlyngbna', imgSrc: '/assets/images/image29.webp', to: '/Shillong' },
  { name: 'Mawsynram', imgSrc: '/assets/images/mawsy2.webp', to: '/South%20West%20Khasi%20Hills' },
  { name: 'Garo Hills', imgSrc: '/assets/images/garo-hills.webp', to: '/Garo%20Hills' },
];

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
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
    <div className="max-w-full sm:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      <h2 className="text-2xl sm:text-3xl font-serif text-center text-gray-800 mb-6 sm:mb-12">
        Popular Destinations
      </h2>
      <Suspense fallback={<div className="text-center">Loading destinations...</div>}>
        <LazySlider {...settings} className="slide-container">
          {destinations.map((destination, index) => (
            <div key={index} className="px-2 sm:px-4">
              <Link to={destination.to} className="block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <div className="relative overflow-hidden sm:rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
                  <LazyImage
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
        </LazySlider>
      </Suspense>
    </div>
  );
};

export default ImageSlider;