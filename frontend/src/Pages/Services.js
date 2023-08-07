import React from 'react';
import BannerImage from '../assets/images/iftekhar-nibir-XKCFg-wJx8M-unsplash.jpg'
import CampingImage from '../assets/images/camping.jpg';
import SafariImage from '../assets/images/safari.jpg';
import TrekkingImage from '../assets/images/hiking.jpg';
import SightseeingImage from '../assets/images/iftekhar-nibir-XKCFg-wJx8M-unsplash.jpg';
import RaftingImage from '../assets/images/rafting.jpg'
import Form from '../compoents/Form/Form';

const Services = () => {
    return (
        <div className="container mx-auto">
            {/* Banner Section */}
            <section className='banner'>
                <div className='flex  justify-center items-center' style={{ position: 'relative', width: '100%', height: '400px' }}>
                    <img
                        src={BannerImage}
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
                    <h1 className='font-black z-20' style={{ color: 'white', fontSize: '36px' }}>
                        SERVICES
                    </h1>
                </div>

            </section>
            <section>
                <div className="md:px-[10rem] px-[2rem] my-10 flex flex-col justify-center items-center" >
                    <p className="md:text-lg"> Find adventure, anywhere you go. The true spirit of travelling is felt from the adventures activities of the place. Apart from the sensational adrenaline rush, the soul satisfying ventures contribute much more to our existence. Every adventure tells us that we are capable of much more and that is the beautiful thing about it. It increases our confidence level to an undefined level and boosts the essence of teamwork and trust within us. Not to forget, it adds countless stories and unforgettable memories to our travel chapter. </p>
                </div>
            </section>
            <div className='flex sm:flex-row flex-col'>
                <section className="flex flex-wrap flex-col gap-10 justify-center items-center sm:w-2/3">
                    {/* Camping */}
                    <div className="bg-gray-100 rounded-lg drop-shadow-2xl p-4 w-full md:w-5/6 md:p-8">
                        <img src={CampingImage} alt="Camping" className="w-full h-500 object-cover rounded-lg mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-center">Camping</h3>
                        <p className="text-gray-700">
                            {/* Add the description for camping here */}
                            Camping amid the magnificence of the surrounding natural beauty is one of the best feelings that we experience in our whole trip. The various enchanting camping sites are covered by the destinations of Lets See Tour and Travels.
                        </p>
                    </div>

                    {/* Safari */}
                    <div className="bg-gray-100 rounded-lg drop-shadow-2xl p-4 w-full md:w-5/6 md:p-8">
                        <img src={SafariImage} alt="Safari" className="w-full h-500 object-cover rounded-lg mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-center">Safari</h3>
                        <p className="text-gray-700">
                            {/* Add the description for safari here */}
                            There are different kinds of safaris like the jungle safari or the wildlife safari. The sole purpose of a safari is to help you discover the untouched part of the flora & fauna and admire the inspiring beauty within them. Lets See Tour and Travels has tour packages designed covering the famous safaris of India and abroad.
                        </p>
                    </div>

                    <div className="bg-gray-100 rounded-lg drop-shadow-2xl p-4 w-full md:w-5/6 md:p-8">
                        <img src={TrekkingImage} alt="Safari" className="w-full h-500 object-cover rounded-lg mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-center">Safari</h3>
                        <p className="text-gray-700">
                            {/* Add the description for safari here */}
                            Trekking is nothing but witnessing the journeys filled with surprises from the nature that can only be explored by walking. Trekking is a soulful adventure and has different levels to it. Starting from easy, intermediate to difficult, each kind of trek has different thrill attached to it. Take the alluring trekking trips organized by Lets See Tour and Travels.
                        </p>
                    </div>

                    <div className="bg-gray-100 rounded-lg p-4 drop-shadow-2xl w-full md:w-5/6 md:p-8">
                        <img src={SightseeingImage} alt="Safari" className="w-full h-500 object-cover rounded-lg mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-center">Safari</h3>
                        <p className="text-gray-700">
                            {/* Add the description for safari here */}
                            More than an adventure, it is a soothing activity of travel delight and meant to treat our eyes. However, every activity has its own definition of thrill linked with it. Embrace into some soul-soothing retreats of the heavenly destinations and pose along some of the best views of this world.
                        </p>
                    </div>

                    <div className="bg-gray-100 rounded-lg drop-shadow-2xl p-4 w-full md:w-5/6 md:p-8">
                        <img src={RaftingImage} alt="Safari" className="w-full h-500 object-cover rounded-lg mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-center">Safari</h3>
                        <p className="text-gray-700">
                            {/* Add the description for safari here */}
                            A physically and mentally energizing adventure trail, rafting is one of the most challenging adventure activities. It brings out the real adventure-seeker within you. The effect of this adventure can be felt in the spine of the person rafting around the white rivers of great rafting destinations.
                        </p>
                    </div>

                    {/* Add other sections for Trekking, Sightseeing, and Rafting */}
                    {/* Use the respective images and descriptions */}
                </section>

                {/* Form Component */}
                <div className='drop-shadow-2xl md:w-1/3 w-full sticky top-0'>
                    <Form />
                </div>
            </div>
        </div>
    );
};

export default Services;
