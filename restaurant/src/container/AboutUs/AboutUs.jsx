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
        <p className="p__opensans">Welcome To AM | PM, A Vibrant Restaurant And Bar. Our Establishment Was Opened In 2021 With The Goal Of Providing Our Customers With A Unique Dining And Nightlife Experience. At AM | PM, We Offer A Display Of Scrumptious Dishes, Custom-Made Cocktails, And Live Entertainment That Will Make You Come Back For More And More...</p>
       {/*  <button type="button" className="custom__button">Know More</button> */}
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our Legacy</h1> 
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">AM | PM Is A Restaurant And Bar That Was Founded In 2021 By Two Ambitious Men. The Establishment Offers Finger-Licking Food, Refreshing Drinks, And A Lively Atmosphere, Making It A Hit With Locals And Visitors Alike. It Is Known For Its Focus On Quality Ingredients And Expertise In Preparation, AM | PM Has Become A Fixture In The Community, Offering A Special Dining And Drinking Escapade. On Fridays And Saturdays, The Establishment Offers Wild Offers That Draw In Crowds Looking For A Night Of Fun And Excitement.</p>
        {/* <button type="button" className="custom__button">Know More</button> */}
      </div>
    </div>
  </div>
);

export default AboutUs;