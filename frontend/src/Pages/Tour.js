import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import Form from '../components/Form/Form';
import MostSellingPackage from '../components/PackageSlider/MostSellingPackage';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Tour = () => {
  const [selectedMainLocationData, setSelectedMainLocationData] = useState(null);
  const { locationName } = useParams();

  useEffect(() => {
    const fetchLocationData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/locations?populate[0]=image&populate[1]=facts&populate[2]=sublocations&populate[3]=sublocations.image&populate[4]=things_to_dos&populate[5]=things_to_dos.image`,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
            },
          }
        );

        const locationData = response.data.data;
        const foundLocation = locationData.find(
          (location) => location.attributes.name.toLowerCase() === locationName.toLowerCase()
        );

        setSelectedMainLocationData(foundLocation?.attributes || null);
      } catch (error) {
        console.error('Error fetching location data:', error);
      }
    };

    fetchLocationData();
  }, [locationName]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  if (!selectedMainLocationData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 text-xl font-semibold text-gray-800">
        Location not found
      </div>
    );
  }

  const { name, description, image, facts, sublocations, things_to_dos } = selectedMainLocationData;

  const getImageUrl = (imageData) => {
    if (imageData && imageData.data && imageData.data.attributes) {
      return `${process.env.REACT_APP_API_URL}${imageData.data.attributes.url}`;
    }
    return null;
  };

  const renderDescription = (description) => {
    if (
      Array.isArray(description) &&
      description.length > 0 &&
      description[0].children &&
      description[0].children.length > 0
    ) {
      return description[0].children[0].text;
    }
    return "Description not available.";
  };

  return (
    <div className="bg-gray-50">
      <Helmet>
        <title>{name} Tour | Meghalaya Into The Mountains</title>
        <meta
          name="description"
          content={`Explore the beauty of ${name}. Discover places to visit, things to do, and more with Lets See Tour and Travels.`}
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={getImageUrl(image)}
            alt={name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <h1 className="text-5xl font-bold text-white z-10 text-center uppercase tracking-wider">
          {name}
        </h1>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Column */}
          <div className="md:w-2/3">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-semibold mb-4">Explore The Beauty Of {name}</h2>
              <p className="text-lg leading-relaxed text-gray-700">{renderDescription(description)}</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-4">Facts about {name}</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {facts.map((fact, index) => (
                  <li key={index}>{fact.children[0].children[0].text}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:w-1/3">
            <Form />
          </div>
        </div>
      </div>

      {/* Places to Visit and Things to Do */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What's in it for Travellers?</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Places to Visit */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <h3 className="text-2xl font-semibold bg-green-600 text-white p-4">Places To Visit</h3>
              <Slider {...sliderSettings}>
                {sublocations.data.map((subLocation, index) => (
                  <div key={index} className="p-6">
                    <img
                      src={getImageUrl(subLocation.attributes.image)}
                      alt={subLocation.attributes.name}
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                    <h4 className="text-xl font-semibold mb-2">{subLocation.attributes.name}</h4>
                    <p className="text-gray-600">{subLocation.attributes.description.replace(/(<([^>]+)>)/gi, "")}</p>
                  </div>
                ))}
              </Slider>
            </div>

            {/* Things to Do */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <h3 className="text-2xl font-semibold bg-green-800 text-white p-4">Things To Do</h3>
              <Slider {...sliderSettings}>
                {things_to_dos?.data?.length > 0 ? (
                  things_to_dos.data.map((todo, index) => (
                    <div key={index} className="p-6">
                      <img
                        src={getImageUrl(todo.attributes.image)}
                        alt={todo.attributes.name}
                        className="w-full h-64 object-cover rounded-lg mb-4"
                      />
                      <h4 className="text-xl font-semibold mb-2">{todo.attributes.name}</h4>
                      <p className="text-gray-600">{todo.attributes.description}</p>
                    </div>
                  ))
                ) : (
                  <div className="p-6">
                    <p className="text-gray-600">No activities listed for this location.</p>
                  </div>
                )}
              </Slider>
            </div>
          </div>
        </div>
      </section>

      {/* Most Selling Packages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Explore Our Most Selling Packages</h2>
          <MostSellingPackage />
        </div>
      </section>
    </div>
  );
};

export default Tour;