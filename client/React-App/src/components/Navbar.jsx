import React, { useState, useEffect } from "react";
import "../styles/NavbarCss.css";
import logo from "../Accets/logo-react.png";
import profile from "../Accets/profile-pic.jpg";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ propertyAreaRef }) => {
  const [menu, setMenu] = useState("Home");
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToPropertyArea = () => {
    if (propertyAreaRef && propertyAreaRef.current) {
      propertyAreaRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setMenu("ManageProperty");
  };

  const handleHomeClick = () => {
    setMenu("Home");
    navigate("/", { replace: true });
    window.location.reload();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAboutClick = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
    setMenu("About");
  };

  const handleScrollToSellerClick = () => {
    const sellerSection = document.getElementById("seller-section");
    if (sellerSection) {
      sellerSection.scrollIntoView({ behavior: "smooth" });
    }
    setMenu("SellProperty");
  };

  return (
    <div className={`navbar ps-5 pe-5 ${isNavbarFixed ? "fixed" : ""}`}>
      <img src={logo} alt="logo" className="logo" />
      <ul>
        <li
          onClick={handleHomeClick}
          className={menu === "Home" ? "active" : "list-item"}
          style={{ cursor: "pointer" }}
        >
          Home
        </li>
        <li
          onClick={scrollToPropertyArea}
          className={menu === "ManageProperty" ? "active" : "list-item"}
          style={{ cursor: "pointer" }}
        >
          Property List
        </li>
        <li
          onClick={handleAboutClick}
          className={menu === "About" ? "active" : "list-item"}
          style={{ cursor: "pointer" }}
        >
          About
        </li>
        <li
          onClick={handleScrollToSellerClick}
          className={menu === "SellProperty" ? "active" : "list-item"}
          style={{ cursor: "pointer" }}
        >
          Sell Your Property
        </li>
      </ul>

      <div className="Profile-btn">
        <div className="Entry">
          <button>
            <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
              Login
            </Link>
          </button>
        </div>

        <div className="Profile">
          <Link to="/profile" style={{ textDecoration: "none", color: "black" }}>
            <img src={profile} alt="profile" className="profile-pic" />
            <p className="seller-name">Stitch</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
