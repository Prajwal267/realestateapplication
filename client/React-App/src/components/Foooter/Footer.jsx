import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/logo-react.png";
const Footer = () => {
  return (
    <div className="footer ">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <ul className="footer-links">
          <li>About</li>
          <li>Contact</li>
          <li>Terms and conditions</li>
        </ul>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyrigth @ 2024- All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
