import React from 'react';
import banner from '../assets/images/arrival.jpg'
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';
import Form from '../compoents/Form/Form';

const ContactUs = () => {
  return (
    <div className="container mx-auto">
      {/* Banner Section */}
      <section className='banner'>
        <div className='flex justify-center items-center' style={{ position: 'relative', width: '100%', height: '550px' }}>
          <img
            src={banner}
            alt="Background"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              position: 'absolute',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              top: 0,
              left: 0,
              zIndex: -1,
            }}
          /><div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.7)', // Adjust the opacity (0.5 in this example) for the black shade
            }}
          ></div>
          <h1 className='font-black z-20 uppercase' style={{ color: 'white', fontSize: '36px' }}>
            Contact Us
          </h1>
        </div>

      </section>

      {/* Contact Details */}
      <div className="flex sm:flex-row mt-10 flex-col mx-auto ">
        {/* 1st Column with 2/3 width */}
        <div className="sm:w-2/3 w-full mx-auto">
          <div className="mb-8 px-5 py-10 bg-white rounded-2xl drop-shadow-xl">
            <h3 className="text-2xl font-semibold">Office Address:</h3>
            <p>Shillong 793008</p>
            <p>Meghalaya</p>
          </div>

          <div className="mb-8 px-5 py-10 bg-white rounded-2xl drop-shadow-xl">
            <h3 className="text-2xl font-semibold">Contact Numbers:</h3>
            <p>
              <MdPhone className="inline-block mr-2" />
              +91 87944 13317
            </p>
            <p>
              <MdPhone className="inline-block mr-2" />
              +91 87947 95255
            </p>
          </div>

          <div className="mb-8 px-5 py-10 bg-white rounded-2xl drop-shadow-xl">
            <h3 className="text-2xl font-semibold">Contact Person:</h3>
            <p>
              <strong>Mr. Raynauld Mark Pasi</strong>
              <br />
              Business Director
            </p>
            <p>
              <strong>Mrs. Lynette Kharsati</strong>
              <br />
              Managing Director
            </p>
          </div>

          <div className='px-5 py-10 bg-white rounded-2xl drop-shadow-xl'>
            <h3 className="text-2xl font-semibold">Contact Emails:</h3>
            <p>
              <MdEmail className="inline-block mr-2" />
              meghalayaintothemountains@gmail.com
            </p>
            <p>
              <MdEmail className="inline-block mr-2" />
              lynette.kharsati@gmail.com
            </p>
          </div>
        </div>

        {/* 2nd Column with 1/3 width */}
        <div className="sm:w-1/3 sm:mt-0  mt-5 rounded-lg">
          <Form/>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
