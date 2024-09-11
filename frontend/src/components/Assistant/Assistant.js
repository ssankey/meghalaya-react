import React, { useState } from "react";
import { MdClose } from "react-icons/md"; // Import the close icon
import "./AssistantForm.css"; // Import your CSS file for styling
import { PiChatTeardrop } from 'react-icons/pi'
const AssistantForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send a request to your backend to handle the form submission and send an email.
    // You will need to implement the backend functionality separately.
    // After submitting, you can reset the form fields and close the form.
    setName("");
    setEmail("");
    setMessage("");
    setIsOpen(false);
  };

  return (
    <div className={`assistant-form ${isOpen ? "open" : ""}`}>
      <div className="assistant-icon" onClick={toggleForm}>
        {isOpen ? (
          <MdClose size={30} />
        ) : (
          <PiChatTeardrop  size={30}/>
        )}
      </div>
      {isOpen && (
        <div className="form-container">
          <h2>Please fill out the form below and we will get back to you as soon as possible.</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AssistantForm;
