import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import axios from 'axios'
import 'react-datepicker/dist/react-datepicker.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    contactNumber: '',
    selectedDate: null,
    numberOfPersons: 1
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      selectedDate: date
    }));
  };

  const numberOfPersonsOptions = [...Array(9).keys()].map((num) => (
    <option key={num + 1} value={num + 1}>
      {num + 1}
    </option>
  ));

  // Add the "9+" option to the select dropdown
  numberOfPersonsOptions.push(
    <option key="9+" value="9+">
      9+
    </option>
  );
   const handleSubmit = (e) => {
    e.preventDefault();
     const queryString = Object.keys(formData)
       .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(formData[key])}`)
       .join('&');

     // Send a GET request with form data as query parameters
     axios.get(`http://localhost:5000/send-message?${queryString}`)
       .then((response) => {
         console.log('API call successful:', response.data);
         // Handle successful response here (e.g., show a success message)
       })
       .catch((error) => {
         console.error('API call error:', error);
         // Handle error here (e.g., show an error message)
       });
       alert('Message sent successfully')
};

  return (
    <div className="max-w-md rounded-2xl mx-auto sticky top-0 bg-white p-10 drop-shadow-2xl">
      <h2 className="text-2xl font-semibold mb-4">Send Enquiry</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-green-900"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-green-900"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contactNumber" className="block text-gray-700">
            Contact Number
          </label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-green-900"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="numberOfPersons" className="block text-gray-700">
            Number of Persons
          </label>
          <select
            id="numberOfPersons"
            name="numberOfPersons"
            value={formData.numberOfPersons}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-green-900"
            required
          >
            {numberOfPersonsOptions}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="selectedDate" className="block text-gray-700">
            Date
          </label>
          <DatePicker
            selected={formData.selectedDate}
            onChange={handleDateChange}
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-green-900"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full h-32 px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-green-900 resize-none"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-green-900 text-white font-semibold rounded-lg hover:bg-green-900 focus:outline-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
