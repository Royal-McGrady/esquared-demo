import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './HeroSection.css';
import heroImage from '../assets/HeroImage.png';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container flex-container">
        {/* Hero Text */}
        <div className="hero-text">
          <h1 className="hero-title">Unlock the Future of Portfolio Management</h1>
          <p className="hero-description">
            Our powerful SaaS solution simplifies portfolio management, giving you the tools to track, analyze, and optimize investments effortlessly. Take control of your financial future today.
          </p>
          <Link to="/form" className="hero-button" aria-label="Get started with our platform">
            Get Started
          </Link>
        </div>

        {/* Hero Image */}
        <div className="hero-image-container">
          <img src={heroImage} alt="Portfolio Management Platform" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

