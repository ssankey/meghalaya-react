import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { Fade, Slide } from 'react-awesome-reveal';
import { Slide as SlideshowSlide } from 'react-slideshow-image';

// Import components
import Banner from '../components/Banner/Banner';
import ImageSlider from '../components/popularPlaces/ImageSlider';
import MostSellingPackage from '../components/PackageSlider/MostSellingPackage';
import Testimonial from '../components/Testimonials/Testimonial';
import PremiumCustomer from '../components/premium/premiumCustomer';

// Import images directly
import image1 from '../assets/images/image14.webp';
import image2 from '../assets/images/image16.webp';
import image3 from '../assets/images/image34.webp';
import hiking from '../assets/images/hiking.webp';
import adventours from '../assets/images/adventure.webp';
import tourGuide from '../assets/images/tour-guide.webp';
import travelItinerary from '../assets/images/travel-itinerary.webp';
import serviceBg from '../assets/images/serviceBg.webp';
import hero from '../assets/images/hero.webp';
import awardSection from '../assets/images/awardSection.webp';
import awardSection1 from '../assets/images/award1.webp';
import awardSection2 from '../assets/images/award2.webp';
import itineraries from '../assets/images/Around the world-amico.webp';
import tour_packaging from '../assets/images/Traveling-bro.webp';
import reservation from '../assets/images/Flight Booking-rafiki.webp';
import tour_guide from '../assets/images/Tour-guide-bro.webp';
import activities from '../assets/images/travel-selfie-bro.webp';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Meghalaya - Into The Mountains</title>
        <meta name="description" content="Experience the beauty of Meghalaya with Meghalaya - Into The Mountains - a leading travel agency offering personalized tours and adventures. Explore Shillong, Cherrapunji, and more." />
      </Helmet>

      <Suspense fallback={<div className="text-center py-8">Loading Banner...</div>}>
        <Banner />
      </Suspense>

      <section className="bg-[#7f837c] bg-opacity-10 py-16">
        <h1 className='text-[30px] sm:text-[48px] text-center font-black mx-auto mb-10'>About Us</h1>
        <div className="relative rounded-lg overflow-hidden">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 w-full mb-8 md:mb-0">
                <Slide triggerOnce direction='left'>
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
                </Slide>
              </div>

              <div className="md:w-1/2 md:pl-8">
                <Slide triggerOnce direction='right'>
                  <h2 className='text-2xl mb-4'>Plan Your Trip</h2>
                  <p className="mb-4">
                    Meghalaya - Into the Mountains is a Travel Company that Offers various Tour Packages to the Beautiful state of Meghalaya. This Northeastern state is known for its Breathtaking Landscapes, Cascading Waterfalls, and vibrant culture.
                  </p>
                  <p>
                    The company provides personalized itineraries to suit the needs and preferences of its customers, ensuring a memorable trip. Additionally, the company also offers adventure activities like trekking and caving, providing an exciting and unique experience. With Meghalaya - Into the Mountain Services, travelers can discover the hidden gems of Meghalaya and immerse themselves in its natural beauty and rich heritage.
                  </p>
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#414341] bg-opacity-5">
        <Suspense fallback={<div className="text-center py-8">Loading Most Selling Packages...</div>}>
          <MostSellingPackage />
        </Suspense>
      </section>

      <section className='bg-[#555555] relative bg-opacity-10'>
        <div className='flex flex-col my-20'>
          <Fade direction='up'>
            <h2 className='text-[30px] sm:text-[48px] text-center font-black mx-auto mb-10'>MOST VISITED DESTINATIONS</h2>
          </Fade>
          <Suspense fallback={<div className="text-center py-8">Loading Image Slider...</div>}>
            <ImageSlider />
          </Suspense>
        </div>
      </section>

      {/* Services section */}
      <section className='bg-[#6e716c] bg-opacity-10'>
        <div className="container relative mx-auto px-4 md:px-8 py-16">
          <Slide direction='up' triggerOnce>
            <h2 className='text-[30px] sm:text-[48px] font-black mx-auto text-center mb-10'>OUR SERVICES</h2>
          </Slide>
          <Slide direction='up' triggerOnce cascade>
            <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-8">
              {/* Service items */}
              <ServiceItem
                image={itineraries}
                title="Preparing Itineraries For Travellers"
                description="We create personalized itineraries based on your preferences and interests to make your trip memorable."
              />
              <ServiceItem
                image={tour_packaging}
                title="Tour Packaging And Costing"
                description="We offer comprehensive tour packages with transparent costing, ensuring you get the best value for your money."
              />
              <ServiceItem
                image={reservation}
                title="Reservation Service"
                description="Leave the hassle of booking accommodations and transportation to us, ensuring a smooth journey for you."
              />
            </div>
          </Slide>

          <Slide direction='up' triggerOnce cascade>
            <div className="flex flex-col text-center md:flex-row md:justify-center gap-8 mt-8">
              <ServiceItem
                image={tour_guide}
                title="Local Tour Guides"
                description="Our experienced local guides will accompany you throughout the trip, providing insights and knowledge about the destinations."
              />
              <ServiceItem
                image={activities}
                title="Activities"
                description="Engage in various exciting activities like trekking, caving, and more to make your trip adventurous and unforgettable."
              />
            </div>
          </Slide>
        </div>
      </section>

      {/* Why Choose Us section */}
      <section className='bg-white'>
        <div className="container relative p-10">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover object-center opacity-20"
            src={serviceBg}
            alt="Mountains Background"
            loading="lazy"
          />
          <Slide direction='up' triggerOnce>
            <h2 className="text-[30px] sm:text-[48px] font-black mx-auto text-center mb-10">WHY CHOOSE OUR SERVICES</h2>
          </Slide>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Slide direction='up' triggerOnce cascade damping={0.1}>
              <ChooseUsItem
                image={adventours}
                title="ADVENTUROUS"
                description="Meghalaya - Into the Mountains is an excellent choice for those looking to explore the beauty and diversity of Meghalaya, a state in northeast India known for its stunning natural landscapes and rich cultural heritage."
              />
              <ChooseUsItem
                image={travelItinerary}
                title="ITINERARIES"
                description="With years of experience in the travel industry, Meghalaya - Into the Mountains Tour offers customized itineraries that cater to the unique interests and needs of each traveler."
              />
              <ChooseUsItem
                image={tourGuide}
                title="GUIDES"
                description="The team of experienced and knowledgeable guides ensures that visitors can fully immerse themselves in the local culture and history while exploring the state's natural wonders."
              />
              <ChooseUsItem
                image={adventours}
                title="ECOTOURISM"
                description="We are also committed to responsible tourism practices, working closely with local communities to promote sustainable tourism development and preserve regions and cultural resources."
              />
            </Slide>
          </div>
        </div>
      </section>

      {/* About Us section */}
      <section className="py-16 md:py-16 bg-[#959a93] bg-opacity-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <Slide direction='left' triggerOnce>
              <div className="relative h-48 md:h-96">
                <img
                  src={hero}
                  alt="About Us"
                  className="object-cover w-full h-full rounded-lg shadow-lg"
                  loading="lazy"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-900 to-blue-900 opacity-10 rounded-lg" style={{ borderRadius: '3em 8em 10em 6em /3em 6em 10em 8em' }}></div>
              </div>
            </Slide>

            <Slide direction='right' triggerOnce>
              <div className="text-black">
                <h2 className="text-[30px] sm:text-[44px] font-black mb-4">PERSON BEHIND MEGHALAYA – INTO THE MOUNTAINS</h2>
                <p className="mb-4">
                  <span className='text-xl underline'>Mr. Raynauld Mark Pasi </span> which everyone loves to call him Bonn is the person behind Meghalaya - Into the Mountains, who started this tour operator 15 years ago. He underwent a change in career path after completing his Bachelor's degree in engineering.
                </p>
                <p className="mb-4">
                  Despite his academic achievements, his love for nature outweighed his interest in the technical field. Driven by his passion, he made a career switch and became a tour operator. He now shares his love and knowledge of nature with others, providing guided tours and an unforgettable experience for his clients.
                </p>
                <p>
                  His decision to follow his heart and pursue his dream has led him to a fulfilling and rewarding career, where he can combine his interests and share his enthusiasm with others. As a tour operator, he is able to offer unique and exciting experiences to his clients, highlighting the beautiful and diverse aspects of nature.
                </p>
              </div>
            </Slide>
          </div>
        </div>
      </section>

      {/* Recognition Award section */}
      <section className="py-16 px-4 mt-10 md:px-8 bg-[#7a7a7a] bg-opacity-10">
        <div className="container mx-auto flex relative flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 md:ml-8">
            <h2 className="text-3xl md:text-[48px] font-bold text-black mb-8">RECOGNITION AWARD</h2>
            <p className="text-black text-lg mb-8">
              Meghalaya - Into the Mountains, based in the northeast Indian state of Meghalaya, was awarded by Chief Minister Shri Conrad Sangma for its exceptional services in promoting high-end tourism in the region.
            </p>
            {/* More paragraphs... */}
          </div>
          <div className="md:w-1/2 w-full mb-8 md:mb-0">
            <SlideshowSlide infinite>
              <div className="each-slide-effect-2 text-center">
                <img src={awardSection} alt="Award Illustration - Meghalaya Travel Agency" className="w-full sm:h-[600px] h-[300px] object-cover" loading="lazy" />
              </div>
              <div className="each-slide-effect-2 text-center">
                <img src={awardSection1} alt="Award Illustration - Meghalaya Travel Agency" className="w-full sm:h-[600px] h-[300px] object-cover" loading="lazy" />
              </div>
              <div className="each-slide-effect-2 text-center">
                <img src={awardSection2} alt="Award Illustration - Meghalaya Travel Agency" className="w-full sm:h-[600px] h-[300px] object-cover" loading="lazy" />
              </div>
            </SlideshowSlide>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="text-center py-8">Loading Premium Customer...</div>}>
        <PremiumCustomer />
      </Suspense>

      <section className='bg-[#7e827d] bg-opacity-20'>
        <Suspense fallback={<div className="text-center py-8">Loading Testimonials...</div>}>
          <Testimonial />
        </Suspense>
      </section>
    </div>
  );
};

const ServiceItem = ({ image, title, description }) => (
  <div className="flex flex-col items-center">
    <div className="w-44 bg-white h-44 rounded-full flex items-center justify-center mb-4">
      <img src={image} alt={title} loading="lazy" />
    </div>
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="max-w-md">{description}</p>
  </div>
);

const ChooseUsItem = ({ image, title, description }) => (
  <div className="flex flex-col items-center ftco-animate">
    <div className="bg-white rounded-full p-4 mb-4">
      <img src={image} alt={title} loading="lazy" />
    </div>
    <h3 className="text-lg font-extrabold">{title}</h3>
    <p className="max-w-md text-center">{description}</p>
  </div>
);

export default Home;