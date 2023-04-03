import React from 'react';
import {FiMapPin} from 'react-icons/fi';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans"><FiMapPin />&nbsp;Northern Bypass, Thome, After Windsor</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 9:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun: 9:00 am - 03:00 am</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}><a href="https://www.google.com/maps/place/AmPm+Lounge/@-1.2151611,36.8611296,18z/data=!4m6!3m5!1s0x182f3d1c3f8d4101:0x91b34b7ffe1262dd!8m2!3d-1.2153381!4d36.862181!16s%2Fg%2F11k4fq9_m7" target="_blank" rel="noopener noreferrer"> Visit Us</a></button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;