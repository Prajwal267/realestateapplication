import React, { useState, useEffect } from "react";
import img1 from "../Accets/images/h1.jpg";
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import '../styles/Seller.css'; 

const Seller = () => {
  const testimonials = [
    {
      Type: 'Sell Your Property',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      Type: 'Rent your Property',
      quote: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      Type: 'With RealEst',
      quote: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div id="seller-section" className="seller-container">
      <div className="background-image">
        <div className="overlay"></div>
        <div className="content">
          <h2 className="section-title">Sell your Property with RealEst</h2>
          <div className="testimonial">
            <div className="testimonial-text">
              <h3 className="testimonial-name">{testimonials[currentIndex].Type}</h3>
              <p className="testimonial-quote">{testimonials[currentIndex].quote}</p>
              <Link to="/seller-page" className="btn-link">Explore More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Seller;
