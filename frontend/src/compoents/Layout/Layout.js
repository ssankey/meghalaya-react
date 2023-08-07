import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer.js/Footer";
import Routers from "../../router/Routers";
import { FiChevronUp } from "react-icons/fi";


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
    return (
       <>
          <Navbar />
            <Routers />
          <Footer />    
          {showScrollButton && (
        <button
          className="fixed bottom-6 right-6 p-2 rounded-full bg-green-900 text-white shadow-lg transition-all duration-300 hover:bg-green-700 focus:outline-none"
          onClick={scrollToTop}
        >
          <FiChevronUp size={24} />
        </button>
      )}  
       </>
    )
 }
 
 export default Layout