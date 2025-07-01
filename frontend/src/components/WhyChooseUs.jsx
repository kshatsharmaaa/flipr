import React from 'react';
import './WhyChooseUs.css';
import homeIcon from '../assets/icons/home.svg';
import brushIcon from '../assets/icons/paintbrush-2.svg';
import dollarIcon from '../assets/icons/circle-dollar-sign.svg';
import visual1 from '../assets/images/pexels-brett-sayles-2881232.svg';
import visual2 from '../assets/images/pexels-andres-ayrton-6578391.svg';
import visual3 from '../assets/images/pexels-fauxels-3182834.svg';

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us">
      <div className="section-heading">
        <h2>Why Choose Us?</h2>
          <div className="underline" />
      </div>

      <div className="features">
        <div className="feature-card">
          <img src={homeIcon} alt="ROI" className='align-center' />
          <h3>Potential ROI</h3>
          <p>
            Whether you're looking to buy a home or renovate your current home for sale, we’ll walk you through powerful return-for-value.
          </p>
        </div>
        <div className="feature-card">
          <img src={brushIcon} alt="Design" />
          <h3>Design</h3>
          <p>
            Our designers and interior design teams guide you through space planning and renovation construction to streamline home upgrades.
          </p>
        </div>
        <div className="feature-card">
          <img src={dollarIcon} alt="Marketing" />
          <h3>Marketing</h3>
          <p>
            Strategic marketing, content production, and modern digital plans accompany every listing in today’s market.
          </p>
        </div>
      </div>

      <div className="feature-images">
        <div className="image-box top-left">
          <img src={visual1} alt="Visual 1" />
          <div className="corner orange" />
        </div>
        <div className="image-box center">
          <img src={visual2} alt="Visual 2" />
          <div className="corner blue" />
        </div>
        <div className="image-box bottom-right">
          <img src={visual3} alt="Visual 3" />
          <div className="corner orange" />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
