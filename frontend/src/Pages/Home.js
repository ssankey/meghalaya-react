import React from 'react'
import Banner from '../compoents/Banner/Banner'
import image1 from '../assets/images/image14.jpg'
import image2 from '../assets/images/image16.jpg'
import image3 from '../assets/images/image34.jpg'
import ImageSlider from '../compoents/popularPlaces/ImageSlider'
import hiking from '../assets/images/hiking.png'
import adventours from '../assets/images/adventure.png'
import tourGuide from '../assets/images/tour-guide.png'
import travelItinerary from '../assets/images/travel-itinerary.png'
import serviceBg from '../assets/images/serviceBg.jpg'
import MostSellingPackage from '../compoents/PackageSlider/MostSellingPackage'
import hero from '../assets/images/hero.jpg'
import awardSection from '../assets/images/awardSection.jpg'
import Testimonial from '../compoents/Testimonials/Testimonial'
import { Fade, Slide } from "react-awesome-reveal";
import itineraries from '../assets/images/Around the world-amico.png'
import tour_packaging from '../assets/images/Traveling-bro.png'
import reservation from '../assets/images/Flight Booking-rafiki.png'
import tour_guide from '../assets/images/Tour-guide-bro.png'
import activities from '../assets/images/travel-selfie-bro.png'
import PremiumCustomer from '../compoents/premium/premiumCustomer'
const Home = () => {

  return (

    <div>
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
        <div className='flex flex-col my-20'>
          <Fade direction='up' triggerOnce>
            <h1 className='text-[30px] sm:text-[48px] text-center font-black mx-auto mb-10'> OUR MOST SELLING TOUR PACKAGES </h1>
          </Fade>
          <MostSellingPackage />
        </div>
      </section>

      <section className='bg-[#555555] p-10 relative bg-opacity-10 '>
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
                <h3 className="text-lg font-bold mb-2">Activity</h3>
                <p className=" max-w-md">Engage in various exciting activities like trekking, caving, and more to make your trip adventurous and unforgettable.</p>
              </div>
            </div>
          </Slide>
        </div>
      </section>

      <section className='bg-white'>
        <div className="container relative p-10">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover object-center opacity-20"
            src={serviceBg}
            alt="Mountains Background"
          />
          <Slide direction='up' triggerOnce>
            <div className="md:mt-5 heading-section text-center text-[30px] sm:text-[48px] font-black mx-auto mb-10">
              <h2 className="mb-2">WHY CHOOSE OUR SERVICES</h2>
            </div>
          </Slide>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Slide direction='up' triggerOnce cascade damping={0.1}>
              <div className="flex flex-col items-center ftco-animate">
                <div className="bg-white rounded-full p-4 mb-4">
                  {/* Replace the image path with the correct path to your image */}
                  <img src={hiking} alt="Adventurous" />
                </div>
                <h3 className="text-lg font-extrabold">ADVENTUROUS</h3>
                <p className="max-w-md text-center">Meghalaya Mountains Tours is an excellent choice for those looking to explore the beauty and diversity of Meghalaya, a state in northeast India known for its stunning natural landscapes and rich cultural heritage.</p>
              </div>

              <div className="flex flex-col items-center ftco-animate">
                <div className="bg-white rounded-full p-4 mb-4">
                  {/* Replace the image path with the correct path to your image */}
                  <img src={travelItinerary} alt="Itineraries" />
                </div>
                <h3 className="text-lg font-extrabold">ITINERARIES</h3>
                <p className="max-w-md text-center">With years of experience in the travel industry, Meghalaya Mountains Tour offers customized itineraries that cater to the unique interests and needs of each traveler.</p>
              </div>

              <div className="flex flex-col items-center ftco-animate">
                <div className="bg-white rounded-full p-4 mb-4">
                  {/* Replace the image path with the correct path to your image */}
                  <img src={tourGuide} alt="Guides" />
                </div>
                <h3 className="text-lg font-extrabold">GUIDES</h3>
                <p className="max-w-md text-center">The team of experienced and knowledgeable guides ensures that visitors can fully immerse themselves in the local culture and history while exploring the state's natural wonders.</p>
              </div>

              <div className="flex flex-col items-center ftco-animate">
                <div className="bg-white rounded-full p-4 mb-4">
                  {/* Replace the image path with the correct path to your image */}
                  <img src={adventours} alt="Ecotourism" />
                </div>
                <h3 className="text-lg font-bold">ECOTOURISM</h3>
                <p className="max-w-md text-center">We are also committed to responsible tourism practices, working closely with local communities to promote sustainable tourism development and preserve regions and cultural resources.</p>
              </div>
            </Slide>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-16 bg-[#959a93] bg-opacity-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Column (Image) */}
            <Slide direction='left' triggerOnce>
              <div className="relative h-48 md:h-96">
                <img
                  src={hero}
                  alt="About Us"
                  className="object-cover w-full h-full rounded-lg shadow-lg"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-900 to-blue-900 opacity-10 rounded-lg" style={{ borderRadius: '3em 8em 10em 6em /3em 6em 10em 8em' }}> </div>
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                </div>
              </div>
            </Slide>

            {/* Right Column (Text) */}
            <Slide direction='right' triggerOnce>
              <div className="text-black">
                <h4 className="text-[30px] sm:text-[44px] font-black mb-4">PERSON BEHIND MEGHALAYA – INTO THE MOUNTAINS</h4>
                <p className="mb-4">
                  <span className='text-xl underline'>Mr. Raynauld Mark </span>Pasi which everyone loves to call him Bonn is the person behind Meghalaya ~ Into the Mountains, who started this tour operator 15 years ago. He underwent a change in career path after completing his master's degree in engineering.</p>
                <p className="mb-4">
                  Despite his academic achievements, his love for nature outweighed his interest in the technical field. Driven by his passion, he made a career switch and became a tour operator. He now shares his love and knowledge of nature with others, providing guided tours and an unforgettable experience for his clients            </p>
                <p>
                  His decision to follow his heart and pursue his dream has led him to a fulfilling and rewarding career, where he can combine his interests and share his enthusiasm with others. As a tour operator, he is able to offer unique and exciting experiences to his clients, highlighting the beautiful and diverse aspects of nature.            </p>
              </div>
            </Slide>
          </div>
        </div>
      </section>

      <section className=" py-16 px-4 mt-10 md:px-8 bg-[#7a7a7a] bg-opacity-10">
        <div className="container mx-auto flex relative flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 md:ml-8">
            <h2 className="text-3xl md:text-[48px] font-bold text-black mb-8">RECOGNITION AWARD</h2>
            <p className="text-black text-lg mb-8">
              Meghalaya - Into the Mountains, based in the northeast Indian state of Meghalaya, was awarded by Prime Minister Shri Conrad Sangma for its exceptional services in promoting high-end tourism in the region.
            </p>
            <p className="text-black text-lg mb-8">
              The company was recognized for its efforts to purchase top-quality tourist vehicles to enhance the overall tourism experience in Meghalaya. This recognition is a testament to the company's commitment to providing its clients with the best possible tourism experience.
            </p>
            <p className="text-black text-lg mb-8">
              The company's focus on high-end services, along with the use of modern and comfortable tourist vehicles, has helped to attract more tourists to the region, thereby promoting local tourism and boosting the economy.
            </p>
            <p className="text-black text-lg mb-8">
              We are confidently saying that Meghalaya Mountain Tours' award is a significant achievement and an acknowledgment of its contribution to the development of tourism in Meghalaya.
            </p>
            <p className="text-black text-lg mb-8">
              With the company's continued focus on providing top-quality services, it is likely to remain a leading player in the tourism industry in the region for years to come.
            </p>
          </div>
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src={awardSection} alt="Award Illustration" className="w-full h-auto" />
          </div>
        </div>
      </section>

      <section>
        <PremiumCustomer/>
      </section>

      <section className='bg-[#7e827d] bg-opacity-20'>
        <Testimonial />
      </section>
    </div>
  )
}

export default Home