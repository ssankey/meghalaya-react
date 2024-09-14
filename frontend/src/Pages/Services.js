import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';

// Lazy load the Form component
const Form = lazy(() => import('../components/Form/Form'));

// Lazy load images
const BannerImage = lazy(() => import('../assets/images/iftekhar-nibir-XKCFg-wJx8M-unsplash.webp'));
const CampingImage = lazy(() => import('../assets/images/camping.webp'));
const SafariImage = lazy(() => import('../assets/images/safari.webp'));
const TrekkingImage = lazy(() => import('../assets/images/hiking.webp'));
const SightseeingImage = lazy(() => import('../assets/images/iftekhar-nibir-XKCFg-wJx8M-unsplash.webp'));
const RaftingImage = lazy(() => import('../assets/images/rafting.webp'));

const Services = () => {
    return (
        <div className="container mx-auto">
            <Helmet>
                <title>Services | Meghalaya - Into The Mountains</title>
                <meta
                    name="description"
                    content="Explore a variety of adventure services offered by Meghalaya - Into The Mountains. From camping and trekking to safari and rafting, discover thrilling experiences with Lets See Tour and Travels."
                />
            </Helmet>

            {/* Banner Section */}
            <section className='banner'>
                <div className='flex justify-center items-center' style={{ position: 'relative', width: '100%', height: '400px' }}>
                    <Suspense fallback={<div>Loading Banner...</div>}>
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
                        />
                    </Suspense>
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        }}
                    ></div>
                    <h1 className='font-black z-20' style={{ color: 'white', fontSize: '36px' }}>
                        SERVICES
                    </h1>
                </div>
            </section>

            <section>
                <div className="md:px-[10rem] px-[2rem] my-10 flex flex-col justify-center items-center">
                    <p className="md:text-lg">
                        Find adventure, anywhere you go. The true spirit of travelling is felt from the adventure activities of the place. Apart from the sensational adrenaline rush, the soul-satisfying ventures contribute much more to our existence...
                    </p>
                </div>
            </section>

            <div className='flex sm:flex-row flex-col'>
                <section className="flex flex-wrap flex-col gap-10 justify-center items-center sm:w-2/3">

                    {/* Camping Section */}
                    <div className="bg-gray-100 rounded-lg drop-shadow-2xl p-4 w-full md:w-5/6 md:p-8">
                        <Suspense fallback={<div>Loading Camping Image...</div>}>
                            <img src={CampingImage} alt="Camping" className="w-full h-500 object-cover rounded-lg mx-auto mb-4" />
                        </Suspense>
                        <h3 className="text-xl font-bold text-center">Camping</h3>
                        <p className="text-gray-700">
                            Camping amid the magnificence of the surrounding natural beauty is one of the best feelings...
                        </p>
                    </div>

                    {/* Safari Section */}
                    <div className="bg-gray-100 rounded-lg drop-shadow-2xl p-4 w-full md:w-5/6 md:p-8">
                        <Suspense fallback={<div>Loading Safari Image...</div>}>
                            <img src={SafariImage} alt="Safari" className="w-full h-500 object-cover rounded-lg mx-auto mb-4" />
                        </Suspense>
                        <h3 className="text-xl font-bold text-center">Safari</h3>
                        <p className="text-gray-700">
                            There are different kinds of safaris like the jungle safari or the wildlife safari...
                        </p>
                    </div>

                    {/* Trekking Section */}
                    <div className="bg-gray-100 rounded-lg drop-shadow-2xl p-4 w-full md:w-5/6 md:p-8">
                        <Suspense fallback={<div>Loading Trekking Image...</div>}>
                            <img src={TrekkingImage} alt="Trekking" className="w-full h-500 object-cover rounded-lg mx-auto mb-4" />
                        </Suspense>
                        <h3 className="text-xl font-bold text-center">Trekking</h3>
                        <p className="text-gray-700">
                            Trekking is nothing but witnessing the journeys filled with surprises from nature...
                        </p>
                    </div>

                    {/* Sightseeing Section */}
                    <div className="bg-gray-100 rounded-lg drop-shadow-2xl p-4 w-full md:w-5/6 md:p-8">
                        <Suspense fallback={<div>Loading Sightseeing Image...</div>}>
                            <img src={SightseeingImage} alt="Sightseeing" className="w-full h-500 object-cover rounded-lg mx-auto mb-4" />
                        </Suspense>
                        <h3 className="text-xl font-bold text-center">Sightseeing</h3>
                        <p className="text-gray-700">
                            More than an adventure, it is a soothing activity of travel delight and meant to treat our eyes...
                        </p>
                    </div>

                    {/* Rafting Section */}
                    <div className="bg-gray-100 rounded-lg drop-shadow-2xl p-4 w-full md:w-5/6 md:p-8">
                        <Suspense fallback={<div>Loading Rafting Image...</div>}>
                            <img src={RaftingImage} alt="Rafting" className="w-full h-500 object-cover rounded-lg mx-auto mb-4" />
                        </Suspense>
                        <h3 className="text-xl font-bold text-center">Rafting</h3>
                        <p className="text-gray-700">
                            A physically and mentally energizing adventure trail, rafting is one of the most challenging adventures...
                        </p>
                    </div>
                </section>

                {/* Form Section */}
                <div className='drop-shadow-2xl md:w-1/3 w-full sticky top-0'>
                    <Suspense fallback={<div>Loading Form...</div>}>
                        <Form />
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

export default Services;
