import React, { useEffect, useState } from 'react'
import { TourPackages } from '../assets/data/data'
import { useParams } from 'react-router'
import { BiTimeFive } from 'react-icons/bi'
import { CiLocationOn } from 'react-icons/ci'
import Form from '../compoents/Form/Form';
import { Fade } from 'react-slideshow-image'
import MostSellingPackage from '../compoents/PackageSlider/MostSellingPackage'
import { Helmet } from 'react-helmet';

const TourDetails = () => {
  // console.log('URL',packageName);
  // const [packageDetails, setPackageDetails] = useState(null)
  const [activeSection, setActiveSection] = useState(`section0`);
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };
  const toggleSection = (section) => {
    setActiveSection((prevSection) => (prevSection === section ? null : section));
  };
  const packageName = useParams();

  const selectedPackage = TourPackages.tourPackages.find(
    (pkg) => pkg.packageName === packageName.packageDetails
  );

  return (
    <div>
      <Helmet>
        <title>{selectedPackage.Title} | Meghalaya Into The Mountains</title>
        <meta
          name="description"
          content={`Explore the details of ${selectedPackage.Title} package offered by Lets See Tour and Travels. Discover the itinerary, inclusions, exclusions, and more.`}
        />
      </Helmet>
      <div className='flex justify-center items-center uppercase ' style={{ position: 'relative', width: '100%', height: '560px' }}>
        <img
          src={selectedPackage.image}
          alt="Background"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            // backgroundPosition: 'center',
            // backgroundSize: 'cover',
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
        <h1 className='font-black z-20 text-center' style={{ color: 'white', fontSize: '36px' }}>
          {selectedPackage.Title}
        </h1>
      </div>
      <div className='flex sm:flex-row flex-col'>
        <div className=' w-full sm:w-2/3 sm:p-20'>
          <div className='px-5 py-10 bg-white rounded-2xl drop-shadow-xl'>
            <h1 className='sm:text-3xl text-2xl  font-black '>{selectedPackage.Title} Package</h1>
            <div className='flex flex-row gap-10 pt-5 items-center'>
              <div className='flex items-center gap-2'>
                <div className=' text-xl text-gray-400'><BiTimeFive /></div>
                <p className='text-black'>{selectedPackage.duration}</p>
              </div>
              <div className='flex items-center gap-2'>
                <div className=' text-xl text-gray-400'><CiLocationOn /></div>
                <p className='text-black'>Meghalaya</p>
              </div>
            </div>
          </div>
          <div className='mt-10 px-5 py-10 rounded-2xl  drop-shadow-xl bg-white'>
            <h2 className='text-2xl font-black'>{selectedPackage.Title} Overview</h2>
            <div className='py-8'>
              <h3 className='text-gray-500 underline font-semibold'>About the Destination</h3>
              {showFullContent ? (
                <>
                  <p className='py-5'>{selectedPackage.description}</p>
                  <h3 className='text-gray-500 underline font-semibold'>Inclusion:</h3>
                  <ul className='list-disc list-inside'>
                    {selectedPackage.inclusion.map((item, index) => (
                      <li key={index} className='py-2'>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <h3 className='text-gray-500 underline font-semibold'>Exclusion:</h3>
                  <ul className='list-disc list-inside'>
                    {selectedPackage.exclusion.map((item, index) => (
                      <li key={index} className='py-2'>
                        {item}
                      </li>
                    ))}
                  </ul>

                </>
              ) : (
                <p className='py-5 line-clamp-3'>{selectedPackage.description}</p>
              )}
              <button
                onClick={toggleContent}
                className='text-green-900 font-semibold'
              >
                {showFullContent ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </div>
          <div className='mt-10 px-5 py-10 rounded-2xl  drop-shadow-xl bg-white'>
            <h2 className='text-2xl font-black pb-10'>{selectedPackage.duration} Days Magical {selectedPackage.Title} Itinerary</h2>
            <div className="sm:w-full mx-auto">
              {selectedPackage.itinerary.map((day, index) => (
                <div
                  key={index}
                  className={`border mb-2 rounded-lg hover:bg-gray-100 hover:ease-linear  ${activeSection === `section${index}` ? 'bg-gray-100' : 'bg-white'
                    }`}
                >
                  <div
                    className="p-2 cursor-pointer"
                    onClick={() => toggleSection(`section${index}`)}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-[14px] flex justify-center items-center font-extrabold gap-5"> <span className='border-2 flex-1 font-extrabold p-2 rounded-lg'>Day {index + 1}</span>{day.title}</h3>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-6 w-6 transition-transform ${activeSection === `section${index}` ? 'transform rotate-180' : ''
                          }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                  {activeSection === `section${index}` && (
                    <div className={`px-4 pb-4 transition-max-height ${activeSection === `section${index}` ? 'max-h-96' : 'max-h-0'} overflow-hidden`}>
                      <p>
                        {day.description}
                      </p>
                      <div className='w-36 mt-5 rounded-xl'>
                        <img className='w-full h-auto' alt='img' src={day.image} />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <h1 className='text-gray-500 text-sm font-black italic mt-5'>* Note: This itinerary is customizable according to your preferences and the duration of your trip.</h1>
          </div>
          <div className='mt-10 px-5 py-10 rounded-2xl drop-shadow-xl bg-white'>
            <h2 className='text-2xl font-black'>Policies</h2>
            <h3 className='text-gray-500 underline font-semibold mt-5'>Booking and Reservation Policy</h3>
            <ul className='list-disc list-inside'>
              <li>To confirm a booking, a minimum advance payment of 30% is required.</li>
              <li>The remaining payment must be made one day before the trip starts.</li>
              <li>Reservations are subject to availability, and priority will be given on a first-come, first-served basis.</li>
            </ul>

            <h3 className='text-gray-500 underline font-semibold mt-5'>Cancellation and Refund Policy</h3>
            <ul className='list-disc list-inside'>
              <li>Cancellations made 15 days or more prior to the scheduled departure date will receive a refund, minus any transaction fees.</li>
              <li>Cancellations made between 7 and 14 days before the tour will be eligible for a 30% refund.</li>
              <li>Cancellations made within 7 days of the tour departure date will not be eligible for any refund.</li>
              <li>Refunds will be processed within 14 days after receiving a cancellation request.</li>
            </ul>

            <h3 className='text-gray-500 underline font-semibold mt-5'>Changes to the Itinerary</h3>
            <p>Any changes to the itinerary requested by the customer must be communicated at least 7 days in advance. Changes are subject to availability and may incur additional charges.</p>
            <p>The tour operator reserves the right to make any necessary changes to the itinerary due to unforeseen circumstances, such as weather conditions or local restrictions.</p>

            <h3 className='text-gray-500 underline font-semibold mt-5'>Health and Safety Policy</h3>
            <ul className='list-disc list-inside'>
              <li>All participants must comply with local laws and regulations, as well as follow the instructions provided by the tour guide.</li>
              <li>Participants are responsible for their personal safety and well-being during the tour.</li>
              <li>Any pre-existing medical conditions or dietary requirements must be communicated in advance to ensure necessary arrangements can be made.</li>
            </ul>

            <h3 className='text-gray-500 underline font-semibold mt-5'>Liability Policy</h3>
            <p>The tour operator and its affiliates shall not be liable for any loss, injury, damage, delay, or expense incurred during the tour. Participants are advised to have travel insurance to cover any unforeseen circumstances. The tour operator shall not be responsible for any loss or damage to personal belongings during the tour.</p>

            <h3 className='text-gray-500 underline font-semibold mt-5'>Conduct Policy</h3>
            <p>Participants are expected to behave in a respectful and responsible manner towards the local culture, environment, and fellow travelers. Any participant found to be engaging in unethical, illegal, or offensive behavior may be asked to leave the tour, with no refund provided.</p>

            <h3 className='text-gray-500 underline font-semibold mt-5'>Force Majeure</h3>
            <p>The tour operator shall not be held liable for any disruption, delay, or cancellation of the tour due to force majeure events such as acts of nature, civil unrest, or government regulations.</p>

            <p className='text-gray-500 text-sm font-black italic mt-5'>Please note that these policies are subject to change and may vary among different tour operators. It is recommended to carefully read and understand the specific policies, terms, and conditions.</p>
          </div>

        </div>
        <div className='mt-20 md:w-1/3 w-full'>
          <Form />
        </div>
      </div>
      <section className='bg-[#414341] bg-opacity-5'>
        <div className='flex flex-col my-20'>
          <h1 className='text-[30px] sm:text-[48px] text-center font-black mx-auto mb-10'>Explore Our Most Selling Packages </h1>
          <MostSellingPackage />
        </div>
      </section>
    </div>
  )
}

export default TourDetails