import React, { useState } from 'react';
import axios from 'axios'
import ReCAPTCHA from 'react-google-recaptcha';
import { useNavigate } from 'react-router';
const FormPage = () => {
    const [captchaValue, setCaptchaValue] = useState('');
    const [name, setName] = useState('');
    const [phoneNumber, setphoneNumber] = useState('');
    const [email, setemail] = useState('');
    const [address, setaddress] = useState('');
    const [message, setmessage] = useState('');
    const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
    const navigate = useNavigate();

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    setIsCaptchaVerified(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isCaptchaVerified) {
      alert('Please verify the reCAPTCHA.');
      return;
    }
    const formData = {
      name: name,
      phone_number: phoneNumber,
      email: email,
      address: address,
      message: message,
    };
    axios.post('http://localhost:5000/api/reviews', formData)
    .then((response) => {
      console.log('Data saved successfully:', response.data);
    })
    .catch((error) => {
      console.error('Error saving data:', error);
    });

    navigate('/thank-you')
  };
  return (
    <div className="flex justify-center my-[10rem] sm:my-24   items-center drop-shadow-2xl h-screen">
      <div className="bg-white p-8  rounded shadow-md w-full max-w-5xl  ">
        <h2 className="sm:text-[48px] text-[30px] text-center  font-bold mb-4">We value your feedback! Help us improve by sharing your thoughts.</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600 font-semibold">Name</label>
            <input required type="text" id="name" className="mt-1 p-2 w-full border rounded" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-600 font-semibold">Phone Number</label>
            <input required type="tel" id="phone" className="mt-1 p-2 w-full border rounded" value={phoneNumber} onChange={(e) => setphoneNumber(e.target.value)} />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 font-semibold">Email</label>
            <input type="email" id="email" className="mt-1 p-2 w-full border rounded" value={email} onChange={(e) => setemail(e.target.value)} />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-600 font-semibold">Address</label>
            <input type="text" id="address" className="mt-1 p-2 w-full border rounded" value={address} onChange={(e) => setaddress(e.target.value)} />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-600 font-semibold">Message</label>
            <textarea required id="message" rows="4" className="mt-1 p-2 w-full border rounded" value={message} onChange={(e) => setmessage(e.target.value)}></textarea>
          </div>
          <div className="mb-4">
          <ReCAPTCHA
              sitekey="6Le26XQnAAAAAMj8FfW56DvjnXvBfuoEx1L6VuD8"
              onChange={handleCaptchaChange}
            />
          </div>
          <button type="submit" onClick={handleSubmit} className="bg-green-900 text-white font-semibold py-2 px-8 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
