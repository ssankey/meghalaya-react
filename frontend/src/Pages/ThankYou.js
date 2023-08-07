import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ThankYouPage = () => {
  const navigate = useNavigate();

  // Redirect to home page after 5-10 seconds
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate('/');
    }, 5000); // Change this value to set the desired delay (in milliseconds)

    // Clean up the timeout on component unmount
    return () => {
      clearTimeout(timeoutId);
    };
  }, [navigate]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Thank You for Your Review!</h2>
        <p>Your review has been successfully submitted.</p>
        <p>You will be redirected to the home page shortly.</p>
      </div>
    </div>
  );
};

export default ThankYouPage;
