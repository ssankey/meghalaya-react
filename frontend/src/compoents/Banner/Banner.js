import React from 'react'
import { Fade} from 'react-slideshow-image'
import './Banner.css'
import 'react-slideshow-image/dist/styles.css'
import image1 from '../../assets/images/pexels-dizital-boost-11622977.jpg'
import image2 from '../../assets/images//chirayu-sharma-KAXnXl_S6K4-unsplash.jpg'
import image3 from '../../assets/images/prodeepta-bera-R7OCzH4t_b8-unsplash.jpg'
import image4 from '../../assets/images/hadwt-bcb-JeMSzUo-unsplash.jpg'
import image5 from '../../assets/images/image11.jpg'
const Banner = () => {


    return (
        <div className='relative'>
            <div className="static-text">
                <p className='text-[40px] sm:text-[65px]'><span className='text-[40px] sm:text-[95px] font-black'>Meghalaya -</span> Into The Mountains</p>
            </div>
            <Fade duration={2000}>
                <div className="each-slide-effects" >
                    <div className='bannerImage ' style={{ 'backgroundImage': `url(${image1})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%' }}>
                        <div className="overlay"></div>
                    </div>
                </div>
                <div className="each-slide-effects ">
                    <div className='bannerImage object-cover	' style={{ 'backgroundImage': `url(${image2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="overlay"></div>
                    </div>
                </div>
                <div className="each-slide-effects">
                    <div className='bannerImage object-cover	' style={{ 'backgroundImage': `url(${image3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="overlay"></div>
                    </div>
                </div>
                <div className="each-slide-effects">
                    <div className='bannerImage object-cover	' style={{ 'backgroundImage': `url(${image4})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="overlay"></div>
                    </div>
                </div>
                <div className="each-slide-effects">
                    <div className='bannerImage object-cover	' style={{ 'backgroundImage': `url(${image5})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="overlay"></div>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Banner