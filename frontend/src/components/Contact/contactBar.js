import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ContactBar = () => {
  return (
    <div className="bg-gray-800 sm:py-1 mt-[-24px] px-4 text-white text-sm flex flex-col sm:flex-row justify-between items-center sm:gap-0">
      <div className="text-center sm:text-left sm:flex sm:items-center sm:gap-4">
        {/* Phone Number 1 */}
        <div className="flex items-center gap-2 sm:mr-4">
          <FiPhoneCall />
          <Link to="tel:+918794795255" className="hover:underline">+91 87947 95255</Link>
        </div>

        {/* Phone Number 2 */}
        <div className="flex items-center gap-2">
          <FiPhoneCall />
          <a href="tel:+918119829466" className="hover:underline">+91 81198 29466</a>
        </div>

        {/* Email */}
        <div className="flex items-center gap-2 sm:ml-4">
          <a href="mailto:services@meghalayaintothemountains.com" className="hover:underline">
            services@meghalayaintothemountains.com
          </a>
        </div>
      </div>

      {/* Enquiry Button */}
      <Link to="/contact-us">
        <button className="bg-green-900 px-4 py-2 font-black sm:inline-block hidden rounded-md">
          Submit Enquiry
        </button>
      </Link>
    </div>
  );
};

export default ContactBar;
