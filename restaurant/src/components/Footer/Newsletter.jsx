import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ekhvjlh', 'template_1kql7og', formRef.current, 'ngs9p7jI_0GhMhbS9')
      .then((result) => {
        console.log(result.text);
        alert('Thank you for subscribing!');
        setEmail('');
      }, (error) => {
        console.log(error.text);
        alert('Oops, something went wrong. Please try again later.');
      });
  };

  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title="Newsletter" />
        <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
        <p className="p__opensans">And never miss latest Updates!</p>
      </div>
      <div className="app__newsletter-input flex__center">
        <form ref={formRef} onSubmit={handleSubmit}>
          <input type="email" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button type="submit" className="custom__button">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
