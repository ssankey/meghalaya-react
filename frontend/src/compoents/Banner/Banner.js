import React from 'react'
import { Fade} from 'react-slideshow-image'
import './Banner.css'
import 'react-slideshow-image/dist/styles.css'
import image1 from '../../assets/images/image23.jpg'
import image2 from '../../assets/images/chirayu-sharma-KAXnXl_S6K4-unsplash.jpg'
import image3 from '../../assets/images/umiam-lake.jpg'
import image4 from '../../assets/images/Mawlynnong-The-cleanest-city-in-Asia-soulveda.jpg'
import image5 from '../../assets/images/Laitlum_Canyons.jpg'
import image6 from '../../assets/images/image38.jpg'
import image7 from '../../assets/images/image5.jpg'
import image8 from '../../assets/images/mawsy.jpeg'
import image9 from '../../assets/images/garoHillls.jpg'
import image10 from '../../assets/images/seven-sisters.jpg'
import image11 from '../../assets/images/siju-cave.jpg'
import image12 from '../../assets/images/image5.jpg'
import image13 from '../../assets/images/nonkrekad.jpg'
const Banner = () => {


    return (
        <div className='relative'>
            {/* <div className="static-text">
                <p className='text-[40px] sm:text-[65px]'><span className='text-[40px] sm:text-[95px] font-black'>Meghalaya -</span> Into The Mountains</p>
            </div> */}
            <Fade duration={2000}>
                <div className="each-slide-effects-ban" >
                    <div className='bannerImage ' style={{ 'backgroundImage': `url(${image1})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%' }}>
                        <div className="overlay"></div>
                        <span className='text-[40px] text-white z-50 sm:text-[65px]'>Double Decker Living Root Bridge</span>
                    </div>
                </div>
                <div className="each-slide-effects-ban ">
                    <div className='bannerImage object-cover	' style={{ 'backgroundImage': `url(${image2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="overlay"></div>
                        <span className='text-[40px] text-white z-50 sm:text-[65px]'>Nohkalikai Waterfalls</span>
                    </div>
                </div>
                <div className="each-slide-effects-ban">
                    <div className='bannerImage object-cover	' style={{ 'backgroundImage': `url(${image3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="overlay"></div>
                        <span className='text-[40px] text-white z-50 sm:text-[65px]'>Umiam Lake</span>
                    </div>
                </div>
                <div className="each-slide-effects-ban">
                    <div className='bannerImage object-cover	' style={{ 'backgroundImage': `url(${image4})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="overlay"></div>

                        <span className='text-[40px] text-white z-50 sm:text-[65px]'>Mawlynnong Village</span>
                    </div>
                </div>
                <div className="each-slide-effects-ban">
                    <div className='bannerImage object-cover	' style={{ 'backgroundImage': `url(${image5})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="overlay"></div>
                        <span className='text-[40px] text-white z-50 sm:text-[65px]'>Laitlum Canyon</span>
                    </div>
                </div>
                <div className="each-slide-effects-ban">
                    <div className='bannerImage object-cover	' style={{ 'backgroundImage': `url(${image6})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="overlay"></div>
                        <span className='text-[40px] text-white z-50 sm:text-[65px]'>Dawki - Umngot River</span>
                    </div>
                </div>
                <div className="each-slide-effects-ban">
                    <div className='bannerImage object-cover	' style={{ 'backgroundImage': `url(${image7})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="overlay"></div>
                        <span className='text-[40px] text-white z-50 sm:text-[65px]'>Sohra</span>
                    </div>
                </div>
                <div className="each-slide-effects-ban">
                    <div className='bannerImage object-cover	' style={{ 'backgroundImage': `url(${image8})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="overlay"></div>
                        <span className='text-[40px] text-white z-50 sm:text-[65px]'>Mawsynram</span>
                    </div>
                </div>
                <div className="each-slide-effects-ban">
                    <div className='bannerImage object-cover	' style={{ 'backgroundImage': `url(${image9})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="overlay"></div>
                        <span className='text-[40px] text-white z-50 sm:text-[65px]'>Garo Hills</span>
                    </div>
                </div>
                <div className="each-slide-effects-ban">
                    <div className='bannerImage object-cover	' style={{ 'backgroundImage': `url(${image10})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="overlay"></div>
                        <span className='text-[40px] text-white z-50 sm:text-[65px]'>Seven Sisters Falls</span>
                    </div>
                </div>
                <div className="each-slide-effects-ban">
                    <div className='bannerImage object-cover	' style={{ 'backgroundImage': `url(${image11})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="overlay"></div>
                        <span className='text-[40px] text-white z-50 sm:text-[65px]'>Siju Cave</span>
                    </div>
                </div>
                <div className="each-slide-effects-ban">
                    <div className='bannerImage object-cover	' style={{ 'backgroundImage': `url(${image12})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="overlay"></div>
                        <span className='text-[40px] text-white z-50 sm:text-[65px]'>Balpakram National Park</span>
                    </div>
                </div>
                <div className="each-slide-effects-ban">
                    <div className='bannerImage object-cover	' style={{ 'backgroundImage': `url(${image13})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="overlay"></div>
                        <span className='text-[40px] text-white z-50 sm:text-[65px]'>Nokrek National Park</span>
                    </div>
                </div>
   
            </Fade>
        </div>
    );
}

export default Banner