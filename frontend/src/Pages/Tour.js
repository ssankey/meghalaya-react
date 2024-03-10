import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Fade, Slide } from 'react-slideshow-image';
import './page.css'
import MostSellingPackage from '../compoents/PackageSlider/MostSellingPackage';
import axios from 'axios';
import Form from '../compoents/Form/Form';
import { Helmet } from 'react-helmet';
const Tour = () => {
  const [selectedMainLocationData, setSelectedMainLocationData] = useState(null);
  const { locationName } = useParams();
  const token = 'ece9c3aefa07ede929f0cecbc605e5ee18a300a59ad1cf54a8b5daf835585799fb39b403d217787c9d546de1354d007642b2739617d314699b0efeda93938fe62e1c42ad4d1f9582af5219b508512b8c7b332afa8ec2a9a01035fd5ba12887bc068f764cc72829f1ebc3ef39e1ff7fc779629f641b850e3b1b42925a6ecf46a1';

  useEffect(() => {
    axios.get('https://meghalaya.onrender.com/api/location-datas?populate=deep', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        const locationData = response.data.data;
        let selectedLocation = null;
        locationData.forEach(location => {
          if (location.attributes.mainLocation === locationName) {
            selectedLocation = location.attributes;
          }
        });

        setSelectedMainLocationData(selectedLocation);

      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [locationName, token]);



  // Use selectedMainLocationData as needed

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
  return (
    <div>
      {selectedMainLocationData && (
        <>
          <Helmet>
            <title> {selectedMainLocationData.mainLocation} Tour | Meghalaya Into The Mountains</title>
            <meta
              name="description"
              content={`Explore the beauty of ${selectedMainLocationData.mainLocation}. Discover places to visit, things to do, and more with Lets See Tour and Travels.`}
            />
          </Helmet>
          <section className='banner'>

            <div className='flex justify-center items-center' style={{ position: 'relative', width: '100%', height: '700px' }}>
              <img
                src={selectedMainLocationData.image.data[0].attributes.url}
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
                {selectedMainLocationData.mainLocation}
              </h1>
            </div>

          </section>
          <section className='flex sm:flex-row flex-col'>
            <div className=" sm:w-2/3 sm:px-[2rem] py-5 mt-16 flex flex-col " >
              <div className='px-5 py-10 bg-white rounded-2xl drop-shadow-xl'>
                <h1 className='text-[45px]'>Explore The Beauty Of {selectedMainLocationData.mainLocation}</h1>
                <p className="md:text-lg">{selectedMainLocationData.description}  </p>
              </div>
              <div className="text-left px-5 py-10 bg-white rounded-2xl drop-shadow-xl mt-5">
                <h2 className="text-2xl font-semibold mb-2">Facts about {selectedMainLocationData.mainLocation}</h2>
                <ul>
                  {selectedMainLocationData.locationFacts.map(fact => (
                    <li key={fact.id}>
                      <ul className="list-disc list-inside">
                        <li>{fact.fact1}</li>
                        <li>{fact.fact2}</li>
                        <li>{fact.fact3}</li>
                        <li>{fact.fact4}</li>
                        <li>{fact.fact5}</li>
                      </ul>
                    </li>
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

          <div className='my-10 relative' style={{backgroundImage: `url('${selectedMainLocationData.image.data[0].attributes.url}')`, backgroundPosition: 'center center', backgroundSize: 'cover'}}>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div> {/* Black Overlay */}
            <h1 className='text-center p-10 text-white font-black text-4xl relative z-10'>What's in it for Travellers?</h1>

            <div className='flex flex-col sm:flex-row w-full gap-40 justify-around sm:px-[12rem] p-2  sm:p-14 '>
              <div className=' sm:w-1/2 w-full bg-[#80b328]  rounded-lg relative z-10 p-5'>
                <h1 className='text-2xl text-white text-center font-extrabold  pb-3'>Places To Visit</h1>
                <Slide infinite responsive={responsiveSettings}>
                  {selectedMainLocationData.sublocations.map((subLocation, index) => (
                    <div key={index} className="each-slide-effect-2 text-center">
                      <div className='rounded-lg' style={{ 'backgroundImage': `url(${subLocation.image.data[0].attributes.url})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                      </div>
                      <section className='py-5'>
                        <h1 className='text-2xl text-white font-bold'>{subLocation.name}</h1>
                        <p className='text-[1.1rem] text-white font-semibold py-5'>{subLocation.sublocationdescription}</p>
                      </section>
                    </div>
                  ))}

                </Slide>
              </div>
              <div className=' sm:w-1/2 bg-green-900 relative z-10  rounded-lg p-5'>
                <h1 className='text-2xl text-white font-extrabold pb-3 text-center'>Things To Do</h1>
                <Slide infinite responsive={responsiveSettings}>
                  {selectedMainLocationData.ThingsToDo.map((todo, index) => (
                    <div className="each-slide-effect-2 text-center" key={index}>
                      <div className='rounded-lg ' style={{ 'backgroundImage': `url(${todo.image.data[0].attributes.url})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                  </div>
                      <section className='py-5'>
                        <h1 className='text-2xl text-white font-bold'>{todo.name}</h1>
                        <p className='text-[1.1rem] text-white font-semibold py-5'>{todo.description}</p>
                      </section>
                    </div>
                  ))}
                </Slide>
              </div>
            </div>
          </div>

          <section>
            {/* <h1 className='text-center p-2 sm:p-10 text-4xl'>Featured {selectedMainLocationData.name} Tour</h1>
        <FeaturedDestination {...selectedMainLocationData} /> */}
          </section>

          <section className='bg-[#414341] bg-opacity-5'>
            <div className='flex flex-col my-20'>
              <h1 className='text-[30px] sm:text-[48px] text-center font-black mx-auto mb-10'>Explore Our Most Selling Packages </h1>
              <MostSellingPackage />
            </div>
          </section>
        </>
      )}
    </div>
  )
}

export default Tour