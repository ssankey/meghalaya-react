import React from 'react'
import { Slide } from 'react-slideshow-image'
import { sellingPackages } from '../../assets/data/data'
import { Fade } from 'react-awesome-reveal'
import './Cards.css'
import { Link } from 'react-router-dom'
const MostSellingPackage = () => {
    const responsiveSettings = [
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
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
      <div className='w-[90%] mx-auto '>
        <p className='text-xl mb-10  text-center'>{sellingPackages.mainSectionDescription}</p>
          <Slide indicators={true} infinite responsive={responsiveSettings}>
            {sellingPackages.sellingPackages.map((subLocation) => (
                <Fade triggerOnce direction='up'>
                <div className=" h-[700px] sm:h-[600px]  drop-shadow-xl rounded-2xl bg-white flex flex-col items-center mx-auto justify-between border-2 hover:shadow-xl shadow-lg sm:w-[400px] w-full">
                    <div>
                        <div className=' w-full h-[250px] rounded-2xl  ' style={{ 'backgroundImage': `url(${subLocation.image})`, 'backgroundPosition': 'center', backgroundSize: "cover"}}>
                        </div>
                        <section className='flex flex-col justify-between text-center px-6 py-4'>
                            <h1 className='text-[18px] text-black font-black'>{subLocation.title}</h1>
                            <p className='text-gray-600 pt-5'>{subLocation.description}</p>
                        </section>
                    </div>
                    <Link to={`/tour-package/${encodeURIComponent(subLocation.title)}`} className='mt-auto'>
                    <button className="bg-green-900 text-white font-bold py-2 px-4 mb-5 rounded">
                        Explore Package Details
                    </button>
                    </Link>
                </div>
                </Fade>
                ))}
          </Slide>
      </div>
  )
}

export default MostSellingPackage