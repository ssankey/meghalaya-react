import React, { useEffect, useState } from 'react';
import { Slide } from 'react-slideshow-image';
import { useNavigate } from 'react-router';
// import 'react-slideshow-image/dist/styles.css';
import './styles.css'
import axios from 'axios';




const TestimonialsSlider = () => {
  const [testimonials, settestimonials] = useState([]);
  useEffect(() => {
    fetchReviews();
  }, [testimonials])

  const fetchReviews = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/reviews');
      settestimonials(response.data)
      console.log(testimonials);
    } catch (error) {
      console.error('Error fetching reviews', error.message);
    }
  }



  const navigate = useNavigate();
  const takeToReview = () => {
    navigate('/write-review');
  }
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
        slidesToShow: Math.min(1, testimonials.length),
        slidesToScroll: 1
      }
    }
  ];


  return (
    <div className="mt-10 w-[90%] mx-auto">
      <h2 className='text-[30px] sm:text-5xl'>
        Don't just take our word for it...
        <br />
        Read reviews from our customers
      </h2>

      <div style={{ position: 'relative' }}>
        <Slide responsive={responsiveSettings} className="overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="mx-5 p-8 shadow-lg text-center testimonial-text h-full  rounded-lg flex flex-col gap-16 my-20 bg-white">
              <p className="text-gray-900 text-[18px]" style={{ maxWidth: "900px", maxHeight: "auto", overflow: 'auto' }}>
                {testimonial.message}
              </p>
              <h3 className="text-lg font-semibold mb-2">{testimonial.name}</h3>
            </div>
          ))}
        </Slide>
      </div>
      <div className='text-center my-10'>
        <button onClick={takeToReview} className='bg-green-900 font-bold px-6 py-2 rounded-lg text-white '>Give Your Word</button>
      </div>
    </div>

  );
};

export default TestimonialsSlider;