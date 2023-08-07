import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
const FeaturedDestination = (props) => {
    const sublocations = props.sublocations;
    const responsiveSettings = [
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ];
  return (
      <div >
          <Slide indicators={true} infinite responsive={responsiveSettings}>
            {sublocations.map((subLocation) => (
                <div className="each-slide-effect-2 h-[650px] text-center bg-white border-2 sm:mx-24 sm:w-[450px] w-full">
                    <div className=' w-full h-full' style={{ 'backgroundImage': `url(${subLocation.images})`}}>
                    </div>
                    <section className=' flex flex-col  my-0 p-10 justify-start text-center'>
                        <h1 className='text-2xl text-black font-black'>{subLocation.name}</h1>
                        <p className='text-gray-600 pt-10' >{subLocation.description}</p>
                    </section>
                </div>
                ))}
          </Slide>
      </div>
  )
}

export default FeaturedDestination