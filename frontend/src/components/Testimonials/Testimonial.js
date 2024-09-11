import React, { useEffect, useState } from 'react';
import { Slide } from 'react-slideshow-image';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import axios from 'axios';
import StarRatings from 'react-star-ratings';

const TestimonialsSlider = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // State to track loading status

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await axios.get('https://meghalaya-tourism.onrender.com/api/reviews');
      setTestimonials(response.data);
      setIsDataFetched(true);
      setIsLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error('Error fetching reviews', error.message);
      setIsLoading(false); // Set loading to false even on error
    }
  };

  const navigate = useNavigate();
  const takeToReview = () => {
    navigate('/write-review');
  };

  const responsiveSettings = [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: Math.min(2, testimonials.length),
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ];

  return (
    <div className="mt-12 px-6">
      <h2 className="text-center text-2xl sm:text-4xl font-bold text-gray-800 mb-8 leading-snug">
        Don't just take our word for it...
        <br />
        Read reviews from our customers
      </h2>
      {isLoading ? ( // Render preloader if data is loading
        <div className="text-center text-gray-500">Loading...</div>
      ) : isDataFetched && testimonials.length > 0 ? (
        <div className="relative">
          <Slide responsive={responsiveSettings} className="overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="mx-4 p-6 shadow-md text-center testimonial-text rounded-md flex flex-col gap-6 my-10 bg-white border border-gray-200"
              >
                <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                  "{testimonial.message}"
                </p>
                <div className="flex justify-center mb-4">
                  <StarRatings
                    rating={testimonial.rating}
                    starRatedColor="#34D399" // Elegant green color for selected stars
                    starEmptyColor="#E0E0E0" // Subtle gray for empty stars
                    starDimension="24px" // Optimal size for stars
                    numberOfStars={5} // Total number of stars
                    name={`rating-${index}`} // Name of the rating input
                  />
                </div>
                <h3 className="text-md font-semibold text-gray-900">{testimonial.name}</h3>
              </div>
            ))}
          </Slide>
        </div>
      ) : (
        <div className="text-center text-gray-600">No testimonials available.</div>
      )}
      <div className="text-center mt-8">
        <button 
          onClick={takeToReview} 
          className="bg-green-700 hover:bg-green-800 transition-colors duration-300 font-medium px-5 py-2 rounded-md text-white"
        >
          Give Your Word
        </button>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
