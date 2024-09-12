import React from 'react'
import Banner from '../components/Banner/Banner'
import image1 from '../assets/images/image14.webp'
import image2 from '../assets/images/image16.webp'
import image3 from '../assets/images/image34.webp'
import ImageSlider from '../components/popularPlaces/ImageSlider'
import hiking from '../assets/images/hiking.webp'
import adventours from '../assets/images/adventure.webp'
import tourGuide from '../assets/images/tour-guide.webp'
import travelItinerary from '../assets/images/travel-itinerary.webp'
import serviceBg from '../assets/images/serviceBg.webp'
import MostSellingPackage from '../components/PackageSlider/MostSellingPackage'
import hero from '../assets/images/hero.webp'
import awardSection from '../assets/images/awardSection.webp'
import awardSection1 from '../assets/images/award1.webp'
import awardSection2 from '../assets/images/award2.webp'
import awardSection3 from '../assets/images/award3.webp'

import Testimonial from '../components/Testimonials/Testimonial'
import { Fade, Slide } from "react-awesome-reveal";
import { Slide as SlideshowSlide } from "react-slideshow-image";

import itineraries from '../assets/images/Around the world-amico.webp'
import tour_packaging from '../assets/images/Traveling-bro.webp'
import reservation from '../assets/images/Flight Booking-rafiki.webp'
import tour_guide from '../assets/images/Tour-guide-bro.webp'
import activities from '../assets/images/travel-selfie-bro.webp'
import PremiumCustomer from '../components/premium/premiumCustomer'
import { Helmet } from 'react-helmet'

