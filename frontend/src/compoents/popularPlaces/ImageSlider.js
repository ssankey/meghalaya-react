import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css';
import shillong from '../../assets/images/iftekhar-nibir-XKCFg-wJx8M-unsplash.webp'
import sohra from '../../assets/images/image15.jpg'
import dawki from '../../assets/images/image38.jpg'
import Shnongpdeng from '../../assets/images/image31.jpg'
import nongriat from '../../assets/images/image23.jpg';
import jainitia from '../../assets/images/shillongImage.jpg'
import assam from '../../assets/images/ashwina-kumar-MZS-QFeeVPc-unsplash.webp'
import Mawlyngbna from '../../assets/images/image29.jpg'
import Mawsynram from '../../assets/images/mawsy2.jpg'
import garo from '../../assets/images/garo-hills.jpg'
import { Link } from 'react-router-dom'

import './styles.css'
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


  return (
    <div>
      <Slide indicators={true} responsive={responsiveSettings}>
        <Link to={'/Jaintia%20hills'}>
          <div className="each-slide-effect sm:mx-10 relative">
            <div style={{ 'backgroundImage': `url(${shillong})`, backgroundSize: 'cover', backgroundPosition: 'center', objectFit: 'cover' }}>
              <div className="absolute inset-0 bg-black opacity-40"></div>

              <div className='text-5xl popularDestinations  font-extrabold text-white  rounded-lg p-1 relative top-36'>
                <h1>Jaintia Hills</h1>
              </div>
            </div>
          </div>
        </Link>
        <Link to={'/Sohra'}>
          <div className="each-slide-effect sm:mx-10 relative">
            <div style={{ 'backgroundImage': `url(${sohra})`, backgroundSize: 'cover', backgroundPosition: 'center', objectFit: 'cover' }}>
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className='text-5xl popularDestinations  font-extrabold text-white  rounded-lg p-1 relative top-36   '>
                <h1>Sohra</h1>
              </div>
            </div>
          </div>
        </Link>
        <Link to={'/Jaintia%20hills'}>
          <div className="each-slide-effect sm:mx-10 relative">
            <div style={{ 'backgroundImage': `url(${dawki})`, backgroundSize: 'cover', backgroundPosition: 'center', objectFit: 'cover' }}>
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className='text-5xl  popularDestinations font-extrabold text-white  rounded-lg p-1 relative top-36   '>
                <h1>Dawki (Umngot River)</h1>
              </div>
            </div>
          </div>
        </Link>
        <Link to={'/Jaintia%20hills'}>
          <div className="each-slide-effect sm:mx-10 relative">
            <div style={{ 'backgroundImage': `url(${Shnongpdeng})`, backgroundSize: 'cover', backgroundPosition: 'center', objectFit: 'cover' }}>
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className='text-5xl popularDestinations  font-extrabold text-white  rounded-lg p-1 relative top-36  '>
                <h1>Shnongpdeng</h1>
              </div>
            </div>
          </div>
        </Link>
        <Link to={'/Sohra'}>
          <div className="each-slide-effect sm:mx-10 relative">
            <div style={{ 'backgroundImage': `url(${nongriat})`, backgroundSize: 'cover', backgroundPosition: 'center', objectFit: 'cover' }}>
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className='text-5xl popularDestinations  font-extrabold text-white  rounded-lg p-1 relative top-36   '>
                <h1>Nongriat</h1>
              </div>
            </div>
          </div>
        </Link>
        <Link to={'/Shillong'}>

          <div className="each-slide-effect sm:mx-10 relative">
            <div style={{ 'backgroundImage': `url(${jainitia})`, backgroundSize: 'cover', backgroundPosition: 'center', objectFit: 'cover' }}>
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className='text-5xl popularDestinations  font-extrabold text-white  rounded-lg p-1 relative top-36 '>
                <h1>Shillong</h1>
              </div>
            </div>

          </div>
        </Link>
        <Link to={'/Assam'}>

          <div className="each-slide-effect sm:mx-10 relative">
            <div style={{ 'backgroundImage': `url(${assam})`, backgroundSize: 'cover', backgroundPosition: 'center', objectFit: 'cover' }}>
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className='text-5xl  popularDestinations font-extrabold text-white  rounded-lg p-1 relative top-36   '>
                <h1>Assam</h1>
              </div>
            </div>

          </div>
        </Link>
        <Link to={'/Shillong'}>

          <div className="each-slide-effect sm:mx-10 relative">
            <div style={{ 'backgroundImage': `url(${Mawlyngbna})`, backgroundSize: 'cover', backgroundPosition: 'center', objectFit: 'cover' }}>
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className='text-5xl popularDestinations  font-extrabold text-white  rounded-lg p-1 relative top-36   '>
                <h1>Mawlyngbna</h1>
              </div>
            </div>

          </div>
        </Link>
        <Link to={'/South%20West%20Khasi%20Hills'}>
          <div className="each-slide-effect sm:mx-10 relative">
            <div style={{ 'backgroundImage': `url(${Mawsynram})`, backgroundSize: 'cover', backgroundPosition: 'center', objectFit: 'cover' }}>
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className='text-5xl  popularDestinations font-extrabold text-white  rounded-lg p-1 relative top-36   '>
                <h1>Mawsynram</h1>
              </div>
            </div>
          </div>
        </Link>
        <Link to={'/Garo%20Hills'}>
          <div className="each-slide-effect sm:mx-10 relative">
            <div style={{ 'backgroundImage': `url(${garo})`, backgroundSize: 'cover', backgroundPosition: 'center', objectFit: 'cover' }}>
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className='text-5xl  popularDestinations font-extrabold text-white  rounded-lg p-1 relative top-36   '>
                <h1>Garo Hills</h1>
              </div>
            </div>
          </div>
        </Link>
      </Slide>
    </div>
  )
}

export default ImageSlider