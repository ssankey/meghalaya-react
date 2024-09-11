import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MostSellingPackage = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/selling-packages?populate=*`, {
          headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_API_TOKEN}`
          }
        });

        if (response.ok) {
          const data = await response.json();
          setPackages(data.data);
        } else {
          throw new Error('Failed to fetch packages');
        }
      } catch (error) {
        console.error('Error fetching packages:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  const getDescriptionText = (description) => {
    if (!description || !Array.isArray(description) || description.length === 0) {
      return 'No description available.';
    }

    const firstParagraph = description[0];
    if (firstParagraph.type === 'paragraph' && Array.isArray(firstParagraph.children)) {
      const textContent = firstParagraph.children
        .filter(child => child.type === 'text')
        .map(child => child.text)
        .join(' ');

      return textContent.length > 100 ? `${textContent.substring(0, 100)}...` : textContent;
    }

    return 'No description available.';
  };

  const CustomPrevArrow = ({ className, onClick }) => (
    <button
      className={`${className} absolute left-0 z-10 bg-gray-200 bg-opacity-80 rounded-full p-2 hover:bg-opacity-100 transition-all duration-300`}
      onClick={onClick}
      style={{ top: '50%', transform: 'translateY(-50%)' }}
    >
      <ChevronLeft className="w-5 h-5 text-gray-800" />
    </button>
  );

  const CustomNextArrow = ({ className, onClick }) => (
    <button
      className={`${className} absolute right-0 z-10 bg-gray-200 bg-opacity-80 rounded-full p-2 hover:bg-opacity-100 transition-all duration-300`}
      onClick={onClick}
      style={{ top: '50%', transform: 'translateY(-50%)' }}
    >
      <ChevronRight className="w-5 h-5 text-gray-800" />
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  if (loading) {
    return <p className="text-center text-xl py-8">Loading...</p>;
  }

  return (
    <div className="w-full mx-auto px-4 py-12 bg-gray-100">
      <h2 className="text-3xl font-semibold text-gray-800 text-center mb-10">Most Popular Packages</h2>
      <Slider {...settings} className="max-w-6xl mx-auto">
        {packages.map((pkg) => (
          <div key={pkg.id} className="px-4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
              <img
                loading="lazy"
                src={`${process.env.REACT_APP_API_URL}${pkg.attributes.image?.data?.attributes?.url || '/api/placeholder/400/320'}`}
                alt={pkg.attributes.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-medium text-gray-800 mb-3 h-14 overflow-hidden">
                  {pkg.attributes.name}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow h-24 overflow-hidden">
                  {getDescriptionText(pkg.attributes.description)}
                </p>
                <Link
                  to={`/tour-package/${encodeURIComponent(pkg.attributes.name)}`}
                  className="inline-block bg-green-600 text-white font-medium py-2 px-4 rounded hover:bg-green-700 transition-colors duration-300 text-center mt-auto"
                >
                  Explore Package
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MostSellingPackage;