const Home = () => {

  return (

    <div>
      <Helmet>
        <title>Meghalaya - Into The Mountains</title>
        <meta name="description" content="Experience the beauty of Meghalaya with Meghalaya - Into The Mountains - a leading travel agency offering personalized tours and adventures. Explore Shillong, Cherrapunji, and more." />

      </Helmet>
      <Banner />
      <section className=" bg-[#7f837c] bg-opacity-10 py-16">
        <h1 className=' text-[30px] sm:text-[48px] text-center font-black mx-auto mb-10'>About Us </h1>
        <div className="relative rounded-lg overflow-hidden">
          {/* Content */}
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row items-center">
              {/* Left Column */}
              <div className="md:w-1/2 w-full mb-8 md:mb-0">
                <Slide triggerOnce direction='left'>
                  <div className="col-md-5 order-md-last d-flex align-items-stretch">
                    <svg
                      className='w-full'
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width={580}
                      height={500}
                      fill="none"
                      viewBox="0 0 580 448"
                    >
                      <rect width={180} height={311} x={400} fill="url('#a')" rx={90} />
                      <rect
                        width={180}
                        height={311}
                        x={400}
                        fill="#051721"
                        fillOpacity={0.2}
                        rx={90}
                      />
                      <path
                        fill="url('#b')"
                        fillRule="evenodd"
                        d="M390 116.932a90.77 90.77 0 0 0-13-.932h-20c-49.706 0-90 40.294-90 90v152c0 49.706 40.294 90 90 90h20c49.706 0 90-40.294 90-90v-34.703c-43.86-8.412-77-46.984-77-93.297V116.932Z"
                        clipRule="evenodd"
                      />
                      <path
                        fill="url('#c')"
                        fillRule="evenodd"
                        d="M95 0C42.533 0 0 42.533 0 95v258c0 52.467 42.533 95 95 95h84c36.248 0 67.755-20.302 83.77-50.155-5.628-12.137-8.77-25.663-8.77-39.922V221.031c0-21.982 7.466-42.22 20-58.317V95c0-52.467-42.533-95-95-95H95Z"
                        clipRule="evenodd"
                      />
                      <path
                        fill="#051721"
                        fillOpacity={0.3}
                        fillRule="evenodd"
                        d="M95 0C42.533 0 0 42.533 0 95v258c0 52.467 42.533 95 95 95h84c36.248 0 67.755-20.302 83.77-50.155-5.628-12.137-8.77-25.663-8.77-39.922V221.031c0-21.982 7.466-42.22 20-58.317V95c0-52.467-42.533-95-95-95H95Z"
                        clipRule="evenodd"
                      />
                      <defs>
                        <pattern
                          id="a"
                          width={1}
                          height={1}
                          patternContentUnits="objectBoundingBox"
                        >
                          <use xlinkHref="#d" transform="matrix(.00259 0 0 .0015 -.795 0)" />
                        </pattern>
                        <pattern
                          id="b"
                          width={1}
                          height={1}
                          patternContentUnits="objectBoundingBox"
                        >
                          <use xlinkHref="#e" transform="matrix(.0049 0 0 .00295 -.746 0)" />
                        </pattern>
                        <pattern
                          id="c"
                          width={1}
                          height={1}
                          patternContentUnits="objectBoundingBox"
                        >
                          <use xlinkHref="#f" transform="matrix(.0006 0 0 .00037 -.728 0)" />
                        </pattern>
                        <image id="d" width={1000} height={667} href={image1} />
                        <image id="e" width={509} height={339} href={image2} />
                        <image
                          id="f"
                          width={4096}
                          height={2726}
                          href={image3}
                        />
                      </defs>
                    </svg>
                  </div>
                </Slide>
              </div>

              {/* Right Column */}
              <div className="md:w-1/2 md:pl-8">
                <Slide triggerOnce direction='right'>

                  <h1 className='text-2xl mb-4'>Plan Your Trip</h1>
                  <p className="mb-4">
                    Meghalaya - Into the Mountains is a Travel Company that Offers various Tour Packages to the Beautiful state of Meghalaya. This Northeastern state is known for its Breathtaking Landscapes, Cascading Waterfalls, and vibrant culture.
                  </p>
                  <p className=''>
                    The company provides personalized itineraries to suit the needs and preferences of its customers, ensuring a memorable trip. Additionally, the company also offers adventure activities like trekking and caving, providing an exciting and unique experience. With Meghalaya - Into the Mountain Services, travelers can discover the hidden gems of Meghalaya and immerse themselves in its natural beauty and rich heritage.
                  </p>
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-[#414341] bg-opacity-5'>
        <MostSellingPackage />
      </section>

      <section className='bg-[#555555] relative bg-opacity-10 '>
        <div className='flex flex-col my-20'>
          <Fade direction='up'>
            <h1 className='text-[30px] sm:text-[48px] text-center font-black mx-auto mb-10'> MOST VISITED DESTINATIONS </h1>
          </Fade>
          <ImageSlider />
        </div>
      </section>

      <section className='bg-[#6e716c] bg-opacity-10'>
        <div className="container relative mx-auto px-4 md:px-8 py-16">
          <Slide direction='up' triggerOnce>
            <h1 className='text-[30px] sm:text-[48px] font-black mx-auto text-center mb-10'> OUR SERVICES </h1>
          </Slide>
          <Slide direction='up' triggerOnce cascade>
            <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-8">
              {/* Service 1 */}
              <div className="flex flex-col items-center">
                <div className="w-44   bg-white h-44  rounded-full flex items-center justify-center mb-4">
                  {/* Add your icon or image here */}
                  <span className="text-white text-2xl">
                    <img src={itineraries} alt='img' />
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2">Preparing Itineraries For Travellers</h3>
                <p className="max-w-md">We create personalized itineraries based on your preferences and interests to make your trip memorable.</p>
              </div>

              {/* Service 2 */}
              <div className="flex flex-col items-center">
                <div className="w-44 bg-white   h-44  rounded-full flex items-center justify-center mb-4">
                  {/* Add your icon or image here */}
                  <span className="text-white text-2xl">
                    <img src={tour_packaging} alt='img' />
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2">Tour Packaging And Costing</h3>
                <p className="max-w-md">We offer comprehensive tour packages with transparent costing, ensuring you get the best value for your money.</p>
              </div>

              {/* Service 3 */}
              <div className="flex flex-col items-center">
                <div className="w-44 bg-white   h-44  rounded-full flex items-center justify-center mb-4">
                  {/* Add your icon or image here */}
                  <span className="text-white text-2xl">
                    <img src={reservation} alt='img' />
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2">Reservation Service</h3>
                <p className=" max-w-md">Leave the hassle of booking accommodations and transportation to us, ensuring a smooth journey for you.</p>
              </div>
            </div>
          </Slide>

          {/* Services 4 and 5 */}
          <Slide direction='up' triggerOnce cascade>
            <div className="flex flex-col text-center md:flex-row md:justify-center gap-8 mt-8">
              {/* Service 4 */}
              <div className="flex flex-col items-center">
                <div className="w-44 bg-white   h-44  rounded-full flex items-center justify-center mb-4">
                  {/* Add your icon or image here */}
                  <span className="text-white text-2xl">
                    <img src={tour_guide} alt='img' />
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2">Local Tour Guides</h3>
                <p className=" max-w-md">Our experienced local guides will accompany you throughout the trip, providing insights and knowledge about the destinations.</p>
              </div>

              {/* Service 5 */}
              <div className="flex flex-col items-center">
                <div className="w-44  bg-white  h-44  rounded-full flex items-center justify-center mb-4">
                  {/* Add your icon or image here */}
                  <span className="text-white text-2xl">
                    <img src={activities} alt='img' />
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2">Activities</h3>
                <p className=" max-w-md">Engage in various exciting activities like trekking, caving, and more to make your trip adventurous and unforgettable.</p>
              </div>
            </div>
          </Slide>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceItem
              icon="/path/to/itineraries-icon.svg"
              title="Personalized Itineraries"
              description="Tailored travel plans based on your preferences and interests."
            />
            <ServiceItem
              icon="/path/to/packaging-icon.svg"
              title="Tour Packaging"
              description="Comprehensive packages with transparent pricing for the best value."
            />
            <ServiceItem
              icon="/path/to/reservation-icon.svg"
              title="Reservation Services"
              description="Hassle-free booking for accommodations and transportation."
            />
            <ServiceItem
              icon="/path/to/guide-icon.svg"
              title="Expert Local Guides"
              description="Knowledgeable companions to enhance your travel experience."
            />
            <ServiceItem
              icon="/path/to/activities-icon.svg"
              title="Exciting Activities"
              description="From trekking to caving, unforgettable adventures await."
            />
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/path/to/background-image.jpg')" }}
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10" />
        <div className="container mx-auto px-4 relative z-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Why Choose Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureItem
              icon="/path/to/adventurous-icon.svg"
              title="Adventurous"
              description="Explore the stunning landscapes and rich culture of Meghalaya."
            />
            <FeatureItem
              icon="/path/to/itineraries-icon.svg"
              title="Custom Itineraries"
              description="Tailored travel plans to match your unique interests and needs."
            />
            <FeatureItem
              icon="/path/to/guides-icon.svg"
              title="Expert Guides"
              description="Knowledgeable local guides to enhance your cultural experience."
            />
            <FeatureItem
              icon="/path/to/ecotourism-icon.svg"
              title="Eco-friendly"
              description="Sustainable practices to preserve Meghalaya's natural beauty."
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <div className="relative">
            <img 
              src="/path/to/founder-image.jpg" 
              alt="Mr. Raynauld Mark Pasi" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-blue-900 opacity-20 rounded-lg" />
          </div>
        </div>
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">The Person Behind Meghalaya – Into the Mountains</h2>
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Mr. Raynauld Mark Pasi</h3>
          <p className="text-gray-600 mb-4">
            Known affectionately as Bonn, Mr. Pasi is the visionary behind Meghalaya - Into the Mountains, a tour operator he founded 15 years ago. Despite holding a Bachelor's degree in engineering, his profound love for nature led him to change his career path.
          </p>
          <p className="text-gray-600 mb-4">
            Driven by passion, he transitioned from the technical field to become a tour operator. Today, he shares his love and extensive knowledge of nature with clients, providing guided tours and unforgettable experiences.
          </p>
          <p className="text-gray-600">
            His decision to follow his heart has resulted in a fulfilling career where he combines his interests and enthusiasm to offer unique, exciting experiences that highlight the beautiful and diverse aspects of nature.
          </p>
        </div>
      </div>
    </div>
      </section>

      <section>
        <PremiumCustomer />
      </section>

      <section className='bg-[#7e827d] bg-opacity-20'>
        <Testimonial />
      </section>
    </div>
  )
}

const ServiceItem = ({ icon, title, description }) => (
  <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg transition-all duration-300 hover:shadow-lg">
    <div className="w-20 h-20 mb-4 rounded-full bg-gray-100 flex items-center justify-center">
      <img src={icon} alt={title} className="w-12 h-12" />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

const FeatureItem = ({ icon, title, description }) => (
  <div className="flex flex-col items-center p-6 bg-white bg-opacity-90 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
    <img src={icon} alt={title} className="w-16 h-16 mb-4" />
    <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);
export default Home