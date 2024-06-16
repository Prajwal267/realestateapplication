import React from 'react';
import './About.css';
import img1 from '../Accets/images/h3.jpg'; // Ensure this image path is correct

const About = () => {
  return (
    <section id="about-section" className="about-company">
      <div className="bgcon" style={{ backgroundImage: `url(${img1})` }}>
        <div className="about-header">
          <h1>About RealEst</h1>
        </div>
      </div>
      <div className="container">
        <div className="about-content">
          <div className="about-left">
            <h2>Some words about</h2>
            <p>Working Since 1976</p>
          </div>
          <div className="about-right">
            <p>Welcome to RealEst, your premier destination for all your real estate needs. At RealEst, we are dedicated to helping you find the perfect property that meets your unique requirements. Whether you're searching for a cozy apartment, a spacious family home, or a lucrative investment opportunity, our team of experienced professionals is here to assist you every step of the way. With a deep-rooted passion for real estate and a commitment to client satisfaction, RealEst strives to exceed your expectations and deliver exceptional results. Explore the possibilities with RealEst—where your real estate journey begins.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
