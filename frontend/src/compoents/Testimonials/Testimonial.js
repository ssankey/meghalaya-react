import React, { useEffect, useState } from 'react';
import { Slide } from 'react-slideshow-image';
import { useNavigate } from 'react-router';
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
        slidesToShow: Math.min(3, testimonials.length),
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
    <div className="mt-10">
      <h2 className="text-[30px] leading-10 px-5 sm:text-5xl">
        Don't just take our word for it...
        <br />
        Read reviews from our customers
      </h2>
      {isLoading ? ( // Render preloader if data is loading
        <div className="text-center">Loading...</div>
      ) : isDataFetched && testimonials.length > 0 ? (
        <div style={{ position: 'relative' }}>
          <Slide responsive={responsiveSettings} className="overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="mx-5 p-8 shadow-lg text-center testimonial-text h-full rounded-lg flex flex-col gap-16 my-20 bg-white">
                <p className="text-gray-900 text-[18px]" style={{ maxWidth: "900px", maxHeight: "auto", overflow: 'auto' }}>
                  "{testimonial.message}"
                </p>
                <div className="flex justify-center items-center">
                  <StarRatings
                    rating={testimonial.rating}
                    starRatedColor="green" // Color of selected stars (change as needed)
                    starEmptyColor="#E0E0E0" // Color of empty stars (change as needed)
                    starDimension="30px" // Size of stars
                    numberOfStars={5} // Total number of stars
                    name={`rating-${index}`} // Name of the rating input
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{testimonial.name}</h3>
              </div>
            ))}
          </Slide>
        </div>
      ) : (
        <div>No testimonials available.</div>
      )}
      <div className="text-center my-10">
        <button onClick={takeToReview} className="bg-green-900 font-bold px-6 py-2 rounded-lg text-white">
          Give Your Word
        </button>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
