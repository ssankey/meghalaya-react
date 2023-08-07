import React from 'react'
import { useParams } from 'react-router'
import { locationData } from '../assets/data/data';
import image1 from '../assets/images/image12.jpg'
import { Fade, Slide } from 'react-slideshow-image';
import FeaturedDestination from '../compoents/FeaturedDestinations/FeaturedDestination';
import './page.css'
import MostSellingPackage from '../compoents/PackageSlider/MostSellingPackage';
import Form from '../compoents/Form/Form';
const Tour = () => {
  const { mainLocation } = useParams();
  const selectedMainLocationData = locationData.mainLocations.find(
    (location) => location.name === mainLocation
  );

  const responsiveSettings = [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ];

  console.log(selectedMainLocationData.sublocations.description)


  return (
    <div>

      <section className='banner'>
        <div className='flex justify-center items-center' style={{ position: 'relative', width: '100%', height: '700px' }}>
          <img
            src={selectedMainLocationData.image}
            alt="Background"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              position: 'absolute',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              top: 0,
              left: 0,
              zIndex: -1,
            }}
          /><div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity (0.5 in this example) for the black shade
            }}
          ></div>
          <h1 className='font-black z-20 uppercase' style={{ color: 'white', fontSize: '36px' }}>
            {selectedMainLocationData.name}
          </h1>
        </div>

      </section>
      <section className='flex sm:flex-row flex-col'>
        <div className=" sm:w-2/3 sm:px-[2rem] py-5 mt-16 flex flex-col " >
          <div className='px-5 py-10 bg-white rounded-2xl drop-shadow-xl'>
          <h1 className='text-[45px]'>Explore The Beauty Of {selectedMainLocationData.name}</h1>
          <p className="md:text-lg">{selectedMainLocationData.description}  </p>
          </div>
          <div className="text-left px-5 py-10 bg-white rounded-2xl drop-shadow-xl mt-5">
            <h2 className="text-2xl font-semibold mb-2">Facts about {selectedMainLocationData.name}</h2>
            <ul className="list-disc list-inside">
              {selectedMainLocationData.facts.map((fact, index) => (
                <li key={index} className="mb-2 md:text-lg">{fact}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className='mt-20 md:w-1/3 w-full'>
          <Form />
        </div>
      </section>

      <section>
        {/* package details */}
      </section>

      <div className='my-10 relative' style={{ backgroundImage: `url(${selectedMainLocationData.image})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div> {/* Black Overlay */}
        <h1 className='text-center p-10 text-white font-black text-4xl relative z-10'>What's in it for Travellers?</h1>

        <div className='flex flex-col sm:flex-row w-full gap-40 justify-around sm:px-[12rem] p-2  sm:p-14 '>
          <div className=' sm:w-1/2 w-full bg-[#80b328]  rounded-lg relative z-10 p-5'>
            <h1 className='text-2xl text-center font-extrabold  pb-3'>Places To Visit</h1>
            <Slide infinite responsive={responsiveSettings}>
              {selectedMainLocationData.sublocations.map((subLocation) => (
                <div className="each-slide-effect-2 text-center " >
                  <div className='rounded-lg' style={{ 'backgroundImage': `url(${subLocation.images})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                  </div>
                  <section className='py-5'>
                    <h1 className='text-2xl text-white  font-bold'>{subLocation.name}</h1>
                    <p className='text-[1.1rem] font-semibold py-5'>{subLocation.description}</p>
                  </section>
                </div>
              ))}
            </Slide>
          </div>
          <div className=' sm:w-1/2 bg-green-900 relative z-10  rounded-lg p-5'>
            <h1 className='text-2xl font-extrabold pb-3 text-center'>Things To Do</h1>
            <Slide infinite responsive={responsiveSettings}>
              {selectedMainLocationData.thingsToDo.map((todo, index) => (
                <div className="each-slide-effect-2 text-center"  key={index}>
                  <div className='rounded-lg ' style={{ 'backgroundImage': `url(${todo.image})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                  </div>
                  <section className='py-5'>
                    <h1 className='text-2xl text-white font-bold'>{todo.name}</h1>
                    <p className='text-[1.1rem] font-semibold py-5'>{todo.description}</p>
                  </section>
                </div>
              ))}
            </Slide>
          </div>
        </div>
      </div>

      <section>
        <h1 className='text-center p-2 sm:p-10 text-4xl'>Featured {selectedMainLocationData.name} Tour</h1>
        <FeaturedDestination {...selectedMainLocationData} />
      </section>

      <section className='bg-[#414341] bg-opacity-5'>
        <div className='flex flex-col my-20'>
            <h1 className='text-[30px] sm:text-[48px] text-center font-black mx-auto mb-10'>Explore Our Most Selling Packages </h1>
          <MostSellingPackage />
        </div>
      </section>

    </div>
  )
}

export default Tour