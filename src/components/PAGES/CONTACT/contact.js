import React, { useState } from 'react';
import { Typography, TextField, Button } from '@mui/material';
import Contact from "../IMAGES/contact.jpg";
import './contact.css'


const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);

    if (e.target.value.trim() === '') {
      setNameError('Please enter your name');
    } else if (!/^[a-zA-Z\s]+$/.test(e.target.value)) {
      setNameError('Please enter a valid name');
    } else {
      setNameError('');
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);

    if (e.target.value.trim() === '') {
      setEmailError('Please enter your email');
    } else if (!validateEmail(e.target.value)) {
      setEmailError('Please enter a valid email');
    } else {
      setEmailError('');
    }
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);

    if (e.target.value.trim() === '') {
      setMessageError('Please enter your message');
    } else {
      setMessageError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === '') {
      setNameError('Please enter your name');
      return;
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      setNameError('Please enter a valid name');
      return;
    } else {
      setNameError('');
    }

    if (email.trim() === '') {
      setEmailError('Please enter your email');
      return;
    } else if (!validateEmail(email)) {
      setEmailError('Please enter a valid email');
      return;
    } else {
      setEmailError('');
    }

    if (message.trim() === '') {
      setMessageError('Please enter your message');
      return;
    } else {
      setMessageError('');
    }

    // Perform the form submission or API call here
    console.log('Form submitted');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="container11">
      <div className="content11">
        <div>
          <img src={Contact} alt="Contact Us" style={{ height: '450px' }} />
        </div>
        <div>
          <Typography style={{ fontSize: '42px', fontWeight: 'bolder', fontFamily: 'poppins',color:"darkblue" }} gutterBottom>
            Contact<span className='cardsq'> Us</span>
          </Typography>
          <form className="form11" onSubmit={handleSubmit}>
            <TextField
              label="Name*"
              value={name}
              onChange={handleNameChange}
              error={!!nameError}
              helperText={nameError}
            />
            <TextField
              label="Email*"
              value={email}
              onChange={handleEmailChange}
              error={!!emailError}
              helperText={emailError}
            />
            <TextField
              label="Message*"
              value={message}
              onChange={handleMessageChange}
              error={!!messageError}
              helperText={messageError}
              multiline
              rows={4}
            />
            <Button variant="contained" style={{ backgroundColor: '#662d91', color: 'white' }} type="submit">
              Send
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;