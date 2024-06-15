import React from "react";
import arrow_icon from "../assets/arrow_icon.png"
import hero_image from "../assets/hero_image.png"
import "../Hero/Hero.css";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2> Be A Part Of</h2>
        <div className="hero-content">
          <p>REAL EST</p>
          <p>Sell </p>
          <p>Today</p>
        </div>
        <Link to='/ManageProperty' style={{ textDecoration: "none" }}>
        <div className="hero-sell-btn" >
        Sell Your Property
        <img src={arrow_icon} alt="arrow" />
        </div></Link>

      </div>
      <div className="hero-right">
     <img src={hero_image} alt="" />
     </div>
    </div>
  );
};

export default Hero;
