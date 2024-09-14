import React, { useEffect, useState, lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { BiTimeFive } from 'react-icons/bi';
import { CiLocationOn } from 'react-icons/ci';
import axios from 'axios';
import { Helmet } from 'react-helmet';

// Lazy loading components with Suspense
const Form = lazy(() => import('../components/Form/Form'));
const MostSellingPackage = lazy(() => import('../components/PackageSlider/MostSellingPackage'));

// Loading Spinner Component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-8">
    <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900"></div>
  </div>
);

const TourDetails = () => {
  const { packageDetails } = useParams();
  const [selectedPackageData, setSelectedPackageData] = useState(null);
  const [activeSection, setActiveSection] = useState(`section0`);
  const [showFullContent, setShowFullContent] = useState(false);

  useEffect(() => {
    const fetchPackageData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/tour-packages?populate=*`,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
            },
          }
        );

        const packageData = response.data.data;
        const selectedPackage = packageData.find(
          (pkg) => pkg.attributes.name === packageDetails
        );

        setSelectedPackageData(selectedPackage?.attributes || null);
      } catch (error) {
        console.error('Error fetching tour package:', error);
      }
    };

    fetchPackageData();
  }, [packageDetails]);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  const toggleSection = (section) => {
    setActiveSection((prevSection) => (prevSection === section ? null : section));
  };

  const getImageUrl = (imageData) => {
    if (imageData && imageData.data && imageData.data.attributes) {
      return `${process.env.REACT_APP_API_URL}${imageData.data.attributes.url}`;
    }
    return null;
  };

  const parseHTML = (htmlContent) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
  };

  if (!selectedPackageData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <LoadingSpinner />
      </div>
    );
  }

  const { 
    name, 
    location, 
    duration, 
    description, 
    inclusion, 
    exclusion, 
    image, 
    itinerary 
  } = selectedPackageData;

  return (
    <div>
      <Helmet>
        <title>{name} | Meghalaya Into The Mountains</title>
        <meta
          name="description"
          content={`Explore the details of ${name} package offered by Lets See Tour and Travels. Discover the itinerary, inclusions, exclusions, and more.`}
        />
      </Helmet>

      {/* Hero Section */}
      <div className="flex justify-center items-center uppercase relative w-full h-[560px]">
        <img
          src={getImageUrl(image)}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: -1 }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="font-black z-20 text-center text-white text-4xl sm:text-5xl">
          {name}
        </h1>
      </div>

      <div className="flex sm:flex-row flex-col">
        <div className="w-full sm:w-2/3 sm:p-20">
          {/* Package Overview */}
          <div className="px-5 py-10 bg-white rounded-2xl drop-shadow-xl">
            <h1 className="sm:text-3xl text-2xl font-black">{name} Package</h1>
            <div className="flex flex-row gap-10 pt-5 items-center">
              <div className="flex items-center gap-2">
                <BiTimeFive className="text-xl text-gray-400" />
                <p className="text-black">{duration}</p>
              </div>
              <div className="flex items-center gap-2">
                <CiLocationOn className="text-xl text-gray-400" />
                <p className="text-black">{location}</p>
              </div>
            </div>
          </div>

          {/* Description and Inclusions/Exclusions */}
          <div className="mt-10 px-5 py-10 bg-white rounded-2xl drop-shadow-xl">
            <h2 className="text-2xl font-black">{name} Overview</h2>
            <div className="py-8">
              <h3 className="text-gray-500 underline font-semibold">About the Destination</h3>
              {showFullContent ? (
                <>
                  {parseHTML(description)}
                  <h3 className="text-gray-500 underline font-semibold">Inclusions:</h3>
                  {parseHTML(inclusion)}
                  <h3 className="text-gray-500 underline font-semibold">Exclusions:</h3>
                  {parseHTML(exclusion)}
                </>
              ) : (
                <div className="py-5 line-clamp-3">{parseHTML(description)}</div>
              )}
              <button
                onClick={toggleContent}
                className="text-green-900 font-semibold mt-2"
              >
                {showFullContent ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </div>

          {/* Itinerary Section */}
          <div className="mt-10 px-5 py-10 bg-white rounded-2xl drop-shadow-xl">
            <h2 className="text-2xl font-black pb-10">{duration} Magical {name} Itinerary</h2>
            <div className="sm:w-full mx-auto">
              {itinerary.map((day, index) => (
                <div
                  key={index}
                  className={`border mb-2 rounded-lg hover:bg-gray-100 ${activeSection === `section${index}` ? 'bg-gray-100' : 'bg-white'}`}
                >
                  <div
                    className="p-2 cursor-pointer"
                    onClick={() => toggleSection(`section${index}`)}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-[14px] flex justify-center items-center font-extrabold gap-5">
                        <span className="border-2 flex-1 font-extrabold p-2 rounded-lg">Day {day.day}</span>{day.title}
                      </h3>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-6 w-6 transition-transform ${activeSection === `section${index}` ? 'transform rotate-180' : ''}`}
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
                    <div className="px-4 pb-4 transition-max-height max-h-96 overflow-hidden">
                      {parseHTML(day.description)}
                      {day.image && (
                        <img
                          src={getImageUrl(day.image)}
                          alt={`Itinerary Image for Day ${day.day}`}
                          className="w-full mt-4 rounded-lg object-cover"
                          loading="lazy"
                        />
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-sm font-black italic mt-5">* Note: This itinerary is customizable according to your preferences and the duration of your trip.</p>
          </div>

          {/* Policies Section */}
          <div className="mt-10 px-5 py-10 bg-white rounded-2xl drop-shadow-xl">
            <h2 className="text-2xl font-black">Policies</h2>
            <h3 className="text-gray-500 underline font-semibold mt-5">Booking and Reservation Policy</h3>
            <ul className="list-disc list-inside">
              <li>To confirm a booking, a minimum advance payment of 30% is required.</li>
              {/* Additional policies can be listed here */}
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-20 md:w-1/3 w-full">
          <Suspense fallback={<LoadingSpinner />}>
            <Form />
          </Suspense>
        </div>
      </div>

      {/* Most Selling Packages Section */}
      <section className="bg-[#414341] bg-opacity-5">
        <Suspense fallback={<LoadingSpinner />}>
          <MostSellingPackage />
        </Suspense>
      </section>
    </div>
  );
};

export default TourDetails;
