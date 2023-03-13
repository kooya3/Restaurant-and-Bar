import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Satisfy Your Cravings" />
      <h1 className="app__header-h1">Unleash Your Senses</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Step into the lively atmosphere of AM | PM and experience the ultimate dining and nightlife destination. Our vibrant spot boasts an array of delectable dishes, handcrafted cocktails, and live entertainment that will keep you coming back for more. 
      <span className="p__opensans wrap" style={{ margin: '0.6rem 0', display: 'flex', color: '#FDD36A', fontWeight: '600' }}>Free Goat meat! 🍖. &nbsp; Every friday and saturday from 6pm to 9pm </span>
      </p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;