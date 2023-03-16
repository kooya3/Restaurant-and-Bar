import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Newsletter = () => {
    const formRef = useRef();
  const [form, setForm] = useState({
    message: '',
    });

  const [loading, setLoading] = useState(false);
  
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
    .send(
      'service_5v38bop',
      'template_ol32w0z',
    {
      from_name: form.name,
      to_name: "Elyees",
      from_email: form.email,
      to_email: "elyees.dev@gmail.com",
      message: form.message,
    },
    'VOFw9-a5rZR8R_V88'
  )
  .then(
    () => {
      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");

      setForm({
        message: "",
      });
    },
    (error) => {
      setLoading(false);
      console.error(error);

      alert("Ahh, something went wrong. Please try again.");
    }
  );
};
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
      <p className="p__opensans">And never miss latest Updates!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Enter your email address" />
      <button type="button" className="custom__button">Subscribe</button>
    </div>
  </div>
};


/* template_ol32w0z */
/* service_5v38bop */
/* VOFw9-a5rZR8R_V88 */



export default Newsletter;