import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Welcome To AM PM, A Vibrant Restaurant And Bar. Our Establishment Was Opened In 2021 With The Goal Of Providing Our Customers With A Unique Dining And Nightlife Experience. At AM | PM, We Offer An Array Of Delectable Dishes, Handcrafted Cocktails, And Live Entertainment That Will Keep You Coming Back For More..</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">AM | PM is a restaurant and bar that was founded in 2020 by two ambitious men. The establishment offers delicious food, refreshing drinks, and a lively atmosphere, making it a hit with locals and visitors alike. Known for its focus on quality ingredients and expert preparation, AM | PM has become a fixture in the community, offering a unique dining and drinking experience. On Fridays and Saturdays, the establishment offers wild offers that draw in crowds looking for a night of fun and excitement.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;