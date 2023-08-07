import React from 'react';
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiChevronDown, FiHome, FiMap } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/mountain forest.svg';
import { navLinks } from '../../assets/data/data';

const Footer = () => {
  return (
    <footer className="bg-green-900 mt-10 py-10">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contact Us Section */}
          <div className="text-white">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="mb-2">
              <FiMail size={18} className="inline mr-2" />
              meghalayaintothemountains@gmail.com
            </p>
            <p className="mb-2">
              <FiPhone size={18} className="inline mr-2" />
              +91 87944 13317
            </p>
            <p>
              <FiMapPin size={18} className="inline mr-2" />
              Shillong 793008, Meghalaya, India
            </p>
          </div>

          {/* Destination Links */}
          <div className="text-white">
            <h2 className="text-2xl font-semibold mb-4">Destinations</h2>
            <div className="flex flex-col justify-center items-center space-y-2">
              {navLinks.locations.map((location, index) => (
                <Link key={index} to={location.main_link}>
                  <p className="flex items-center space-x-2">
                    <FiMap size={18} className="inline mr-2" />
                    {location.main_heading}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Themes Links */}
          <div className="text-white">
            <h2 className="text-2xl font-semibold mb-4">Themes</h2>
            <div className="flex flex-col items-center space-y-2">
              {navLinks.Packages.map((tourPackage, index) => (
                <Link key={index} to={tourPackage.package_link}>
                  <p className="flex items-center space-x-2">
                    {tourPackage.package_name}
                    <FiChevronDown size={18} />
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Company Logo */}
        <div className="flex items-center justify-center mt-8">
          <Link to="/">
            <div className="w-16 h-16 rounded-full bg-cover bg-center object-cover">
              <img src={logo} alt="Company Logo" className="rounded-full" />
            </div>
          </Link>
        </div>

        {/* Additional Links */}
        <div className="flex justify-center mt-8 space-x-8">
          <Link to="/" className="text-white hover:text-blue-200">
            <FiHome size={20} />
          </Link>
          <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200">
            <FiFacebook size={20} />
          </a>
          <a href="https://www.twitter.com/example" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200">
            <FiTwitter size={20} />
          </a>
          <a href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200">
            <FiInstagram size={20} />
          </a>
        </div>

        {/* Copyright Statement */}
        <p className="mt-8 text-white">
          © {new Date().getFullYear()} Meghalaya: Into the Mountains. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
