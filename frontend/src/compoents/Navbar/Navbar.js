import React, { useState } from 'react';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { navLinks } from '../../assets/data/data';
import ContactBar from '../Contact/contactBar';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/mountain forest.svg';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevIsOpen) => !prevIsOpen);
  };
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [isThemesDropdownOpen, setIsThemesDropdownOpen] = useState(false);

  // Toggle function for each dropdown
  const toggleLocationDropdown = () => {
    setIsLocationDropdownOpen((prevState) => !prevState);

  };

  const toggleThemesDropdown = () => {
    setIsThemesDropdownOpen((prevState) => !prevState);

  };



  return (
    <>
      |<ContactBar />
      <nav className="bg-green-900 text-white ">
        <div className="flex items-center px-3 justify-between sm:justify-around">
          <Link to={'/'} >
            <div className="flex items-center space-x-4">
              <div className="text-xl w-16 h-16 rounded-full bg-cover bg-center object-cover font-bold">
                <img src={logo} className='rounded-full  bg-green-900' alt='logo' />
              </div>
            </div>
          </Link>

          <div className="hidden md:flex text-lg space-x-16">
            <Link to={'/'}>
              <p className=''>Home</p>
            </Link>
            <div className="relative">
              <button onClick={toggleLocationDropdown} className="flex items-center space-x-1 focus:outline-none">
                Locations <FiChevronDown className="ml-2 text-sm" />
              </button>
              {isLocationDropdownOpen && (
                <div className="sm:absolute relative bg-green-600 z-[100000] py-5 w-[230px] pl-5  text-white rounded shadow-lg mt-2">
                  {navLinks.locations.map((location, index) => (
                    <Link key={index} to={location.main_link}>
                      <p className="flex items-center space-x-2">
                        {location.main_heading}
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="relative">
              <button onClick={toggleThemesDropdown} className="flex items-center space-x-1 focus:outline-none">
                Themes <FiChevronDown className="ml-2 text-sm" />
              </button>
              {isThemesDropdownOpen && (
                <div className="sm:absolute relative bg-green-600 z-[100000] py-5 w-[230px] pl-5  text-white rounded shadow-lg mt-2">
                  {navLinks.Packages.map((tourPackage, index) => (
                    <Link key={index} to={tourPackage.package_link}>
                      <p className="flex items-center space-x-2">
                        {tourPackage.package_name}
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to={'/services'}>
              <p className="hover:text-blue-200">
                Services
              </p>
            </Link>
            <Link to={'/contact-us'}>
              <p className="hover:text-blue-200">
                Contact Us
              </p>
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-xl text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden p-4 text-lg mt-2 space-y-2">
            <Link to={'/'}>
              <p>Home</p>
            </Link>
            <div className="relative">
              <button onClick={toggleLocationDropdown} className="flex items-center space-x-1 focus:outline-none">
                Locations <FiChevronDown className="ml-2 text-sm" />
              </button>
              {isLocationDropdownOpen && (
                <div className="mt-2 py-2 w-full bg-green-600 rounded-lg shadow-lg">
                  {navLinks.locations.map((location, index) => (
                    <Link key={index} to={location.main_link}>
                      <p className="flex items-center space-x-2">
                        {location.main_heading}
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="relative">
              <button onClick={toggleThemesDropdown} className="flex items-center space-x-1 focus:outline-none">
                Themes <FiChevronDown className="ml-2 text-sm" />
              </button>
              {isThemesDropdownOpen && (
                <div className="mt-2 py-2 w-full bg-green-600 rounded-lg shadow-lg">
                  {navLinks.Packages.map((tourPackage, index) => (
                    <Link key={index} to={tourPackage.package_link}>
                      <p className="flex items-center space-x-2">
                        {tourPackage.package_name}
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to={'/services'}>
              <p className="hover:text-blue-200">
                Services
              </p>
            </Link>
            <Link to={'/contact-us'}>
              <p className="hover:text-blue-200">
                Contact Us
              </p>
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
