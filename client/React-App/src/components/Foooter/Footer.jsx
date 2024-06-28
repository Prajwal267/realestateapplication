import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/logo-react.png";
const Footer = () => {
  return (
    <footer>
            <div className="footer-container">
                <div className="footer-column">
                    <h2>About Site</h2>
                    <p>We're reimagining how you buy, sell and rent. It's now easier to get into a place you love. So let's do this, together.</p>
                    <p className="contact-info"><i className="fas fa-map-marker-alt" style={{ color: 'rgb(42, 194, 211)', marginRight:'10px' }}></i>  Collins Street West, Victoria 8007, Australia.</p>
                    <p className="contact-info"><i className="fas fa-phone" style={{ color: 'rgb(42, 194, 211)', marginRight:'10px' }}></i>  +123 456 7890</p>
                    <p className="contact-info"><i className="fas fa-envelope" style={{ color: 'rgb(42, 194, 211)', marginRight:'10px' }}></i>  info@example.com</p>
                </div>
                <div className="footer-column">
                    <h2>Navigation</h2>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">User's Guide</a></li>
                        <li><a href="#">Support Center</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h2>Gallery</h2>
                    <div className="gallery">
                        <img src={footer_logo} alt="Gallery Image" />
                        <img src={footer_logo} alt="Gallery Image" />
                        <img src={footer_logo} alt="Gallery Image" />
                        <img src={footer_logo} alt="Gallery Image" />
                        <img src={footer_logo} alt="Gallery Image" />
                        <img src={footer_logo} alt="Gallery Image" />
                        <img src={footer_logo} alt="Gallery Image" />
                        <img src={footer_logo} alt="Gallery Image" />
                        <img src={footer_logo} alt="Gallery Image" />

                    </div>
                </div>
                <div className="footer-column">
                    <h2>For Future Updates</h2>
                    <form>
                        <input type="email" placeholder="Your email" />
                        <button type="submit"><i className="fas fa-arrow-right " ></i></button>
                    </form>
                    <p>Don't forget to follow us on:</p>
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-pinterest"></i></a>
                        <a href="#"><i className="fab fa-dribbble"></i></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Copyright © 2024 RealEst. All Rights Reserved.</p>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Property</a></li>
                    <li><a href="#">Membership</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </footer>
  );
};

export default Footer;
