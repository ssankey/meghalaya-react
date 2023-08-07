import React, { useState } from 'react';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { navLinks } from '../../assets/data/data';
import ContactBar from '../Contact/contactBar';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/mountain forest.svg'
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <>
      |<ContactBar />
      <nav className="bg-green-900 text-white ">
        <div className="flex items-center px-3 justify-between sm:justify-around">
          <Link to={'/'} >
            <div className="flex items-center space-x-4">
              <div className="text-xl w-16 h-16 rounded-full bg-cover bg-center object-cover font-bold">
                <img src={logo} className='rounded-full  bg-green-900' alt='logo'/>
              </div>
            </div>
          </Link>

          <div className="hidden md:flex text-lg space-x-16">
            <Link to={'/'}>
              <p className=''>Home</p>
            </Link>
            <NavbarLinks links={navLinks.locations} title="Locations" />
            <NavbarLinks links={navLinks.Packages} title="Themes" />
            <Link to={'/services'}>
              <p className="hover:text-blue-200 ">
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
            <NavbarLinks links={navLinks.locations} title="Locations" />
            <NavbarLinks links={navLinks.Packages} title="Themes" />
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

const NavbarLinks = ({ title, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-1 hover:text-green-600 focus:outline-none"
      >
        {title}
        <FiChevronDown className="ml-2 text-sm" />
      </button>
      {isOpen && (
        <div className="sm:absolute relative bg-green-600 z-[100000] py-5 w-[230px] pl-5  text-white rounded shadow-lg mt-2">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.main_link || link.package_link}
              className="block text-lg my-2"
            >
              {link.main_heading || link.package_name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
