import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer.js/Footer";
import Routers from "../../router/Routers";
import { FiChevronUp } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa"; // Import the WhatsApp icon
import ScrollToTop from "../scrollToTop/scrollTop";
import AssistantForm from "../Assistant/Assistant";
const Layout = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Replace 'your-whatsapp-number' with your actual WhatsApp number
  const whatsappNumber = '+918794795255';
  const customMessage = 'Hello, I have a question.';
  const whatsappLink = `https://wa.me/${whatsappNumber}/?text=${encodeURIComponent(customMessage)}`;

  return (
    <>
      <ScrollToTop />

      {/* WhatsApp Icon Button (Left Side) */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 bottom-6 left-6 p-2 rounded-full bg-green-900 text-white shadow-lg transition-all duration-300 hover:bg-green-700 focus:outline-none"
      >
        <FaWhatsapp size={24} />
      </a>

      <Navbar />
      <Routers />
      <Footer />
      <AssistantForm />

      {showScrollButton && (
        <button
          className="fixed bottom-6 right-6 p-2 rounded-full bg-green-900 text-white shadow-lg transition-all duration-300 hover:bg-green-700 focus:outline-none"
          onClick={scrollToTop}
        >
          <FiChevronUp size={24} />
        </button>
      )}
    </>
  );
};

export default Layout;
