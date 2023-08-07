import React from 'react';
import { Slide } from 'react-slideshow-image';
import './styles.css'
import Sarah from '../../assets/images/Sarah-Todd.jpg'
import Sarah1 from '../../assets/images/IMG-20230502-WA0034.jpg'
import sarah2 from '../../assets/images/sarah2.jpg'
import sarah3 from '../../assets/images/sarah3.jpg'
const PremiumCustomer = () => {
  const slideImages = [
    Sarah, 
    Sarah1,
    sarah2,
    sarah3,
  ];

  const slideProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
  };
  const responsiveSettings = [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ];

  return (
    <div className="bg-white max-w-[1300px] mx-auto text-center rounded-lg shadow-lg p-8">
      <h2 className="sm:text-[45px] text-[30px] font-bold mb-6">
        We have made quality our habit.
        It’s not something that we just strive for – we live by this principle every day.
      </h2>
      <h1 className="mb-6 text-2xl">
        It is our Pride to Present to You 'Sarah Todd in Meghalaya.
        Nothing we say about her is enough.
      </h1>
      <div className="slide-container">
        <Slide  responsive={responsiveSettings} {...slideProperties}>
          {slideImages.map((image, index) => (
            <div key={index} className="each-slide">
              <div className="square-image">
                <img src={image} alt={`Slide ${index + 1}`} />
              </div>
            </div>
          ))}
        </Slide>
      </div>
      <p className="text-xl mb-6">
        Sarah Todd is a well-known Australian chef, entrepreneur and television personality.
        She is popularly known for her appearance on MasterChef Australia, where she was a finalist in season six.
        Her passion for food led her to many travels, and she has worked in some of the world's most renowned restaurants,
        including Quay in Sydney and The French Laundry in Napa Valley, California.
        She is also the owner of two successful restaurants in India, The Wine Rack and Antares, both located in Goa.
        Sarah has also written a cookbook, "The Healthy Model Cookbook," which features recipes that focus on healthy eating.
        She continues to inspire food enthusiasts worldwide with her culinary skills and entrepreneurial spirit.
      </p>
    </div>
  );
};

export default PremiumCustomer;
